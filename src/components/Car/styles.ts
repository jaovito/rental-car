import { Dimensions, Animated } from "react-native";
import styled from "styled-components/native";

export const Image = styled(Animated.Image)`
  width: ${Dimensions.get('screen').width / 1.1}px;
  height: 130px;

  margin: 0 20px;
`
