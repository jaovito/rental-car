import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;

  padding: 20% 2%;

  background-color: ${props => props.theme.COLORS.BACKGROUND_BLACK};
`

export const TitleContainer = styled.View`
  align-items: center;
  justify-content: center;

  position: relative;
  top: 10%;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONTS.TITLE_BOLD};
  font-size: 30px;
`

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: 13px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const CarImage = styled.Image`
  width: ${Dimensions.get('screen').width}px;
  height: 300px;
  opacity: 0.7;
`

export const Button = styled.TouchableOpacity`
  width: 300px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  height: 56px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const ButtonText = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-left: 10px;
`
