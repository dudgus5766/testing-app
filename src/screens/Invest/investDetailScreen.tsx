import React from 'react';
import {useGetProductById} from '../../api/product';
import {Container, FlexCenter, Text, Title} from '../../components/styles';
import {InvestTabScreenProps} from '../../../types';
import {InvestTabRouteNames} from '../../navigation/routeNames';

export default function InvestDetailScreen({
  route,
}: InvestTabScreenProps<InvestTabRouteNames.ProductDetail>) {
  const {data, isLoading, refetch, isSuccess, isError} = useGetProductById(
    route.params?.id,
  );

  return (
    <Container>
      {isError && (
        <FlexCenter>
          <Text>An error occurred</Text>
        </FlexCenter>
      )}
      {isSuccess && <Title>{data.title}</Title>}
    </Container>
  );
}
