import React from 'react';

const TransparencyTrust = () => {
    return (
        <section className="bg-gray-50 py-32 px-4 sm:px-6 lg:px-8 fade-in">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-gray-900 mb-6">
                        Transparencia desde el diseño
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Construimos confianza a través de la claridad radical y el seguimiento completo de cada proyecto.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="card-item">
                        <div className="flex flex-col">
                            <div className="icon-circle mb-6" style={{ borderRadius: '14px', background: 'linear-gradient(135deg, #2f80ed 0%, #1e5cc7 100%)' }}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Proyectos Visibles</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Todos los proyectos y su estado de ejecución son completamente accesibles y transparentes para toda la comunidad.
                            </p>
                        </div>
                    </div>
                    <div className="card-item">
                        <div className="flex flex-col">
                            <div className="icon-circle mb-6" style={{ borderRadius: '14px', background: 'linear-gradient(135deg, #2f80ed 0%, #1e5cc7 100%)' }}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Validación Rigurosa</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Cada proyecto es supervisado por gobiernos locales competentes para garantizar viabilidad y ejecutabilidad.
                            </p>
                        </div>
                    </div>
                    <div className="card-item">
                        <div className="flex flex-col">
                            <div className="icon-circle mb-6" style={{ borderRadius: '14px', background: 'linear-gradient(135deg, #2f80ed 0%, #1e5cc7 100%)' }}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Trazabilidad Total</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Cada contribución es documentada y vinculada permanentemente a los resultados concretos del proyecto.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TransparencyTrust;