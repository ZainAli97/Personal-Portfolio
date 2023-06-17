import { NavigationDotsProps } from '@/types';
import Link from 'next/link';
import React from 'react';

const NavigationDots: React.FC<NavigationDotsProps> = ({ active }) => {
    return (
        <div className='app__navigation'>
            {["home", "about", "work", "skills", "testimonials", "contact"].map((item, index) => (
                // eslint-disable-next-line
                <Link
                    href={`#${item}`}
                    className="app__navigation-dot"
                    key={item + index}
                    style={active === item ? { backgroundColor: "#313BAC" } : {}}
                />
            ))}
        </div>
    );
};

export default NavigationDots;