import React from 'react';

const Header = () => {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img src="/logo1.svg" alt="Citixen Logo" className="h-10 w-10" />
                    <span className="text-xl font-bold text-primary hidden sm:inline">Citixen</span>
                </div>
                <nav className="hidden md:flex gap-4 items-center">
                    <a href="#features" className="text-gray-600 hover:text-primary transition">Características</a>
                    <a href="#how-it-works" className="text-gray-600 hover:text-primary transition">Cómo funciona</a>
                    <a href="#contact" className="text-gray-600 hover:text-primary transition">Contacto</a>
                    <a href="#waitlist" className="btn-primary py-2 px-4">Unirme</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;