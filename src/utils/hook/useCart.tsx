import { useCallback, useMemo, useState } from 'react';
import type { CartItem } from '../types/cart';
import { inStorage, updateItemQuantity} from '../helpers/cartUtils';

export function useCartLogic() {
  const [cart, setCart] = useState<CartItem[]>([
    // { id: 1, quantity: 2 },
    // { id: 2, quantity: 4 },
  ]);

  const addItems = useCallback((itemId: number, quantity: number) => {
    setCart((prevCart) => {
      const existingItemInCart = inStorage(prevCart, itemId);
      if (existingItemInCart) {
        return updateItemQuantity(prevCart, itemId, 'increase', quantity);
      } else {
        return [...prevCart, { id: itemId, quantity }];
      }
    });
  }, []);

  const removeItems = useCallback((itemId: number, quantity: number) => {
    setCart((prevCart) => {
      const existingItemInCart = inStorage(prevCart, itemId);
        if (existingItemInCart) {
        return updateItemQuantity(prevCart, itemId, 'decrease', quantity);
      } else {
        return prevCart;
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

  return { cart, addItems, removeItems, clearItem, countItemsTotal, cartTotal };
}