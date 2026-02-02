import React from 'react';
import logo from '../../../public/assets/logo/Haiilo.png';

const Header = () => {
    const nav = ['supermarket']
    return (
        <section className='h-25 bg-primary py-4 flex flex-col justify-center'>
            <div className='container mx-auto px-4 flex items-center'>
                <img src={logo} alt="Logo" className="h-12 mr-6" />
                <nav>
                    {nav.map((item) => (
                        <span
                            key={item}
                            className="capitalize text-2xl text-white font-medium"
                        >
                            {item}
                        </span>
                    ))}
                </nav>
            </div>
        </section>
    );
};

export default React.memo(Header);