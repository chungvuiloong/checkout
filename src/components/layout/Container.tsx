import React from 'react';

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className='h-25 bg-primary py-4 flex flex-col justify-center'>
            <div className='container mx-auto px-4 flex items-center'>
                {children}
            </div>
        </section>
    );
};

export default Container;