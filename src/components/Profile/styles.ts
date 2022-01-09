import styled from "styled-components/native";
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
`

export const AvatarContainer = styled.View`
  width: 87px;
  height: 87px;
  border-radius: 50px;

  background-color: ${({theme}) => theme.COLORS.PROFILE};

  align-items: center;
  justify-content: center;

  margin-right: 10px;
`

export const AvatarImg = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50px;

  border-width: 3px;
  border-color: ${({theme}) => theme.COLORS.BACKGROUND};
`

export const TextContainer = styled.View`
  flex: 1;
`

export const Welcome = styled.Text`
  font-family: ${({theme}) => theme.FONTS.TEXT};
  font-size: 14px;
  color: ${({theme}) => theme.COLORS.WELCOME};
`

export const ProfileName = styled.Text`
  font-family: ${({theme}) => theme.FONTS.TITLE_BOLD};
  font-size: 21px;
  color: ${({theme}) => theme.COLORS.WELCOME};
`

export const Icon = styled(Feather)`
  font-size: 20px;
  color: ${({theme}) => theme.COLORS.TITLE_100};
  margin-right: 15px;
`
