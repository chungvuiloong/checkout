import type { CartItem } from '../types/cart';

export function inStorage(storage: CartItem[], itemId: number): boolean {
    return storage.some((item) => item.id === itemId);
}

export function updateItemQuantity(storage: CartItem[], itemId: number, change: 'increase' | 'decrease', quantity: number): CartItem[] {
    switch (change) {
        case 'increase':
            return storage.map((item) => item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item)
        case 'decrease':
            return storage.map((item) => item.id === itemId ? { ...item, quantity: item.quantity - quantity } : item)
    }
}