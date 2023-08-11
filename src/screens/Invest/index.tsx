import React, {useCallback} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {Product} from '../../types';
import {useGetAllProducts} from '../../api/product';
import {useProductActions, useProductsInBasket} from '../../store/product';
import ProductCard from '../../components/invest/productCard';
import Loading from '../../components/common/loading';
import Spacing from '../../components/common/spacing';
import {FlexCenter, Text} from '../../components/styles';
import {RouteNames, UpperStackNames} from '../../navigation/routeNames';
import SafeAreaWrapper from '../../components/common/safeAreaWrapper';
import {RootTabScreenProps} from '../../../types';

export default function InvestScreen({
  navigation,
}: RootTabScreenProps<RouteNames.InvestTab>) {
  const {data, isLoading, isError, isSuccess} = useGetAllProducts();
  const productsInBasket = useProductsInBasket();
  const {addProductToBasket, removeProductFromBasket} = useProductActions();
  // const productsInBasketCount = useProductsInBasketCount();
  const onPressProductCard = (productId: number) => {
    navigation?.navigate('UpperStack', {
      screen: UpperStackNames.ProductDetail,
      params: {id: productId},
    });
  };

  const onAddToBasketPress = useCallback(
    (product: Product) => () => {
      if (
        productsInBasket.find(
          productInBasket => productInBasket.product.id === product.id,
        )
      ) {
        removeProductFromBasket(product.id);
      } else {
        addProductToBasket(product);
      }
    },
    [addProductToBasket, productsInBasket, removeProductFromBasket],
  );

  const renderItemSeparator = () => <Spacing height={16} />;

  const getKeyExtractor = (item: Product) => item.id.toString();

  const renderItem = ({item: product}: ListRenderItemInfo<Product>) => {
    return (
      <ProductCard
        item={product}
        onPress={() => onPressProductCard(product.id)}
        onAddToBasketPress={onAddToBasketPress(product)}
        testID={`product-list-card-${product.id}`}
        isInBasket={
          typeof productsInBasket.find(
            productInBasket => productInBasket.product.id === product.id,
          ) !== 'undefined'
        }
      />
    );
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SafeAreaWrapper>
      {isError && (
        <FlexCenter>
          <Text>An error occurred</Text>
        </FlexCenter>
      )}

      {isSuccess && (
        <FlatList
          data={data}
          renderItem={renderItem}
          numColumns={2}
          ItemSeparatorComponent={renderItemSeparator}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          contentContainerStyle={{flexGrow: 1, padding: 16}}
          showsVerticalScrollIndicator={false}
          keyExtractor={getKeyExtractor}
        />
      )}
    </SafeAreaWrapper>
  );
}
