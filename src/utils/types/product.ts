import type { CartItem } from "./cart";

export interface Product  {
  id: number;
  quantity?: number;
  name: string;
  type: string;
  price: number;
  quantityInStock: number;
  imageUrl: string;
  offer?: {
    weekly?: {
      bundle?: {
        quantity: number;
        price: number;
        days: number[];
      };
    };
  };
}

export type ProductCardProps = {
    product: Product | CartItem;
    inCart?: boolean;
};

export type ProductsArrayProps = {
    products: Product[];
};