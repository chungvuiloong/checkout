import React from 'react';
import H from '../common/H';
import ProductCard from '../common/ProductCard';
import type { ProductsArrayProps } from '../../utils/types/product';
import { getAllProductTypes } from '../../utils/helpers/productUtils';

const Content = ({products}: ProductsArrayProps) => {
    const [selectedType, setSelectedType] = React.useState<string | null>("all");

    return (
        <section className='sm:col-span-6 lg:col-span-8'>
            <div className='flex flex-col lg:flex-row justify-between'>
                <H level={1} className='text-3xl font-semibold mb-8'>Products</H>
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
                    .map((product) => (
                        <ProductCard  product={product} />
                ))}
            </div>
        </section>
    );
};

export default React.memo(Content);