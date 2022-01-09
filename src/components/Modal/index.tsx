import React from 'react';
import { ModalProps } from 'react-native';
import {
  Container,
  Main,
  Title,
  Description,
  AddressContainer,
  AdressTitle,
  AdressInfo,
  Overlay,
  Spam,
  Footer,
  CancelButton,
  CancelButtontText,
  ConfirmButton,
  ConfirmButtontText,
} from './styles';

type Props = ModalProps & {
  onCancel?: () => void;
  onConfirm?: () => void;
  address?: string;
  district?: string;
};

export function Modal({
  onConfirm,
  onCancel,
  address,
  district,
  ...rest
}: Props) {
  return (
    <Container transparent animationType="fade" statusBarTranslucent {...rest}>
      <Overlay>
        <Main>
          <Title>Deseja alugar este carro?</Title>

          <Description>
            Se confirmar esta ação será realizado o aluguel do carro, você
            deverá realizar o pagamento no local de retirada e o mesmo deverá
            ser buscado até as <Spam>18:00</Spam> horas de amanhã no seguinte
            local:
          </Description>

          <AddressContainer>
            <AdressTitle>Endereço:</AdressTitle>
            <AdressInfo>Endereço teste</AdressInfo>
          </AddressContainer>

          <AddressContainer>
            <AdressTitle>Bairro:</AdressTitle>
            <AdressInfo>Endereço teste</AdressInfo>
          </AddressContainer>

          <Footer>
            <CancelButton onPress={onCancel}>
              <CancelButtontText>Cancelar</CancelButtontText>
            </CancelButton>

            <ConfirmButton onPress={onConfirm}>
              <ConfirmButtontText>Confirmar</ConfirmButtontText>
            </ConfirmButton>
          </Footer>
        </Main>
      </Overlay>
    </Container>
  );
}
