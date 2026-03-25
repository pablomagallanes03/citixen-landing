import React from 'react';

const Solution = () => {
    return (
        <section className="bg-white py-32 px-4 sm:px-6 lg:px-8 fade-in">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-gray-900 mb-8">
                        Una nueva forma de participación ciudadana
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Citixen transforma impuestos en decisiones. A través de un sistema simple, transparente y verificable, puedes apoyar directamente los proyectos que más importan en tu comunidad.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="card-item">
                        <div className="flex flex-col items-center text-center">
                            <div className="icon-circle mb-6" style={{ borderRadius: '14px', background: 'linear-gradient(135deg, #f2994a 0%, #e88a3d 100%)', boxShadow: '0 4px 15px rgba(242, 153, 74, 0.2)' }}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Aportes fiscales</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Realizas tus contribuciones fiscales regulares a tu municipio de forma segura y verificable.
                            </p>
                        </div>
                    </div>
                    <div className="card-item">
                        <div className="flex flex-col items-center text-center">
                            <div className="icon-circle mb-6" style={{ borderRadius: '14px', background: 'linear-gradient(135deg, #f2994a 0%, #e88a3d 100%)', boxShadow: '0 4px 15px rgba(242, 153, 74, 0.2)' }}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2 1m2-1l-2-1m2 1v2.5" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Recibes Civic Coins</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Tu aporte genera Civic Coins en proporción directa, que representan tu poder de decisión en la plataforma.
                            </p>
                        </div>
                    </div>
                    <div className="card-item">
                        <div className="flex flex-col items-center text-center">
                            <div className="icon-circle mb-6" style={{ borderRadius: '14px', background: 'linear-gradient(135deg, #f2994a 0%, #e88a3d 100%)', boxShadow: '0 4px 15px rgba(242, 153, 74, 0.2)' }}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Asigna a proyectos</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Dirige tus Civic Coins a los proyectos sociales que más importan en tu comunidad. Tu voto importa.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;