import * as React from 'react';
import { TouchableOpacityProps } from 'react-native';
import {
  Container,
  TitleContainer,
  Title,
  SeeMoreContainer,
  SeeMore,
  Arrow,
} from './styles';

type LuxuryCars = TouchableOpacityProps & {
  title?: string;
  disabledRedirect?: boolean;
};

export function SectionTitle({ title, disabledRedirect, ...rest }: LuxuryCars) {
  return (
    <Container>
      <TitleContainer>
        <Title>{title || 'Carros de luxo'}</Title>

        {!disabledRedirect && (
          <SeeMoreContainer activeOpacity={0.8} {...rest}>
            <SeeMore>Ver mais</SeeMore>
            <Arrow name="arrow-right-circle" />
          </SeeMoreContainer>
        )}
      </TitleContainer>
    </Container>
  );
}
