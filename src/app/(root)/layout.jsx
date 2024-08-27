import Navbar from '@/components/my-ui/Navbar';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <section className="flex-1 max-w-screen-2xl mx-auto">
                {children}
            </section>
        </div>
    );
};

export default layout;