import React from 'react';
import { Container, LoadingIndicator } from './styles'
import theme from '../../theme';
import { ActivityIndicatorProps } from 'react-native';

type Props = ActivityIndicatorProps

export function Loading({...rest}: Props) {
  return (
    <Container>
      <LoadingIndicator size='large' color={theme.COLORS.BLUE} {...rest}/>
    </Container>
  )
}
