export interface Product {
  name: string;
  type: string;
  price: number;
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