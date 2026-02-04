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

export function getProductPriceById(productId: number): number | undefined {
    const productDetails = getProductById(productId);
    return productDetails?.price;
}

export function getProductOfferPriceById(productId: number): number | undefined {
    const productDetails = getProductById(productId);
    return productDetails?.offer?.weekly?.bundle?.price;
}

export function getProductBundleOfferById(productId: number): number | undefined {
    const productDetails = getProductById(productId);
    return productDetails?.offer?.weekly?.bundle?.quantity;
}

export function getFinalProductPriceById(productId: number, quantity: number): number | undefined {
    const remainder = quantity % 2;
    const numberOfBundle = quantity >= 2 ? Math.floor(quantity / 2) : 0;

    if (!isProductOfferAvailableToday(productId)) {
        return (getProductPriceById(productId) || 0) * quantity;
    }

    return ((getProductOfferPriceById(productId) || 0) * numberOfBundle) + ((getProductPriceById(productId) || 0) * remainder);
}
