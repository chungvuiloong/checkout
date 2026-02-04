import React from 'react';
import H from '../common/H';
import type { Product } from '../../types/product';
import { useCart } from '../../context/CartContext';

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
                        <button className='absolute left-1/2 -translate-x-1/2 -bottom-7 px-6 py-3 border-2 w-max border-primary rounded-full
                        text-primary hover:text-white
                        bg-white hover:bg-primary
                        transition-colors group pointer' onClick={() => addItems(product.id, 1)}>
                            <img src="/assets/icon/icon-add-to-cart.svg" alt="cart" className="inline-block w-5 h-5 mr-2 -mt-1 group-hover:brightness-0 group-hover:invert transition-all" />
                            <span>Add to Cart</span>
                        </button>
                    </div>
                    <div className='flex flex-col gap-y-1'>
                        <H level={3} className='capitalize text-lg text-zinc-400'>{product.type}</H>
                        <H level={2} key={index} className='capitalize text-2xl font-medium'>{product.name}</H>
                        <div className='text-2xl text-primary font-medium'>€ {product.price?.toFixed(2)}</div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default React.memo(Content);