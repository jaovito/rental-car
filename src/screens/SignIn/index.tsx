import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { 
  Container, 
  TitleContainer,
  Title,
  SubTitle,
  CarImage,
  Button,
  ButtonText, 
} from './styles'

import carImg from '@assets/carLogo.png'
import theme from '../../theme';
import { useAuth } from '../../contexts/authContext'
import { StatusBar } from 'expo-status-bar';

export default function SignIn() {
  const {signIn} = useAuth()

  return (
    <Container>
      <StatusBar style='light' translucent />
      <TitleContainer>
        <Title>Rental Car</Title>
        <SubTitle>Alugue seu carro favorito por um bom preço</SubTitle>
      </TitleContainer>

      <CarImage source={carImg} />

      <Button onPress={signIn} activeOpacity={.8}>
        <Icon name='google' size={20} color={theme.COLORS.RED} />

        <ButtonText>
          Entrar com Google
        </ButtonText>
      </Button>
    </Container>
  )
}
