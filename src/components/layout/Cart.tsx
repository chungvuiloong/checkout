import React from 'react';
import H from '../common/H';
import cartPlaceholder from '../../../public/assets/images/illustration-empty-cart.svg';
import { useCartLogic } from '../../hook/useCart';


const Cart = () => {
    const { cart, cartTotal } = useCartLogic();

    return (
        <aside className='col-span-3 max-w-md overflow-hidden shadow-lg p-4'>
            <H level={2} className="text-2xl font-semibold mb-4 text-primary">
            Cart,
            </H>
            {cart.length === 0 ? (
                <>
                    <img src={cartPlaceholder} alt="Empty cart illustration" className="w-full h-auto mb-4" />
                    <p className='text-gray-600'>Your cart is currently empty.</p>
                </>
            ) : (
                <div>
                    {cart.map((item) => (
                        <div key={item.id} className="mb-4">
                            {/* <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-gray-600">€{item.price.toFixed(2)}</p> */}
                        </div>
                    ))}
                </div>
            )}
            Total: € {cartTotal.toFixed(2)}
        </aside>
    );
};

export default React.memo(Cart);