import React from 'react';

const Product = () => {
    return (
        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
                    Nuestra plataforma
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">📱</div>
                        <h3 className="text-lg font-semibold mb-2">Interfaz simple</h3>
                        <p className="text-gray-600">Fácil de usar para todos los ciudadanos.</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">👁️</div>
                        <h3 className="text-lg font-semibold mb-2">Proyectos visibles</h3>
                        <p className="text-gray-600">Explora proyectos sociales locales claramente.</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">🪙</div>
                        <h3 className="text-lg font-semibold mb-2">Sistema de tokens</h3>
                        <p className="text-gray-600">Civic coins para asignar de forma segura.</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">✅</div>
                        <h3 className="text-lg font-semibold mb-2">Validación transparente</h3>
                        <p className="text-gray-600">Gobiernos aprueban y ejecutan con claridad.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;