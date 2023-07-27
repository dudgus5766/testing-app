import {useCallback} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {Product} from '../../types';
import {useGetAllProducts} from '../../api/product';
import ProductCard from '../../components/invest/productCard';
import Loading from '../../components/loading';
import Spacing from '../../components/spacing';
import {Container, FlexCenter, Text} from '../../components/styles';
import {InvestTabRouteNames} from '../../navigation/routeNames';
import {InvestTabScreenProps} from '../../../types';

export default function InvestScreen({
  navigation,
}: InvestTabScreenProps<InvestTabRouteNames.Home>) {
  const {data, isLoading, refetch, isError, isSuccess} = useGetAllProducts();
  const onPressProductCard = (productId: number) => {
    console.log('왜??????>>>');
    navigation?.navigate(InvestTabRouteNames.ProductDetail, {
      id: productId,
    });
  };

  const renderItemSeparator = () => <Spacing height={16} />;

  const getKeyExtractor = (item: Product) => item.id.toString();

  const renderItem = ({item: product}: ListRenderItemInfo<Product>) => {
    // return <ProductCard item={product} onPress={onPressProductCard} />;
    return (
      <ProductCard
        item={product}
        onPress={() => onPressProductCard(product.id)}
      />
    );
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
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
    </Container>
  );
}
