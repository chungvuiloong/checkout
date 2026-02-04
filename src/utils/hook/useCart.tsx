import { useCallback, useMemo, useState } from 'react';
import type { CartItem } from '../types/cart';
import { inStorage } from '../helpers/cartUtils';

export function useCartLogic() {
  const [cart, setCart] = useState<CartItem[]>([
    // { id: 1, quantity: 2 },
    // { id: 2, quantity: 4 },
  ]);

  const addItems = useCallback((itemId: number, quantity: number) => {
    setCart((prevCart) => {
      const existingItemInCart = inStorage(prevCart, itemId);
      if (existingItemInCart) {
        return prevCart.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevCart, { id: itemId, quantity }];
      }
    });
  }, []);

  const removeItems = useCallback((itemId: number, quantity: number) => {
    setCart((prevCart) => {
      const existingItemInCart = prevCart.find((item) => item.id === itemId);
      if (existingItemInCart) {
        if (existingItemInCart.quantity <= quantity) {
            
          return prevCart.filter((item) => item.id !== itemId);
        } else {
          return prevCart.map((item) =>
            item.id === itemId ? { ...item, quantity: item.quantity - quantity } : item
          );    
        }
      }
      return prevCart;
    });
  }, []);  

  const clearItem = useCallback((itemId: number) => {

    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  }, []);

  const countItemsTotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const cartTotal = 0

  return { cart, addItems, removeItems, clearItem, countItemsTotal, cartTotal };
}