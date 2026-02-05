import React from 'react';
import H from '../common/H';
import type { Product } from '../../utils/types/product';
import { useCart } from '../../context/CartContext';
import Button from '../common/Button';
import DiscountTag from '../common/DiscountTag';

type ProductsProps = {
    products: Product[];
};

const Content = ({products}: ProductsProps) => {
    const { addItems } = useCart();
    return (
        <section className='sm:col-span-6 lg:col-span-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12'>
            {products.map((product, index) => (
                <div key={index}>
                    <div className='relative w-75'>
                        <DiscountTag id={product.id} />
                        <div className='bg-white h-80 rounded-2xl overflow-hidden'>
                            <img src={product.imageUrl} className="w-full h-full object-cover" />
                        </div>
                        <Button variant='secondary' belowImage text="Add to Cart" onClick={() => addItems(product.id, 1)} disabled={product.quantityInStock === 0} />
                    </div>
                    <div className='mt-8 flex flex-col gap-y-1'>
                        <H level={3} className='capitalize text-lg text-zinc-400'>{product.type}</H>
                        <H level={2} key={index} className='capitalize text-2xl font-medium'>{product.name}</H>
                        <div className='text-2xl text-primary font-medium'>€ {product.price?.toFixed(2)}</div>
                    </div>
                    <div>
                        <p className='text-gray-600'>In Stock: {product.quantityInStock}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default React.memo(Content);