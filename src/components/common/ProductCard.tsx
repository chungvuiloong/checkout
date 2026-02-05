import type { ProductCardProps } from '../../utils/types/product';
import { useCart } from '../../context/CartContext';
import Button from './Button';
import DiscountTag from './DiscountTag';
import H from './H';

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItems } = useCart();

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
          € {product.price?.toFixed(2)}
        </div>
      </div>

      <div>
        <p className="text-gray-600">In Stock: {product.quantityInStock}</p>
      </div>
    </div>
  );
};

export default ProductCard;