import React from 'react';

const TransparencyTrust = () => {
    return (
        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 fade-in">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
                    Transparencia desde el diseño
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <div className="text-3xl mb-4">👁️</div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">Proyectos visibles para la comunidad</h3>
                        <p className="text-gray-600">Todos los proyectos y su estado de ejecución son accesibles y claros para la ciudadanía.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <div className="text-3xl mb-4">🔒</div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">Validación por gobiernos locales</h3>
                        <p className="text-gray-600">Cada proyecto es revisado y supervisado por autoridades competentes para garantizar viabilidad.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <div className="text-3xl mb-4">📊</div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">Trazabilidad del apoyo ciudadano</h3>
                        <p className="text-gray-600">Cada contribución es documentada y vinculada directamente a los resultados del proyecto.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TransparencyTrust;