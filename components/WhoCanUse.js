import React from 'react';

const WhoCanUse = () => {
    return (
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 fade-in">
            <div className="max-w-7xl mx-auto section-card">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
                    ¿Quién puede usar Citixen?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center bg-gray-50 p-8 rounded-lg">
                        <div className="text-4xl mb-4">👥</div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-900">Ciudadanos</h3>
                        <p className="text-gray-600">Que quieren mayor transparencia y participación en la asignación de recursos públicos.</p>
                    </div>
                    <div className="text-center bg-gray-50 p-8 rounded-lg">
                        <div className="text-4xl mb-4">🏢</div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-900">Gobiernos</h3>
                        <p className="text-gray-600">Que buscan fortalecer la confianza pública y estrechar vínculos con su comunidad.</p>
                    </div>
                    <div className="text-center bg-gray-50 p-8 rounded-lg">
                        <div className="text-4xl mb-4">🤝</div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-900">Organizaciones Sociales</h3>
                        <p className="text-gray-600">Que necesitan financiamiento y apoyo directo de sus comunidades locales.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoCanUse;