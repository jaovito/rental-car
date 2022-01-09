import * as React from 'react';

import { useAuth } from '@contexts/authContext';
import { 
  Container,
  AvatarContainer,
  AvatarImg,
  TextContainer,
  Welcome,
  ProfileName, 
  Icon
} from './styles'
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

type Props = {
  hasReturn?: boolean;
  dontExit?: boolean;
}

export function Profile({ dontExit, hasReturn = false }: Props) {
  const { user, signOut } = useAuth();
  const navigation = useNavigation();

  const avatarUrl = user?.photoURL || '';

  return (
    <Container>
      {hasReturn && (
        <BorderlessButton onPress={navigation.goBack}>
          <Icon name="arrow-left" />
        </BorderlessButton>
      )}

      <AvatarContainer>
          <AvatarImg source={{ uri: avatarUrl}} />
      </AvatarContainer>
      
      <TextContainer>
        <Welcome>Bem-vindo</Welcome>
        <ProfileName>{user?.displayName}</ProfileName>
      </TextContainer>

      {
      !dontExit && 
        <BorderlessButton onPress={signOut}>
          <Icon name="log-out"/>
        </BorderlessButton>
      }
    </Container>
  )
}
