import React from 'react';

const WhoCanUse = () => {
    return (
        <section className="bg-white py-32 px-4 sm:px-6 lg:px-8 fade-in">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-gray-900 mb-6">
                        ¿Quién puede usar Citixen?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Una plataforma inclusiva para ciudadanos, gobiernos y organizaciones comprometidas con el cambio social.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="card-item">
                        <div className="flex flex-col">
                            <div className="icon-circle mb-6" style={{ borderRadius: '14px', background: 'linear-gradient(135deg, #f2994a 0%, #e88a3d 100%)', boxShadow: '0 4px 15px rgba(242, 153, 74, 0.2)' }}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 20H9m8-4v4m0 0h4m-11 0H9m11-5a3 3 0 01-5.824 1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zM7 20H4v-2a3 3 0 015.824-1.487M9 10a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ciudadanos</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Toda persona que busque mayor transparencia y participación activa en la asignación de recursos públicos.
                            </p>
                        </div>
                    </div>
                    <div className="card-item">
                        <div className="flex flex-col">
                            <div className="icon-circle mb-6" style={{ borderRadius: '14px', background: 'linear-gradient(135deg, #f2994a 0%, #e88a3d 100%)', boxShadow: '0 4px 15px rgba(242, 153, 74, 0.2)' }}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4 0h1m-1-4h1m4 4h1m-1-4h1" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Gobiernos Locales</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Instituciones públicas que desean fortalecer confianza y construir relaciones más sólidas con comunidades.
                            </p>
                        </div>
                    </div>
                    <div className="card-item">
                        <div className="flex flex-col">
                            <div className="icon-circle mb-6" style={{ borderRadius: '14px', background: 'linear-gradient(135deg, #f2994a 0%, #e88a3d 100%)', boxShadow: '0 4px 15px rgba(242, 153, 74, 0.2)' }}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Organizaciones Sociales</h3>
                            <p className="text-gray-600 leading-relaxed">
                                ONGs, cooperativas y grupos que necesitan financiamiento directo y apoyo genuino de sus comunidades.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoCanUse;