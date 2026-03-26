import React from 'react';

const Product = () => {
    return (
        <section id="features" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
            {/* Decorative */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-100 to-transparent rounded-full blur-3xl opacity-20 -z-10"></div>

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4 px-4 py-2 bg-cyan-50 rounded-full">
                        <span className="text-sm font-semibold text-cyan-700">Características Premium</span>
                    </div>

                    <h2 className="mb-8">
                        Plataforma diseñada para confianza institucional
                    </h2>

                    <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        Herramientas avanzadas que conectan ciudadanos, gobiernos y organizaciones en un ecosistema de confianza verificable.
                    </p>
                </div>

                {/* 4 Features grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Feature 1 */}
                    <div className="card-item">
                        <div className="mb-6">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 mb-4">
                                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Civic Coins</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Sistema de tokenización que convierte contribuciones fiscales en poder de voto. Cada Civic Coin representa participación verificable.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="card-item">
                        <div className="mb-6">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-orange-100 to-orange-200 mb-4">
                                <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparencia Total</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Dashboard en tiempo real que muestra cada proyecto, cada voto y cada transacción. Auditable, inmutable, verificable.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="card-item">
                        <div className="mb-6">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-green-100 to-green-200 mb-4">
                                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Votación Democrática</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Mecanismos de votación seguros y escalables. Los ciudadanos deciden directamente cómo se asignan los fondos públicos.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="card-item">
                        <div className="mb-6">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 mb-4">
                                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Impacto Medible</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Analytics avanzados que rastrea el impacto real de cada proyecto. Resultados, indicadores, ROI social documentado.
                        </p>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <p className="text-gray-700 mb-6">¿Quieres ver la plataforma en acción?</p>
                    <button className="btn-primary">
                        Solicitar demostración completa
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Product;