import React from 'react';

const HowItWorks = () => {
    return (
        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
                    Cómo funciona
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center bg-white p-8 rounded-lg shadow-sm">
                        <div className="text-4xl mb-4">👤</div>
                        <h3 className="text-xl font-semibold mb-4">Ciudadanos</h3>
                        <p className="text-gray-600">Reciben tokens y deciden dónde invertir su contribución fiscal en proyectos locales.</p>
                    </div>
                    <div className="text-center bg-white p-8 rounded-lg shadow-sm">
                        <div className="text-4xl mb-4">🏛️</div>
                        <h3 className="text-xl font-semibold mb-4">Gobiernos</h3>
                        <p className="text-gray-600">Validan y ejecutan los proyectos seleccionados, asegurando transparencia.</p>
                    </div>
                    <div className="text-center bg-white p-8 rounded-lg shadow-sm">
                        <div className="text-4xl mb-4">🏗️</div>
                        <h3 className="text-xl font-semibold mb-4">Proyectos</h3>
                        <p className="text-gray-600">Reciben financiamiento directo basado en las decisiones ciudadanas.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;