import theme from '../../theme';
import * as React from 'react';
import { Animated, Dimensions } from 'react-native';
import { Container, Dot } from './styles'

type Props = {
  scrollX: Animated.Value;
}

const { width, height } = Dimensions.get('screen');
const DOT_SIZE = 20;

export function Dots({ scrollX }: Props) {
  const inputRange = [-width / 3.72, 0, width / 3.72];
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: [-DOT_SIZE, 0, DOT_SIZE],
  });

  return (
    <Container>
      <Animated.View 
        style={[ 
          {
            width: DOT_SIZE,
            height: DOT_SIZE,
            borderRadius: DOT_SIZE / 2,
            borderWidth: 2,
            borderColor: theme.COLORS.BLUE,
          }, {
          position: 'absolute',
          left: '24%',
          transform: [{ translateX }],
        }]}
      />
      <Dot />
      <Dot />
      <Dot />
    </Container>
  )
}
