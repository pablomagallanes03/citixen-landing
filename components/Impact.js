import React from 'react';

const Impact = () => {
    return (
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                    Una nueva forma de participación
                </h2>
                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                    Más transparencia. Más impacto. Más poder para las personas.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-2">Transparencia</h3>
                        <p className="text-gray-600">Sabe exactamente cómo se usan tus impuestos.</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-2">Impacto</h3>
                        <p className="text-gray-600">Financia proyectos que realmente importan en tu comunidad.</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-2">Poder</h3>
                        <p className="text-gray-600">Toma decisiones reales sobre el futuro de tu ciudad.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;