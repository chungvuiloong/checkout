import React from 'react';
import H from '../common/H';
import type { Product } from '../../utils/types/product';
import { useCart } from '../../context/CartContext';
import Button from '../common/Button';

type ProductsProps = {
    products: Product[];
};

const Content = ({products}: ProductsProps) => {
    const { addItems } = useCart();
    return (
        <section className='col-span-9'>
            {products.map((product, index) => (
                <div key={index} className='flex flex-col gap-y-8 '>
                    <div className='relative w-75'>
                        <div className='bg-white h-80 rounded-2xl overflow-hidden'>
                            <img src={product.imageUrl} className="w-full h-full object-cover" />
                        </div>
                        <Button belowImage text="Add to Cart" onClick={() => addItems(product.id, 1)} />
                    </div>
                    <div className='flex flex-col gap-y-1'>
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