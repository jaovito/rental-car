import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.Modal``

export const Overlay = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;

  background-color: ${({theme}) => theme.COLORS.MODAL};
`

export const Main = styled.View`
  background-color: ${({theme}) => theme.COLORS.WHITE};

  border-radius: 10px;
  padding: 30px;
  width: 90%;
`

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.TITLE};
  font-family: ${({theme}) => theme.FONTS.TITLE};
  font-size: 20px;

  margin-bottom: 24px;
`

export const Description = styled.Text`
  color: ${({theme}) => theme.COLORS.DESCRIPTION};
  font-family: ${({theme}) => theme.FONTS.TEXT};
  font-size: 16px;

  margin-bottom: 24px;
`

export const Spam = styled.Text`
  color: ${({theme}) => theme.COLORS.RED_TEXT};
  font-family: ${({theme}) => theme.FONTS.TITLE};
  font-size: 16px;
`

export const AddressContainer = styled.View`
  margin: 16px 0;
`

export const AdressTitle = styled.Text`
  color: ${({theme}) => theme.COLORS.TITLE};
  font-family: ${({theme}) => theme.FONTS.MEDIUM};
  font-size: 16px;
`

export const AdressInfo = styled.Text`
  color: ${({theme}) => theme.COLORS.DESCRIPTION};
  font-family: ${({theme}) => theme.FONTS.MEDIUM};
  font-size: 16px;
`

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin-top: 10px;
`

export const CancelButton = styled.TouchableOpacity`
  padding: 16px;
  border-radius: 10px;
  border: 2px solid ${({theme}) => theme.COLORS.RED_TEXT};
`

export const CancelButtontText = styled.Text`
  color: ${({theme}) => theme.COLORS.RED_TEXT};
  font-family: ${({theme}) => theme.FONTS.TITLE};
`

export const ConfirmButton = styled(RectButton)`
  padding: 16px;
  background-color: ${({theme}) => theme.COLORS.BLUE};
  border-radius: 10px;

  border: 2px solid ${({theme}) => theme.COLORS.BLUE};
`

export const ConfirmButtontText = styled.Text`
  color: ${({theme}) => theme.COLORS.WHITE};
  font-family: ${({theme}) => theme.FONTS.TITLE};
`
