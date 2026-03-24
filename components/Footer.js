import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Citixen</h3>
                        <p className="text-gray-400">Transformando impuestos en decisiones ciudadanas.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Producto</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition duration-300">App Ciudadano</a></li>
                            <li><a href="#" className="hover:text-white transition duration-300">Panel Gobierno</a></li>
                            <li><a href="#" className="hover:text-white transition duration-300">Panel Organizaciones</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Compañía</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition duration-300">Sobre nosotros</a></li>
                            <li><a href="#" className="hover:text-white transition duration-300">Contacto</a></li>
                            <li><a href="#" className="hover:text-white transition duration-300">Prensa</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition duration-300">Privacidad</a></li>
                            <li><a href="#" className="hover:text-white transition duration-300">Términos</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 Citixen. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;