import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Top section */}
                <div className="grid md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-gray-800">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/pictures/logo5.svg" alt="Citixen" className="h-8 w-8" />
                            <span className="text-2xl font-bold">Citixen</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            La plataforma de presupuesto participativo que democratiza decisiones públicas.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="font-semibold mb-6 text-white">Plataforma</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#features" className="hover:text-white transition">Características</a></li>
                            <li><a href="#how-it-works" className="hover:text-white transition">Cómo funciona</a></li>
                            <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                            <li><a href="#" className="hover:text-white transition">Demo</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold mb-6 text-white">Company</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#" className="hover:text-white transition">Acerca de</a></li>
                            <li><a href="#" className="hover:text-white transition">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition">Prensa</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-6 text-white">Contacto</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="mailto:hola@citixen.com" className="text-gray-400 hover:text-white transition">
                                    hola@citixen.com
                                </a>
                            </li>
                            <li className="text-gray-500 text-sm pt-2">
                                Disponible para gobiernos, inversores y socios estratégicos.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8">
                    <p className="text-gray-400 text-sm">
                        &copy; 2026 Citixen. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="text-gray-400 hover:text-white transition">Privacidad</a>
                        <a href="#" className="text-gray-400 hover:text-white transition">Términos de uso</a>
                        <a href="#" className="text-gray-400 hover:text-white transition">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;