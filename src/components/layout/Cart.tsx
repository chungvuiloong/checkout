import React from 'react';
import H from '../common/H';
import cartPlaceholder from '../../../public/assets/images/illustration-empty-cart.svg';
import { useCart } from '../../context/CartContext';
import Button from '../common/Button';
import { getFinalProductPriceById, getProductImageById, getProductNameById } from '../../utils/helpers/productUtils';


const Cart = () => {
    const { cart, clearItem, addItems, removeItems, countItemsTotal, cartTotal } = useCart();
    

    return (
        <aside className='sm:col-span-6 lg:col-span-3 h-fit overflow-hidden rounded-2xl shadow-lg p-6'>
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
                            <div key={item.id} className="flex gap-4 rounded-lg">
                                <div className="w-20 h-20 rounded-md overflow-hidden shrink-0">
                                    <img src={getProductImageById(item.id)} alt={getProductNameById(item.id)} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 flex flex-col gap-2">
                                    <H level={3} className="text-lg font-medium capitalize">{getProductNameById(item.id)}</H>
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <Button
                                                inCart
                                                text="decrease"
                                                variant="secondary"
                                                onClick={() => removeItems(item.id, 1)}
                                            />
                                            <span className="text-primary font-bold min-w-6 text-center">{item.quantity}</span>
                                            <Button
                                                inCart
                                                text="increase"
                                                variant="secondary"
                                                onClick={() => addItems(item.id, 1)}
                                            />
                                        </div>
                                        <div className="flex gap-4 items-center">
                                            <span className="font-semibold text-primary">€{getFinalProductPriceById(item.id, item.quantity)?.toFixed(2)}</span>
                                            <Button
                                                inCart
                                                text="remove"
                                                variant="secondary"
                                                onClick={() => clearItem(item.id)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
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