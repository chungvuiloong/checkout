type ButtonProps = {
    text: string;
    belowImage?: boolean;
    variant?: "primary" | "secondary";
    onClick: () => void;
    disabled?: boolean;
    ariaLabel?: string;
};

const Button = ({
    text,
    belowImage = false,
    variant = "primary",
    onClick,
    disabled = false,
    ariaLabel
}: ButtonProps) => {
    const style = {
        'primary': 'border-primary text-white bg-primary hover:opacity-80 active:opacity-90',
        'secondary': 'border-primary text-primary hover:text-white bg-white hover:bg-primary active:bg-primary active:text-white',
    } as const

    const hoverBelowImage = belowImage ? 'absolute left-1/2 -translate-x-1/2 -bottom-7' : ''
    const logoStyle = {
        'primary': 'brightness-0 invert',
        'secondary': 'group-hover:brightness-0 group-hover:invert group-active:brightness-0 group-active:invert',
    } as const

    return (
        <button
            className={`${hoverBelowImage} px-6 py-3 border-2 w-max rounded-full
            ${style[variant]} transition-colors group
            disabled:opacity-50 disabled:cursor-not-allowed
            focus:outline-none cursor-pointer touch-manipulation select-none`}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel || text}
            type="button"
        >
            <img
                src="/assets/icon/icon-add-to-cart.svg"
                alt=""
                aria-hidden="true"
                className={`inline-block w-5 h-5 mr-2 -mt-1 ${logoStyle[variant]}`}
            />
            <span>{text}</span>
        </button>
    );
};

export default Button;