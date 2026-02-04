import type { CartItem } from '../types/cart';

export function inStorage(storage: CartItem[], itemId: number): boolean {
    return storage.some((item) => item.id === itemId);
}