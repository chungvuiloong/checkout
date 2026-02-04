export interface Product {
  id: number;
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