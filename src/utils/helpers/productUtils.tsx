import type { Product as ProductProp } from '../types/product';
import productData from '../../data/products';

export function getProductById(id: number): ProductProp | undefined {
    return productData.find((product) => product.id === id);
}

export function getProductOfferDaysById(productId: number): number[] | undefined {
    const productDetails = getProductById(productId);
    return productDetails?.offer?.weekly?.bundle?.days;
}

export function isProductOfferAvailableToday(productId: number): boolean {
    const offerDays = getProductOfferDaysById(productId);
    if (!offerDays) return false;

    const today = new Date().getDay();
    return offerDays.includes(today);
}