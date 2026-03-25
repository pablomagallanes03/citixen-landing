import React from 'react';

const Impact = () => {
    return (
        <section className="bg-white py-32 px-4 sm:px-6 lg:px-8 fade-in">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-gray-900 mb-8">
                    Transformando cómo se asignan recursos públicos
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                    Citixen propone un modelo innovador donde los ciudadanos participan activamente en decisiones sobre recursos públicos. Juntos, fortalecemos la transparencia, construimos confianza genuina en las instituciones y maximizamos el impacto social real en cada comunidad.
                </p>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="py-8 border-t-2 border-orange-400">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Transparencia</h3>
                        <p className="text-gray-600">Total visibilidad de cada proyecto y su estado.</p>
                    </div>
                    <div className="py-8 border-t-2 border-orange-400">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Participación</h3>
                        <p className="text-gray-600">Los ciudadanos toman decisiones que importan.</p>
                    </div>
                    <div className="py-8 border-t-2 border-orange-400">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Impacto Real</h3>
                        <p className="text-gray-600">Proyectos concretos que transforman comunidades.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;