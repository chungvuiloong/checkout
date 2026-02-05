import { getAllProductTypes } from '../../utils/helpers/productUtils';
import type { FilterProps } from '../../utils/types/filter';

const Filter = ({ selectedType, setSelectedType }: FilterProps) => {
    return (
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
    );
};

export default Filter;