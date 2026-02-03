import React from 'react';
import logo from '../../../public/assets/logo/Haiilo.png';
import Container from './Container';

const Header = () => {
    const nav = ['supermarket']
    return (
        <Container>
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
        </Container>
    );
};

export default React.memo(Header);