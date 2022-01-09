import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import firestore from '@react-native-firebase/firestore'

import { Card } from '@components/Card';
import { Profile } from '@components/Profile';
import { SectionTitle } from '@components/SectionTitle';
import { Container, Main } from './styles'
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { ProfileScreenNavigationProp } from '../../@types/routes';
import { Loading } from '@components/Loading';

export function ListCars() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation<ProfileScreenNavigationProp>()

  useEffect(() => {
    firestore()
    .collection('products')
    .get()
    .then(products => {
      const data = products.docs.map(product => {
        const response = product.data() as Product;

        return { ...response, id: product.id }
      })

      setProducts(data)
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
  
  function handleNavigateToBuy(id: string) {
    navigation.navigate('Buy', { id })
  }
  
  return (
    <Container>
      <StatusBar translucent style='dark' backgroundColor='transparent' />
      <Profile dontExit hasReturn />

      <SectionTitle title='Todos os carros' disabledRedirect />

      <Main>
        {loading ? <Loading /> : (
          <FlatList 
            data={products}
            keyExtractor={(item) => item.id}
            columnWrapperStyle={{justifyContent: 'space-between'}} // não esquece disso
            renderItem={({item}) => (
              <Card 
                title={item.name}
                year={item.year} 
                price={`R$${item.value}`} 
                image={item.image_url}
                onPress={() => handleNavigateToBuy(item.id)}
              />
            )}
            numColumns={2}
          />
        )}
      </Main>

    </Container>
  )
}
