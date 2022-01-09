import * as React from 'react';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { ProfileScreenNavigationProp } from 'src/@types/routes';
import {
  Container,
  TextContainer,
  Title,
  Description,
  Button,
  Icon,
} from './styles';

export function Propagand() {
  const [id, setId] = React.useState('');
  const [title, setTitle] = React.useState('BMW m2 competition');
  const [description, setDescription] = React.useState('R$4600 Por mês');

  const navigation = useNavigation<ProfileScreenNavigationProp>();

  React.useEffect(() => {
    firestore()
      .collection('propagand')
      .doc('1')
      .get()
      .then((propagand) => {
        const {
          title: tit,
          description: desc,
          car_id: carId,
        } = propagand.data() as Propagand;

        setTitle(tit);
        setDescription(desc);
        setId(carId);
      });
  }, []);

  function handleNavigateToBuy() {
    navigation.navigate('Buy', { id });
  }

  return (
    <Container>
      <TextContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextContainer>

      <Button onPress={handleNavigateToBuy}>
        <Icon name="arrow-right" />
      </Button>
    </Container>
  );
}
