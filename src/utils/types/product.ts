export interface Product {
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
};

export type ProductsArrayProps = {
    products: Product[];
};