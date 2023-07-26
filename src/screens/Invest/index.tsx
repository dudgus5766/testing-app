import {FlatList, ListRenderItemInfo} from 'react-native';
import {Product} from '../../types';
import {useGetAllProducts} from '../../api/product';
import ProductCard from '../../components/invest/productCard';
import Loading from '../../components/loading';
import Spacing from '../../components/spacing';
import {Container, FlexCenter, Text} from '../../components/styles';

export default function InvestScreen() {
  const {data, isLoading, refetch, isError, isSuccess} = useGetAllProducts();

  const renderItemSeparator = () => <Spacing height={16} />;

  const getKeyExtractor = (item: Product) => item.id.toString();

  const renderItem = ({item: product}: ListRenderItemInfo<Product>) => {
    return <ProductCard {...product} />;
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
