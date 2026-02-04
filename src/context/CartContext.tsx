import React, { createContext, useContext } from 'react';
import { useCartLogic } from '../utils/hook/useCart';
import type { CartItem } from '../utils/types/cart';

interface CartContextType {
    cart: CartItem[];
    addItems: (itemId: number, quantity: number) => void;
    removeItems: (itemId: number, quantity: number) => void;
    clearItem: (itemId: number) => void;
    countItemsTotal: number;
    cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const cartLogic = useCartLogic();

  return (
    <CartContext.Provider value={cartLogic}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
