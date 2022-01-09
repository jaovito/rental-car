import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import firestore from '@react-native-firebase/firestore'
import { useNavigation } from '@react-navigation/native';

import { Container, Main } from './styles'

import { Profile } from '@components/Profile';
import { ProfileScreenNavigationProp } from '../../@types/routes';
import { SectionTitle } from '@components/SectionTitle';
import { Loading } from '@components/Loading';
import { FlatList, Text } from 'react-native';
import { Card } from '@components/Card';
import theme from '../../theme';


export function BuyedCars() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation<ProfileScreenNavigationProp>()

  useEffect(() => {
    async function handleLoadData() {
      try {
        const rentals = await firestore()
        .collection('rentals')
        .where('user', '==', 'P0dtcnsyiuYMepq6NTg7R7wZFuu2')
        .get()

        const data = rentals.docs.map(async rent => {
          const response = rent.data() as Rent;

          const product = await response.product.get();

          return { ...product.data(), id: rent.id }
        })

        const allData = await Promise.all(data);

        setProducts(allData)
      } catch(err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    handleLoadData()
  }, [])

  function handleNavigateToInfo(product: Product) {
    navigation.navigate('Info', product)
  }

  function handleLoadInfo() {
    if (products.length === 0) {
      return <Text>Sem nada para mostrar</Text>
    } else {
      return <FlatList 
        data={products}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{justifyContent: 'space-between'}} // não esquece disso
        renderItem={({item}) => (
          <Card 
            title={item.name}
            year={item.year} 
            price={`R$${item.value}`} 
            image={item.image_url}
            primaryColor={theme.COLORS.WHITE}
            secondaryColor={theme.COLORS.WHITE_DESCRIPTION}
            color={theme.COLORS.PURPLE}
            onPress={() => handleNavigateToInfo(item)}
          />
        )}
        numColumns={2}
      />
    }
  }

  return (
    <Container>
      <StatusBar translucent style='dark' backgroundColor='transparent' />
      <Profile />

      <SectionTitle title='Carros alugados' disabledRedirect />

      <Main>
        {loading ? <Loading /> : handleLoadInfo()}
      </Main>
    </Container>
  )
}
