import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';

type TabParamList = {
  Home: undefined;
  Favorites: undefined;
  Buyed: undefined;
}

type StackParamList = {
  Buy: { id: string };
  Info: Product;
  HomeTab: undefined;
  ListCars: undefined;
}

type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'Home'>,
  StackNavigationProp<StackParamList>
>;

