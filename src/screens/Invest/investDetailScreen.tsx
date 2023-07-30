import React from 'react';
import {useGetProductById} from '../../api/product';
import {Container, FlexCenter, Text, Title} from '../../components/styles';
import {InvestTabScreenProps} from '../../../types';
import {InvestTabRouteNames} from '../../navigation/routeNames';
import Loading from '../../components/loading';
import {ScrollView, View} from 'react-native';
import styled from 'styled-components';
import Spacing from '../../components/spacing';
import FastImage from 'react-native-fast-image';

export default function InvestDetailScreen({
  route,
}: InvestTabScreenProps<InvestTabRouteNames.ProductDetail>) {
  const {data, isLoading, refetch, isSuccess, isError} = useGetProductById(
    route.params?.id,
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      {isError && (
        <FlexCenter>
          <Text>Error!</Text>
        </FlexCenter>
      )}
      {isSuccess && (
        <InvestDetailScrollView showsVerticalScrollIndicator={false}>
          <Spacing height={8} />
          <ProductImage source={{uri: data?.image}} resizeMode="contain" />

          <Spacing height={8} />

          <View>
            <Title>{data?.title}</Title>

            <Spacing height={8} />

            {/*<View style={styles.quantityTogglerContainer}>*/}
            {/*  <Text testID="product-detail-price" style={styles.infoText}>*/}
            {/*    {getPriceText(data!.price)}*/}
            {/*  </Text>*/}
            {/*  <QuantityToggler*/}
            {/*    style={styles.quantityToggler}*/}
            {/*    uniqueID={data?.id.toString()}*/}
            {/*    quantity={productQuantity ?? 0}*/}
            {/*    onIncreaseQuantityPress={() => {*/}
            {/*      if (data?.id) {*/}
            {/*        // item has not been added to basket yet*/}
            {/*        if (typeof productQuantity === 'undefined') {*/}
            {/*          addProductToBasket(data);*/}
            {/*        } else {*/}
            {/*          increaseProductQuantityInBasket(data.id);*/}
            {/*        }*/}
            {/*      }*/}
            {/*    }}*/}
            {/*    onDecreaseQuantityPress={() => {*/}
            {/*      if (data?.id) {*/}
            {/*        // item has quantity of 1, means its time to remove the item from the basket*/}
            {/*        if (productQuantity === 1) {*/}
            {/*          removeProductFromBasket(data.id);*/}
            {/*        } else {*/}
            {/*          decreaseProductQuantityInBasket(data.id);*/}
            {/*        }*/}
            {/*      }*/}
            {/*    }}*/}
            {/*  />*/}
            {/*</View>*/}

            <Spacing height={8} />

            <Text>{data?.description}</Text>
          </View>
        </InvestDetailScrollView>
      )}
    </Container>
  );
}

const InvestDetailScrollView = styled(ScrollView).attrs(props => ({
  contentContainerStyle: {
    flexGrow: 1,
    paddingVertical: 8,
    backgroundColor: props.theme.color.productBackground,
  },
}))`
  flex: 1;
`;

const ProductImage = styled(FastImage)`
  justify-content: flex-end;
  width: 200px;
  height: 200px;
`;
