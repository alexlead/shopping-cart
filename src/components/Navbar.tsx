import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { FaShoppingCart } from 'react-icons/fa';


interface INavbarProps {
}

const Navbar: React.FunctionComponent<INavbarProps> = () => {
    const navItems = [
        {
            id: 1,
            name: 'Home',
            href: '#',
        },
        {
            id: 2,
            name: 'Shop',
            href: '#',
        },
        {
            id: 3,
            name: 'About',
            href: '#',
        },
        {
            id: 4,
            name: 'Contact',
            href: '#',
        },
    ];
    return (
        <div className="border-b border-primary/30 fixed top-0 z-10 w-full bg-secondary">
            <MaxWidthWrapper>
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <div>
                        <img src="/Logo.png" alt="Logo" className="h-16 w-auto" />
                    </div>
                    {/* Navigation Links */
                        <div className="space-x-6">
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    className="text-gray-300 hover:text-primary/80"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>}
                    {/* Cart Icon */}
                    <div className="space">
                        <button className="relative">
                            <FaShoppingCart className='text-2xl' />
                            <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                                0
                            </span>
                        </button>
                    </div>
                </nav>
            </MaxWidthWrapper>
        </div>
    );
}
export default Navbar;