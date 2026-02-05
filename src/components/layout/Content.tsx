import React from 'react';
import H from '../common/H';
import type { Product } from '../../utils/types/product';
import { useCart } from '../../context/CartContext';
import Button from '../common/Button';
import DiscountTag from '../common/DiscountTag';
import { getAllProductTypes } from '../../utils/helpers/productUtils';

type ProductsProps = {
    products: Product[];
};

const Content = ({products}: ProductsProps) => {
    const { addItems } = useCart();
    const [selectedType, setSelectedType] = React.useState<string | null>("all");

    return (
        <section className='sm:col-span-6 lg:col-span-8'>
            <div className='flex flex-col lg:flex-row justify-between'>
                <H level={1} className='text-3xl font-semibold mb-8'>Products</H>
                {/* <div>{getAllProductTypes().join(', ')}</div> */}
                <div className='flex flex-wrap gap-2'>
                    {getAllProductTypes().map((type, index) => (
                        <span
                            key={index}
                            className={`border-2 ${selectedType === type ? 'bg-primary text-white border-primary' : 'bg-white border-primary text-primary hover:text-white hover:bg-primary/50'} h-fit px-4 py-2 rounded-full text-sm transition-colors capitalize cursor-pointer `}
                            onClick={() => setSelectedType(type)}
                        >
                            {type}
                        </span>
                    ))}
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12'>
                {products
                    .filter(product => selectedType === "all" ? true : product.type === selectedType)
                    .map((product, index) => (
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
            </div>
        </section>
    );
};

export default React.memo(Content);