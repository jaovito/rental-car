import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const Dot = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.COLORS.PINK};
  margin: 0 10%;
`
