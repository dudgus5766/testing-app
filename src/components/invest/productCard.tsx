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
};

export default function ProductCard({item, onPress}: productCardProps) {
  const {title, price, rating, image} = item;
  return (
    <ProductContainer onPress={onPress}>
      <ProductImage source={{uri: image}} />
      <Spacing height={12} />
      <Title numberOfLines={1}>{title}</Title>
      <Text>{price}</Text>
      <Text>
        {rating.rate} ({rating.count})
      </Text>
    </ProductContainer>
  );
}

const ProductContainer = styled(Pressable)`
  width: 175px;
  height: 200px;
  justify-content: space-between;
  background-color: ${props => props.theme.color.productBackground};
  border-radius: 8px;
  padding: 16px;
`;

const ProductImage = styled(FastImage)`
  width: 100px;
  height: 100px;
  margin-top: 4px;
`;
