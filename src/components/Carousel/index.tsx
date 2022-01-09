import * as React from 'react';
import { Animated, Dimensions } from 'react-native';
import cars from '../../utils/cars'
import { Car } from '../Car';

type Props = {
  scrollX: Animated.Value;
}

export function Carousel({scrollX}: Props) {

  return (
    <Animated.FlatList 
      data={cars}
      style={{
        width: Dimensions.get('screen').width,
        height: 200,
      }}
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
      }}
      keyExtractor={(item) => item.id}
      renderItem={({item, index}) => <Car index={index} scrollX={scrollX} url={item.image} />}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX }} }],
        { useNativeDriver: true }
      )}
      scrollEventThrottle={80}
    />
  )
}
