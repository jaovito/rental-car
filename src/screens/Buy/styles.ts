import styled from "styled-components/native";
import Feather from 'react-native-vector-icons/Feather'
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.ScrollView`
  padding: 55px 33px;
  flex: 1;
`

export const Main = styled.View`
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`

export const TitleContainer = styled.View`
  width: 100%;
`

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${({theme}) => theme.FONTS.TITLE};
  color: ${({theme}) => theme.COLORS.TITLE};
`

export const Year = styled.Text`
  font-size: 13px;
  font-family: ${({theme}) => theme.FONTS.TITLE};
  color: ${({theme}) => theme.COLORS.DESCRIPTION};
`

export const Image = styled.Image`
  width: 100%;
  height: 180px;
`

export const PaymentInfo = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  margin-top: 20px;
`

export const DayContainer = styled.View`
  align-items: center;
  justify-content: center;
`

export const Label = styled.Text`
  font-size: 13px;
  font-family: ${({theme}) => theme.FONTS.TITLE};
  color: ${({theme}) => theme.COLORS.DESCRIPTION};
`

export const CounterContainer = styled.View`
  flex-direction: row;
`

export const CounterButton = styled.TouchableOpacity`
  padding: 5px;
  align-items: center;
  justify-content: center;
`

export const Counter = styled.Text`
  color: ${({theme}) => theme.COLORS.BLUE_TEXT};
  font-family: ${({theme}) => theme.FONTS.TITLE};
  font-size: 13px;
  padding-top: 5px;
`

export const PaymentMethodContainer = styled.View`
  align-items: center;
  justify-content: center;
`

export const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`

export const Icon = styled(Feather)`
  margin: 0 5px;
  font-size: 16px;
  color: ${({theme}) => theme.COLORS.PINK};
`

export const ValueContainer = styled.View`
  align-items: center;
  justify-content: center;
`

export const Value = styled.Text`
  color: ${({theme}) => theme.COLORS.GREEN};
  font-family: ${({theme}) => theme.FONTS.TITLE};
  font-size: 16px;
`

export const OwnerContainer = styled.View`
  align-items: center;
  justify-content: center;

  margin-top: 30px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.COLORS.BLUE_TEXT};
`

export const OwnerTitle = styled.Text`
  color: ${({theme}) => theme.COLORS.TITLE_100};
  font-family: ${({theme}) => theme.FONTS.TITLE};
  font-size: 16px;
`

export const Owner = styled.Text`
  color: ${({theme}) => theme.COLORS.BLUE_TEXT};
  font-family: ${({theme}) => theme.FONTS.TITLE};
  font-size: 22px;
`

export const DescriptionContainer = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.WHITE};

  padding: 25px;
  margin-top: 30px;

  border-radius: 10px;
`

export const Description = styled.Text`
  font-size: 13px;
  font-family: ${({theme}) => theme.FONTS.TITLE};
  color: ${({theme}) => theme.COLORS.TITLE_100};
`

export const Button = styled(RectButton)`
  width: 100%;
  height: 56px;
  align-items: center;
  justify-content: center;

  margin-top: 20px;
  background-color: ${({theme}) => theme.COLORS.BLUE};

  border-radius: 10px;

  margin-bottom: 70px;
`

export const ButtonText = styled.Text`
  color: ${({theme}) => theme.COLORS.WHITE};
  font-family: ${({theme}) => theme.FONTS.TITLE};
  font-size: 16px;
`
