import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  margin-top: 10px;
`

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.Text`
  font-family: ${({theme}) => theme.FONTS.TITLE};
  font-size: 19px;
  line-height: 30px;
  color: ${({theme}) => theme.COLORS.TITLE_100};
`

export const SeeMoreContainer = styled.TouchableOpacity`
  position: relative;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const SeeMore = styled.Text`
  position: relative;
  right: 30px;

  font-family: ${({theme}) => theme.FONTS.TITLE};
  font-size: 16PX;
  line-height: 30px;
  color: ${({theme}) => theme.COLORS.BLUE_TEXT};
`

export const Arrow = styled(Icon)`
  font-size: 20px;
  color: ${({theme}) => theme.COLORS.BLUE_TEXT};
  margin-left: 10px;

  position: absolute;
  right: 0;
  top: 4px;
`
