import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather'

import { Home } from '@screens/Home';
import theme from '../theme';
import { TabParamList } from '../@types/routes';
import { BuyedCars } from '@screens/BuyedCars';

const Tab = createBottomTabNavigator<TabParamList>();

export function TabRoute() {
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 80,
          backgroundColor: theme.COLORS.WHITE,
          borderTopWidth: 0
        },
        tabBarItemStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarShowLabel: false,
        tabBarInactiveTintColor: theme.COLORS.DESCRIPTION,
        tabBarActiveTintColor: theme.COLORS.BLUE,
      }}
    >
      <Tab.Screen 
        name='Home' 
        component={Home} 
        options={{
          tabBarIcon: ({ size, color, focused }) => (
              <Icon name='home' size={size} color={color} />
          )
        }}
      />

      {/* <Tab.Screen 
        name='Favorites' 
        component={Home} 
        options={{
          tabBarIcon: ({ size, color, focused }) => (
              <Icon name='heart' size={size} color={color} />
          )
        }}
      /> */}

      <Tab.Screen 
        name='Buyed' 
        component={BuyedCars} 
        options={{
          tabBarIcon: ({ size, color, focused }) => (
              <Icon name='shopping-cart' size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}