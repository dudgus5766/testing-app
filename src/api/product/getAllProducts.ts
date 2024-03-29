import {AxiosError} from 'axios';
import {useQuery, UseQueryOptions} from '@tanstack/react-query';
import {api} from '../axios.instance';
import {productKeyFactory} from './keyFactory';
import {Product} from '../../types';

export const getAllProducts = async () => {
  return (await api.get<Array<Product>>('/products')).data;
};

export const useGetAllProducts = (
  options?: UseQueryOptions<
    Array<Product>,
    AxiosError,
    Array<Product>,
    readonly [string]
  >,
) => {
  return useQuery({
    queryKey: [...productKeyFactory.products],
    queryFn: getAllProducts,
    ...options,
  });
};
