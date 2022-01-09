import * as React from 'react';
import { ActivityIndicator, Animated, View } from 'react-native';
import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore'
import { Card } from '@components/Card';
import { useNavigation } from '@react-navigation/native';
import { Container, LuxuryCars } from './styles'

import { Carousel } from '@components/Carousel';
import { Profile } from '@components/Profile';
import { Dots } from '@components/Dots';
import { Propagand } from '@components/Propagand';
import { SectionTitle } from '@components/SectionTitle';
import { StatusBar } from 'expo-status-bar';
import theme from '../../theme';
import { ProfileScreenNavigationProp } from '../../@types/routes';
import { Loading } from '@components/Loading';

export function Home() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation<ProfileScreenNavigationProp>()

  useEffect(() => {
    firestore()
    .collection('products')
    .where('category', '==', 'luxury')
    .get()
    .then(products => {
      products.docs.map(product => {
        const response = product.data() as Product;

        setProducts(prevState => [...prevState, { ...response, id: product.id }])
      })
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      setLoading(false)
    })

    return () => {
      setProducts([]);
    }
  }, [])

  function navigateToCarList() {
    navigation.navigate('ListCars')
  }

  function handleNavigateToBuy(id: string) {
    navigation.navigate('Buy', { id })
  }

  return (
    <Container>
      <StatusBar translucent style='dark' backgroundColor='transparent' />
      <Profile />

      <View style={{ position: 'relative', left: -33 }}>
        <Carousel scrollX={scrollX} />
      </View>

      <Dots scrollX={scrollX}/>

      <Propagand />

      <SectionTitle onPress={navigateToCarList} />

      {loading ? <Loading /> : (
        <LuxuryCars>
          <Card 
            title={products[0].name}
            year={products[0].year} 
            price={`R$${products[0].value}`} 
            image={products[0].image_url}
            onPress={() => handleNavigateToBuy(products[0].id)}
            color={theme.COLORS.BLUE_CARD}  
            primaryColor={theme.COLORS.WHITE}
            secondaryColor={theme.COLORS.WHITE_DESCRIPTION}
          />

          <Card 
            title={products[1].name}
            year={products[1].year} 
            price={`R$${products[1].value}`} 
            image={products[1].image_url}
            onPress={() => handleNavigateToBuy(products[1].id)}
          />
        </LuxuryCars>
      )}
      
    </Container>
  )
}
