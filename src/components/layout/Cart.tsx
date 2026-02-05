import React from 'react';
import H from '../common/H';
import cartPlaceholder from '../../../public/assets/images/illustration-empty-cart.svg';
import { useCart } from '../../context/CartContext';
import ProductCard from '../common/ProductCard';


const Cart = () => {
    const { cart, countItemsTotal, cartTotal } = useCart();
    

    return (
        <aside className='sticky top-0 sm:col-span-6 lg:col-span-4 h-fit overflow-hidden rounded-2xl shadow-lg p-6'>
            <H level={2} className="text-2xl font-semibold mb-4 text-primary">
            Cart ( {countItemsTotal} )
            </H>
            <div className='flex flex-col gap-5'>
                {cart.length === 0 ? (
                    <>
                        <img src={cartPlaceholder} alt="Empty cart illustration" className="w-full h-auto mb-4" />
                        <p className='text-gray-600'>Your cart is currently empty.</p>
                    </>
                ) : (
                    <div className="space-y-4">
                        {cart.map((item) => (
                            <ProductCard inCart key={item.id} product={item}  />
                        ))}
                    </div>
                )}
                <div className='border-t-2 pt-4 border-t-primary flex flex-row justify-between items-center'>
                    <span>Total </span>
                    <span className='text-2xl font-semibold text-primary'>€ {cartTotal.toFixed(2)}</span>
                </div>
            </div>
        </aside>
    );
};

export default React.memo(Cart);