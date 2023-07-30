import * as React from 'react';
import styled from 'styled-components';
import {Pressable} from 'react-native';
import {Product} from '../../types';
import FastImage from 'react-native-fast-image';
import Spacing from '../spacing';
import {Title, Text} from '../styles';

type productCardProps = {
  item: Product;
  onPress: () => void;
  onAddToBasketPress: () => void;
  testID: string;
  isInBasket: boolean;
};

export default function ProductCard({
  item,
  onPress,
  onAddToBasketPress,
  testID,
  isInBasket = false,
}: productCardProps) {
  const {title, price, rating, image} = item;
  return (
    <ProductContainer onPress={onPress} testID={testID}>
      <ProductImage source={{uri: image}} />
      <Spacing height={12} />
      <Title numberOfLines={1}>{title}</Title>
      <Text>{price}</Text>
      <Text>
        {rating.rate} ({rating.count})
      </Text>
      <Pressable onPress={onAddToBasketPress}>
        {!isInBasket ? <Text>{'추가하기'}</Text> : <Text>{'추가됨'}</Text>}
      </Pressable>
    </ProductContainer>
  );
}

const ProductContainer = styled(Pressable)`
  width: 175px;
  height: 250px;
  justify-content: space-between;
  background-color: ${props => props.theme.color?.productBackground};
  border-radius: 8px;
  padding: 16px;
`;

const ProductImage = styled(FastImage)`
  width: 100px;
  height: 100px;
  margin-top: 4px;
`;
