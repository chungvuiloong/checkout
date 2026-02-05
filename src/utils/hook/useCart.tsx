import { useCallback, useMemo, useState } from 'react';
import type { CartItem } from '../types/cart';
import { inStorage, updateItemQuantity } from '../helpers/cartUtils';
import { getFinalProductPriceById, getProductById, getProductQuantityInStock, updateItemStorageQuantityById } from '../helpers/productUtils';

export function useCartLogic() {
  const [cart, setCart] = useState<CartItem[]>([
    // { id: 1, quantity: 2 },
    // { id: 2, quantity: 4 },
  ]);

  const addItems = useCallback((itemId: number, quantity: number) => {
    if ((getProductQuantityInStock(itemId) ?? 0) > 0) {
        updateItemStorageQuantityById(itemId, 'decrease', quantity);
        setCart((prevCart) => {
        const existingItemInCart = inStorage(prevCart, itemId);
        if (existingItemInCart) {
            return updateItemQuantity(prevCart, itemId, 'increase', quantity);
        } else {
            return [...prevCart, { id: itemId, quantity }];
        }
        });
        }
  }, []);

  const removeItems = useCallback((itemId: number, quantity: number) => {
     if ((getProductQuantityInStock(itemId) ?? 0) > 0) {
        updateItemStorageQuantityById(itemId, 'increase', quantity);
     }
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

const cartTotal = useMemo(() => {
    let total = 0;
    cart.forEach((cartItem) => {
        const productItem = getProductById(cartItem.id);
        if (productItem) {
            total += (getFinalProductPriceById(cartItem.id, cartItem.quantity) ?? 0);
        }
    });
    return total;
}, [cart]);

  return { cart, addItems, removeItems, clearItem, countItemsTotal, cartTotal };
}