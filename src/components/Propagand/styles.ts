import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import FIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 85px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: 10px;
  padding: 16px;

  margin-top: 20px;

  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.BORDER};
`;

export const TextContainer = styled.View``;

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.TITLE};
  margin-bottom: 7px;
`;

export const Description = styled.Text`
  font-size: 13px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.DESCRIPTION};
`;

export const Button = styled(RectButton)`
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  width: 47px;
  height: 47px;
  border-radius: 10px;

  align-items: center;
  justify-content: center;
`;

export const Icon = styled(FIcon)`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
