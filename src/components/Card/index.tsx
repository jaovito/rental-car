import * as React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { 
  Container,
  TitleContainer,
  CarName,
  Year,
  Image,
  InfoContainer,
  Daily,
  Price,
} from './styles'
import storage from '@react-native-firebase/storage'

type Props = TouchableOpacityProps & {
  title: string;
  year: string;
  image: string;
  price: string;
  color?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

export function Card({title, year, price, image, color = '', primaryColor, secondaryColor, ...rest}: Props) {
  const [photoUrl, setPhotoUrl] = React.useState('')
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    async function getUrl() {
      const reference = storage().ref(image)
      const url = await reference.getDownloadURL()
  
      setPhotoUrl(url.toString())
      setLoading(false)
    }
    getUrl()
  }, [])

  
  return (
    <Container activeOpacity={.8} color={color} {...rest}>
      <TitleContainer>
        <CarName text={primaryColor}>{title}</CarName>
        <Year description={secondaryColor}>{year}</Year>
      </TitleContainer>

      {loading ? <ActivityIndicator size='small' color={'red'} /> : <Image resizeMode='contain'  source={{ uri: photoUrl}} />}

      <InfoContainer>
        <Daily description={secondaryColor}>DIARIA</Daily>
        <Price text={primaryColor}>{price}</Price>
      </InfoContainer>
    </Container>
  )
}
