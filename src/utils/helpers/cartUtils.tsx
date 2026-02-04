import type { CartItem } from '../types/cart';
import type { Product } from '../types/product';

export function inStorage(storage: CartItem[], itemId: number): boolean {
    return storage.some((item) => item.id === itemId);
}

export function updateItemQuantity(storage: CartItem[], itemId: number, change: 'increase' | 'decrease', quantity: number): CartItem[] {
    switch (change) {
        case 'increase':
            return storage.map((item) => item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item)
        case 'decrease':
            return storage
                .map((item) => item.id === itemId ? { ...item,
                    quantity: item.quantity - quantity
                } : item)
                .filter((item) => item.quantity > 0)
    }
}

export function updateItemStorageQuantity(
    storage: Product[],
    itemId: number,
    change: 'increase' | 'decrease',
    quantity: number
): number | undefined {
    const itemIndex = storage.findIndex((item) => item.id === itemId);
    if (itemIndex !== -1) {
        switch (change) {
            case 'increase':
                return (storage[itemIndex].quantityInStock += quantity);
            case 'decrease':
                return (storage[itemIndex].quantityInStock -= quantity);
        }
    }
    return undefined;
}