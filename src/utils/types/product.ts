export interface Product {
  quantity?: number;
  id: number;
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
    product: Product;
    inCart?: boolean;
};

export type ProductsArrayProps = {
    products: Product[];
};