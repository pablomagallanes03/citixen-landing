import React from 'react';

const Header = () => {
    return (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img src="/pictures/logo1.svg" alt="Citixen Logo" className="h-10 w-10" />
                    <span className="text-xl font-bold text-gray-900 hidden sm:inline">Citixen</span>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex gap-8 items-center">
                    <a href="#features" className="text-gray-600 hover:text-gray-900 transition font-medium">
                        Características
                    </a>
                    <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition font-medium">
                        Cómo funciona
                    </a>
                    <a href="#contact" className="text-gray-600 hover:text-gray-900 transition font-medium">
                        Contacto
                    </a>
                    <button className="btn-primary">
                        Comenzar
                    </button>
                </nav>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button className="btn-primary py-2 px-3 text-sm">
                        Comenzar
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;