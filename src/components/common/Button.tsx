type ButtonProps = {
    text: string;
    inCart?: boolean;
    belowImage?: boolean;
    variant?: "primary" | "secondary";
    onClick: () => void;
    disabled?: boolean;
    ariaLabel?: string;
};

const Button = ({
    text,
    inCart = false,
    belowImage = false,
    variant = "primary",
    onClick,
    disabled = false,
    ariaLabel
}: ButtonProps) => {
    const buttonSize = inCart ? 'px-2 py-2' : 'px-6 py-3';
    const cursorStyle = disabled ? 'cursor-not-allowed' : 'cursor-pointer';
    const baseStyle = `flex flex-row gap-2 ${buttonSize} border-2 w-max rounded-full transition-colors group focus:outline-none ${cursorStyle} touch-manipulation select-none`;
    const style = {
        'primary': disabled
            ? 'border-gray-400 text-gray-400 bg-gray-200'
            : 'border-primary text-white bg-primary hover:opacity-80 active:opacity-90',
        'secondary': disabled
            ? 'border-gray-400 text-gray-400 bg-white'
            : 'border-primary text-primary hover:text-white bg-white hover:bg-primary active:bg-primary active:text-white',
    } as const

    const hoverBelowImage = belowImage ? 'absolute left-1/2 -translate-x-1/2 -bottom-7' : ''
    const logoStyle = {
        'primary': disabled ? 'opacity-50' : 'brightness-0 invert',
        'secondary': disabled ? 'opacity-50' : 'group-hover:brightness-0 group-hover:invert group-active:brightness-0 group-active:invert',
    } as const

    const getIconSrc = () => {
        if (text.toLowerCase() === 'increase') return '/assets/icon/icon-plus.svg';
        if (text.toLowerCase() === 'decrease') return '/assets/icon/icon-minus.svg';
        if (text.toLowerCase() === 'remove') return '/assets/icon/icon-trash.svg';
        return '/assets/icon/icon-add-to-cart.svg';
    }

    return (
        <button
            className={`${hoverBelowImage} ${baseStyle} ${cursorStyle} ${style[variant]}`}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel || text}
            type="button"
        >
            {inCart ?
            <img
                src={getIconSrc()}
                alt=""
                aria-hidden="true"
                className={`inline-block w-3 h-3 ${logoStyle[variant]}`}
            />  :
            <img
                src="/assets/icon/icon-add-to-cart.svg"
                alt=""
                aria-hidden="true"
                className={`inline-block w-5 h-5 ${logoStyle[variant]}`}
            />}
            {!inCart && <span>{text}</span>}
        </button>
    );
};

export default Button;