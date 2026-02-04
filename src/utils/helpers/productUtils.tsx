import type { Product as ProductProp } from '../types/product';
import productData from '../../data/products';

export function getProductById(id: number): ProductProp | undefined {
    return productData.find((product) => product.id === id);
}

export function getProductOfferDaysById(productId: number): number[] | undefined {
    const productDetails = getProductById(productId);
    return productDetails?.offer?.weekly?.bundle?.days;
}