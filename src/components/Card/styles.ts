import styled from "styled-components/native";

type ContainerProps = {
  color?: string;
}

type TitleProps = {
  text?: string;
}

type DescriptionProps = {
  description?: string;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  background-color: ${({theme, color}) => color || theme.COLORS.WHITE};
  width: 49%;
  padding: 10px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;

  margin-top: 16px;
`

export const TitleContainer = styled.View`
  width: 100%;
`

export const CarName = styled.Text<TitleProps>`
  font-size: 16px;
  font-family: ${({theme}) => theme.FONTS.TITLE};
  color: ${({theme, text}) => text || theme.COLORS.TITLE};
`

export const Year = styled.Text<DescriptionProps>`
  font-size: 13px;
  font-family: ${({theme}) => theme.FONTS.MEDIUM};
  color: ${({theme, description}) => description || theme.COLORS.DESCRIPTION};
`

export const Image = styled.Image`
  width: 100%;
  height: 100px;
`

export const InfoContainer = styled.View`
  width: 100%;
`

export const Daily = styled.Text<DescriptionProps>`
  font-size: 13px;
  font-family: ${({theme}) => theme.FONTS.TITLE};
  color: ${({theme, description}) => description || theme.COLORS.DESCRIPTION};
`

export const Price = styled.Text<TitleProps>`
  font-size: 18px;
  font-family: ${({theme}) => theme.FONTS.TITLE_BOLD};
  color: ${({theme, text}) => text || theme.COLORS.TITLE};
  line-height: 20px;
`
