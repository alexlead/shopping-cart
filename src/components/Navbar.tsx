import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';


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
                </nav>
            </MaxWidthWrapper>
        </div>
    );
}
export default Navbar;