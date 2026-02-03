import React from 'react';
import H from '../common/H';
import cartPlaceholder from '../../../public/assets/images/illustration-empty-cart.svg';


const Cart = () => {
    return (
        <aside className='max-w-md overflow-hidden shadow-lg p-4'>
            <H level={2} className="text-2xl font-semibold mb-4 text-primary">
            Cart
            </H>
            <img src={cartPlaceholder} alt="Empty cart illustration" className="w-full h-auto mb-4" />
            <p className='text-gray-600'>Your cart is currently empty.</p>
        </aside>
    );
};

export default React.memo(Cart);