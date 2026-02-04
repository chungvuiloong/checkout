import { useCallback, useMemo, useState } from 'react';
import type { CartItem } from '../types/cart';

export function useCartLogic() {
  const [cart, setCart] = useState<CartItem[]>([
    // { id: 1, quantity: 2 },
    // { id: 2, quantity: 4 },
  ]);

  const addItems = useCallback((itemId: number, quantity: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === itemId);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevCart, { id: itemId, quantity }];
      }
    });
  }, []);

  const clearItem = useCallback((itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  }, []);

  const countItemsTotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const cartTotal = 0

  return { cart, addItems, clearItem, countItemsTotal, cartTotal };
}