import { getProductBundleOfferById, getProductOfferPriceById, isProductOfferAvailableToday } from '../../utils/helpers/productUtils';

const DiscountTag = ({id} : {id: number}) => {
    return isProductOfferAvailableToday(id) ? (
        <span className='mr-5 mt-5 absolute right-0 border-primary text-white bg-primary rounded-full px-4 py-2 inline-flex items-center gap-1'>
            <img src="/assets/icon/discount-tag.svg" alt="Discount tag icon" aria-hidden="true" className="w-4 h-4 brightness-0 invert" />
            Bundle Offer: {getProductBundleOfferById(id)} for € {getProductOfferPriceById(id)}
        </span>
    ) : null;
}

export default DiscountTag;