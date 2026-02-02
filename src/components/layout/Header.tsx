import React from 'react';
import logo from '../../../public/assets/logo/Haiilo.png';

const Header = () => {
    return (
        <section className='h-25 bg-primary py-4 flex flex-col justify-center'>
            <div className='container mx-auto px-4 flex items-center'>
                <img src={logo} alt="Logo" className="h-12 mr-6" />
                <nav>
                    <span className="text-2xl text-white font-medium">Supermarket</span>
                </nav>
            </div>
        </section>
    );
};

export default React.memo(Header);