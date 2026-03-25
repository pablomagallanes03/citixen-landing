import React from 'react';

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="bg-gray-50 py-32 px-4 sm:px-6 lg:px-8 fade-in">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-gray-900 mb-6">
                        Cómo funciona
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Un ecosistema colaborativo donde ciudadanos, gobiernos y organizaciones trabajan juntos por proyectos sociales reales.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="card-item">
                        <div className="flex flex-col items-center text-center">
                            <div className="icon-circle mb-6">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ciudadanos</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Reciben Civic Coins por sus aportes y deciden a qué proyectos sociales asignarlos de forma participativa.
                            </p>
                        </div>
                    </div>
                    <div className="card-item">
                        <div className="flex flex-col items-center text-center">
                            <div className="icon-circle mb-6" style={{ background: 'linear-gradient(135deg, #2f80ed 0%, #1e5cc7 100%)' }}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Gobiernos</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Validan proyectos, supervisan el proceso y convierten los Civic Coins en financiamiento real y ejecutable.
                            </p>
                        </div>
                    </div>
                    <div className="card-item">
                        <div className="flex flex-col items-center text-center">
                            <div className="icon-circle mb-6" style={{ background: 'linear-gradient(135deg, #2f80ed 0%, #1e5cc7 100%)' }}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Organizaciones</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Presentan proyectos sociales y reciben apoyo directo de la comunidad con financiamiento certificado.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;