import type { ProductCardProps } from '../../utils/types/product';
import { useCart } from '../../context/CartContext';
import Button from './Button';
import DiscountTag from './DiscountTag';
import H from './H';
import { getFinalProductPriceById, getProductImageById, getProductNameById } from '../../utils/helpers/productUtils';

const ProductCard = ({ inCart = false, product }: ProductCardProps) => {
   const { clearItem, addItems, removeItems } = useCart();

  if (inCart) {
    return (
        <div key={product.id} className="flex gap-4 rounded-lg">
            <div className="w-20 h-20 rounded-md overflow-hidden shrink-0">
                <img src={getProductImageById(product.id)} alt={getProductNameById(product.id)} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col gap-2">
                <H level={3} className="text-lg font-medium capitalize">{getProductNameById(product.id)}</H>
                <div className="flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                        <Button
                            inCart
                            text="decrease"
                            variant="secondary"
                            onClick={() => removeItems(product.id, 1)}
                        />
                        <span className="text-primary font-bold min-w-6 text-center">{product.quantity}</span>
                        <Button
                            inCart
                            text="increase"
                            variant="secondary"
                            onClick={() => addItems(product.id, 1)}
                        />
                    </div>
                    <div className="flex gap-4 items-center">
                        <span className="font-semibold text-primary">€{(getFinalProductPriceById(product.id, product.quantity || 0) ?? 0).toFixed(2)}</span>
                        <Button
                            inCart
                            text="remove"
                            variant="secondary"
                            onClick={() => clearItem(product.id)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
  }

  return (
    <div key={product.id}>
      <div className="relative w-75">
        <DiscountTag id={product.id} />
        <div className="bg-white h-80 rounded-2xl overflow-hidden">
          <img
            src={product.imageUrl}
            className="w-full h-full object-cover"
            alt={product.name}
          />
        </div>
        <Button
          variant="secondary"
          belowImage
          text="Add to Cart"
          onClick={() => addItems(product.id, 1)}
          disabled={product.quantityInStock === 0}
        />
      </div>

      <div className="mt-8 flex flex-col gap-y-1">
        <H level={3} className="capitalize text-lg text-zinc-400">
          {product.type}
        </H>
        <H level={2} className="capitalize text-2xl font-medium">
          {product.name}
        </H>
        <div className="text-2xl text-primary font-medium">
          € {(product.price ?? 0).toFixed(2)}
        </div>
      </div>

      <div>
        <p className="text-gray-600">In Stock: {product.quantityInStock}</p>
      </div>
    </div>
  );
};

export default ProductCard;