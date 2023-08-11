import {createWithEqualityFn} from 'zustand/traditional';
import {shallow} from 'zustand/shallow';
import {Product} from '../types';

export type ProductInBasket = {
  product: Product;
  quantity: number;
};

export const updateProductQuantity = (
  productsInBasket: Array<ProductInBasket>,
  productId: number,
  updateType: 'increase' | 'decrease',
) => {
  return productsInBasket.map(productInBasket => {
    if (productInBasket.product.id === productId) {
      return {
        ...productInBasket,
        quantity:
          updateType === 'increase'
            ? productInBasket.quantity + 1
            : productInBasket.quantity - 1,
      };
    }
    return productInBasket;
  });
};

export const increaseProductQuantityInBasket = (
  productsInBasket: Array<ProductInBasket>,
  productId: number,
) => {
  return updateProductQuantity(productsInBasket, productId, 'increase');
};

export const decreaseProductQuantityInBasket = (
  productsInBasket: Array<ProductInBasket>,
  productId: number,
) => {
  return updateProductQuantity(productsInBasket, productId, 'decrease');
};

export type ProductStore = {
  productsInBasket: Array<ProductInBasket>;
  actions: {
    addProductToBasket: (val: Product) => void;
    removeProductFromBasket: (productId: number) => void;
    increaseProductQuantityInBasket: (productId: number) => void;
    decreaseProductQuantityInBasket: (productId: number) => void;
  };
};

export const useProductStore = createWithEqualityFn<ProductStore>(
  (set, get) => ({
    productsInBasket: [],
    actions: {
      addProductToBasket: product =>
        set({
          productsInBasket: [
            ...get().productsInBasket,
            {product: product, quantity: 1},
          ],
        }),
      removeProductFromBasket: productId =>
        set({
          productsInBasket: [
            ...get().productsInBasket.filter(
              productInBasket => productInBasket.product.id !== productId,
            ),
          ],
        }),
      increaseProductQuantityInBasket: productId => {
        set({
          productsInBasket: increaseProductQuantityInBasket(
            get().productsInBasket,
            productId,
          ),
        });
      },
      decreaseProductQuantityInBasket: productId => {
        set({
          productsInBasket: decreaseProductQuantityInBasket(
            get().productsInBasket,
            productId,
          ),
        });
      },
    },
  }),
  shallow,
);

export const useProductActions = () => useProductStore(state => state.actions);

export const useProductsInBasket = () =>
  useProductStore(state => state.productsInBasket, shallow);
export const useProductsInBasketCount = () =>
  useProductStore(state => state.productsInBasket.length);
