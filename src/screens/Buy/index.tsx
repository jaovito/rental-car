import React, { useEffect, useState } from 'react';
import { format, addDays } from 'date-fns';

import { useNavigation, useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'

import { 
  Container, 
  Main, 
  TitleContainer,
  Title,
  Year,
  Image,
  PaymentInfo,
  DayContainer,
  Label,
  CounterContainer,
  Counter,
  PaymentMethodContainer,
  IconContainer,
  ValueContainer,
  Value,
  Icon,
  CounterButton,
  OwnerContainer,
  OwnerTitle,
  Owner,
  DescriptionContainer,
  Description,
  Button,
  ButtonText,
} from './styles'
import { StatusBar } from 'expo-status-bar';
import { Profile } from '@components/Profile';

import { ActivityIndicator } from 'react-native';
import theme from '../../theme';
import { Modal } from '@components/Modal';
import { useAuth } from '@contexts/authContext';
import { ProfileScreenNavigationProp } from '../../@types/routes';

type RouteParams = {
  id: string;
}

export function Buy() {
  const [car, setCar] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(1);
  const [visible, setVisible] = useState(false);

  const { user } = useAuth();

  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const routes = useRoute();
  const params = routes.params as RouteParams;

  useEffect(() => {
    firestore()
    .collection('products')
    .doc(params.id)
    .get()
    .then(async product => {
      const response = product.data() as Product;
      const reference = storage().ref(response.image_url)
      const url = await reference.getDownloadURL()
  
      setLoading(false)

      setCar({...response, image_url: url});
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      setLoading(false)
    })

    return () => {
      setCar(null);
    }
  }, [params.id])

  function handleChangeVisibility() {
    setVisible(prevState => !prevState)
  }

  function handleIncrementCounter() {
    if (counter <= 30) {
      setCounter(prevState => prevState + 1)
    }
  }

  function handleDecrementCounter() {
    if (counter !== 1) {
      setCounter(prevState => prevState - 1)
    }
  }

  async function handleSubmit() {
    const date = addDays(new Date(), counter)

    if (car) {
      firestore()
      .collection('rentals')
      .add({
        product: firestore().doc(`products/${params.id}`),
        return: format(date, "dd/MM/yyyy"),
        status: 'AGUARDANDO',
        user: user?.uid,
        value: car.value * counter,
      })

      navigation.navigate('Buyed')
    }
  }

  return (
    <Container>
      <StatusBar translucent style='dark' backgroundColor='transparent' />
      <Profile dontExit hasReturn/>

      {loading ? <ActivityIndicator size='large' color={theme.COLORS.BLUE} /> : (
        <Main>
          <TitleContainer>
            <Title>{car?.name}</Title>
            <Year>{car?.year}</Year>
          </TitleContainer>

          <Image source={{ uri: car?.image_url}} resizeMode='contain' />

          <PaymentInfo>
            <DayContainer>
              <Label>Dias</Label>

              <CounterContainer>
                <CounterButton onPress={handleDecrementCounter}>
                  <Icon name='minus' />
                </CounterButton>

                <Counter>{counter}</Counter>
                
                <CounterButton onPress={handleIncrementCounter}>
                  <Icon name='plus' />
                </CounterButton>
              </CounterContainer>
            </DayContainer>

            <PaymentMethodContainer>
              <Label>Meios de pagamento</Label>

              <IconContainer>
                <Icon name="credit-card" />
                <Icon name="dollar-sign" />
              </IconContainer>
            </PaymentMethodContainer>

            <ValueContainer>
              <Label>Valor</Label>
              <Value>R${car && car.value * counter}</Value>
            </ValueContainer>
          </PaymentInfo>

          <OwnerContainer>
            <OwnerTitle>Dono</OwnerTitle>
            <Owner>{car?.owner}</Owner>
          </OwnerContainer>

          <DescriptionContainer>
            <Description>
              {car?.description}
            </Description>
          </DescriptionContainer>

          <Button onPress={handleChangeVisibility}>
            <ButtonText>Alugar</ButtonText>
          </Button>
        </Main>
      )}

      <Modal 
        visible={visible} 
        onCancel={handleChangeVisibility} 
        onConfirm={handleSubmit}
        district={car?.district}
        address={car?.street}
      />
    </Container>
  )
}
