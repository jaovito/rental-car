import { ImageSourcePropType } from "react-native";

interface CarProps {
  id: string;
  image: ImageSourcePropType;
}

export default [
  {
    id: '1',
    image: require('../assets/audi.png')
  },
  {
    id: '2',
    image: require('../assets/bmw.png')
  },
  {
    id: '3',
    image: require('../assets/camaro.png')
  }
] as CarProps[]