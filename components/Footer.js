import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/logo5.svg" alt="Citixen" className="h-8 w-8" />
                            <span className="text-xl font-bold">Citixen</span>
                        </div>
                        <p className="text-gray-400">Una forma más transparente de asignar recursos públicos.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Contacto</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="mailto:hola@citixen.com" className="hover:text-white transition duration-300">hola@citixen.com</a></li>
                            <li className="text-sm">Estamos en etapa inicial. Contáctanos para conocer más.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition duration-300">Privacidad</a></li>
                            <li><a href="#" className="hover:text-white transition duration-300">Términos de uso</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2026 Citixen. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;