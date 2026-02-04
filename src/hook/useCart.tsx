import { use, useCallback, useEffect, useMemo, useState } from 'react';
import type { CartItem } from '../types/cart';

export function useCartLogic() {
  const [cart, setCart] = useState<CartItem[]>([
    { id: 1, quantity: 2 },
    // { id: 2, quantity: 4 },
  ]);

  useEffect(() => {
    console.log('Cart updated:', cart);
  }, [cart]);

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

  const cartTotal = 0

  return { cart, addItems, cartTotal };
}