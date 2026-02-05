import React from 'react';
import H from '../common/H';
import cartPlaceholder from '../../../public/assets/images/illustration-empty-cart.svg';
import { useCart } from '../../context/CartContext';
import Button from '../common/Button';
import { getFinalProductPriceById } from '../../utils/helpers/productUtils';


const Cart = () => {
    const { cart, clearItem, addItems, removeItems, countItemsTotal, cartTotal } = useCart();

    return (
        <aside className='col-span-3 max-w-md overflow-hidden shadow-lg p-4'>
            <H level={2} className="text-2xl font-semibold mb-4 text-primary">
            Cart {countItemsTotal}
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
                            <p>Id: {item.id}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: €{getFinalProductPriceById(item.id, item.quantity)?.toFixed(2)}</p>
                            {/* <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-gray-600">€{item.price.toFixed(2)}</p> */}
                            <Button 
                                text="Add One"
                                variant="secondary"
                                onClick={() => addItems(item.id, 1)}
                            />
                            <Button
                                text="Remove One"
                                variant="secondary"
                                onClick={() => removeItems(item.id, 1)}
                            />
                            <Button
                                text="Remove"
                                variant="secondary"
                                onClick={() => clearItem(item.id)}
                            />  
                        </div>
                    ))}
                </div>
            )}
            Total: € {cartTotal.toFixed(2)}
        </aside>
    );
};

export default React.memo(Cart);