import React from 'react';

const TransparencyTrust = () => {
    return (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
            {/* Decorative */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-100 to-transparent rounded-full blur-3xl opacity-20 -z-10"></div>

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4 px-4 py-2 bg-emerald-50 rounded-full">
                        <span className="text-sm font-semibold text-emerald-700">Pilares de Confianza</span>
                    </div>

                    <h2 className="mb-8">
                        Construimos confianza mediante verificabilidad
                    </h2>

                    <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        No pedimos que nos creas. Pedimos que verifiques. Toda transacción, voto y resultado es auditable en tiempo real.
                    </p>
                </div>

                {/* Three pillars */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Pillar 1 */}
                    <div className="card-item">
                        <div className="mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Transparencia Radical</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            Cada proyecto, voto y transacción es visible globalmente. Cero secretos. Cero desconexión entre decisión y resultado.
                        </p>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="text-sm font-semibold text-blue-600">Dashboard en tiempo real +  Blockchain auditado</p>
                        </div>
                    </div>

                    {/* Pillar 2 */}
                    <div className="card-item">
                        <div className="mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Validación Rigurosa</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            Gobiernos validan proyectos antes de que lleguen a votación. Garantiza que cada financiamiento es ejecutable y tiene impacto real.
                        </p>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="text-sm font-semibold text-orange-600">Supervisión institucional + Verificación técnica</p>
                        </div>
                    </div>

                    {/* Pillar 3 */}
                    <div className="card-item">
                        <div className="mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Trazabilidad Total</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            Cada contribución se vincula permanentemente a resultados. Observa exactamente cómo tu dinero genera cambio en tu comunidad.
                        </p>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="text-sm font-semibold text-green-600">Reportes de impacto + Medición continua</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TransparencyTrust;