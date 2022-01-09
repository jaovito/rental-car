import React, { useState } from 'react';
import storage from '@react-native-firebase/storage'
import { StatusBar } from 'expo-status-bar';

import { Profile } from '@components/Profile';
import { useRoute } from '@react-navigation/native';
import { 
  Container, 
  Main, 
  TitleContainer,
  Title,
  Year,
  Image,
  RowContainer,
  InfoContainer,
  Label,
  Value,
  Status,
  Owner,
} from './styles'
import { Loading } from '@components/Loading';
import theme from '../../theme';
import firestore from '@react-native-firebase/firestore';

type RouteParams = Product

export function BuyInfo() {
  const [rental, setRental] = useState<Rent>();
  const [photoUrl, setPhotoUrl] = useState('');
  const [loading, setLoading] = useState(true);

  const route = useRoute();
  const params = route.params as RouteParams;

  React.useEffect(() => {
    async function getUrl() {
      const reference = storage().ref(params.image_url)
      const url = await reference.getDownloadURL()

      firestore()
      .collection('rentals')
      .doc(params.id)
      .get()
      .then(rental => {
        setRental(rental.data() as Rent)
      })
  
      setPhotoUrl(url.toString())
      setLoading(false)
    }
    getUrl()
  }, [params.image_url])

  return (
    <Container>
      <StatusBar translucent style='dark' backgroundColor='transparent' />
      <Profile hasReturn dontExit />

      <Main>
        <TitleContainer>
          <Title>{params.name}</Title>
          <Year>{params.year}</Year>
        </TitleContainer>

        {loading ? <Loading color={theme.COLORS.WHITE} /> : <Image resizeMode='contain' source={{ uri: photoUrl }} />}

        <RowContainer>
          <InfoContainer>
            <Label>Valor a pagar</Label>
            <Value>R${rental?.value}</Value>
          </InfoContainer>

          <InfoContainer>
            <Label>Retorno</Label>
            <Value>{rental?.return}</Value>
          </InfoContainer>
        </RowContainer>

        <RowContainer>
          <InfoContainer>
            <Label>Status</Label>
            <Status>{rental?.status}</Status>
          </InfoContainer>

          <InfoContainer>
            <Label>Dono</Label>
            <Owner>{params.owner}</Owner>
          </InfoContainer>
        </RowContainer>
      </Main>
    </Container>
  )
}
