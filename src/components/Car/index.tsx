import * as React from 'react';
import { Animated, Dimensions, ImageSourcePropType } from 'react-native';
import { Image } from './styles'

type Props = {
  url: ImageSourcePropType;
  index: number;
  scrollX: Animated.Value;
}

const { width, height } = Dimensions.get('window')

export function Car({ url, index, scrollX }: Props) {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0]
  })

  return <Image style={{ transform: [{ scale }] }} resizeMode='contain' source={url} />
}
