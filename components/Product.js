import React from 'react';

const Product = () => {
    return (
        <section id="features" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 fade-in">
            <div className="max-w-7xl mx-auto section-card">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
                    Nuestra plataforma
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">📱</div>
                        <h3 className="text-lg font-semibold mb-2">Interfaz simple e intuitiva</h3>
                        <p className="text-gray-600">Diseñada para que cualquier ciudadano la use fácilmente.</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">👁️</div>
                        <h3 className="text-lg font-semibold mb-2">Proyectos visibles y accesibles</h3>
                        <p className="text-gray-600">Explora proyectos sociales de tu comunidad con claridad.</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">🪙</div>
                        <h3 className="text-lg font-semibold mb-2">Sistema de asignación mediante civic coins</h3>
                        <p className="text-gray-600">Distancia clara entre impuestos y decisiones participativas.</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">✅</div>
                        <h3 className="text-lg font-semibold mb-2">Validación por gobiernos locales</h3>
                        <p className="text-gray-600">Proyectos supervisados y ejecutados con transparencia.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;