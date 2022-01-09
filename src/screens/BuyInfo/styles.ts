import styled from "styled-components/native";

export const Container = styled.View`
  padding: 55px 33px;
`

export const Main = styled.View`
  padding: 20px;
  background-color: ${({theme}) => theme.COLORS.PURPLE};
  border-radius: 10px;

  margin-top: 30px;

  align-items: center;
  justify-content: center;
`

export const TitleContainer = styled.View`
  width: 100%;
  margin-bottom: 10px;
`

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${({theme}) => theme.FONTS.TITLE};
  color: ${({theme}) => theme.COLORS.WHITE};
`

export const Year = styled.Text`
  font-size: 13px;
  font-family: ${({theme}) => theme.FONTS.MEDIUM};
  color: ${({theme}) => theme.COLORS.WHITE_DESCRIPTION};
`

export const Image = styled.Image`
  width: 100%;
  height: 200px;
`

export const RowContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 30px;
`

export const InfoContainer = styled.View`
  min-width: 100px;
`

export const Label = styled.Text`
  font-size: 13px;
  font-family: ${({theme}) => theme.FONTS.TITLE};
  color: ${({theme}) => theme.COLORS.WHITE_DESCRIPTION};
`

export const Value = styled.Text`
  font-size: 18px;
  font-family: ${({theme}) => theme.FONTS.TITLE};
  color: ${({theme}) => theme.COLORS.WHITE};
`

export const Status = styled.Text`
  font-size: 18px;
  font-family: ${({theme}) => theme.FONTS.TITLE};
  color: ${({theme}) => theme.COLORS.GREEN};
`

export const Owner = styled.Text`
  font-size: 18px;
  font-family: ${({theme}) => theme.FONTS.TITLE};
  color: #48C8FF;
`
