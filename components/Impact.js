import React from 'react';

const Impact = () => {
    return (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
            {/* Decorative element */}
            <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100 to-transparent rounded-full blur-3xl opacity-20 -z-10"></div>

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4 px-4 py-2 bg-indigo-50 rounded-full">
                        <span className="text-sm font-semibold text-indigo-700">Nuestra Visión</span>
                    </div>

                    <h2 className="mb-8">
                        Gobiernos más democráticos, comunidades más fuertes
                    </h2>

                    <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        Imaginamos un futuro donde la participación ciudadana es el estándar, no la excepción. Donde los impuestos se convierten en poder democratizado y cada comunidad controla su propio destino.
                    </p>
                </div>

                {/* Three pillars */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Transparencia */}
                    <div className="section-card text-center">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-100 mb-6">
                            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">Transparencia Total</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Cada transacción, voto y proyecto es auditable en tiempo real a través de blockchain.
                        </p>
                    </div>

                    {/* Participación */}
                    <div className="section-card text-center">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-orange-100 mb-6">
                            <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 20H9m8-4v4m0 0h4m-11 0H9m11-5a3 3 0 01-5.824 1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zM7 20H4v-2a3 3 0 015.824-1.487M9 10a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">Participación Activa</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Ciudadanos toman decisiones reales sobre presupuestos de sus propias comunidades.
                        </p>
                    </div>

                    {/* Impacto */}
                    <div className="section-card text-center">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-green-100 mb-6">
                            <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">Impacto Real</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Proyectos concretos, financiados directamente, con resultados medibles en comunidades.
                        </p>
                    </div>
                </div>

                {/* Stats */}
                <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-3xl p-8 md:p-12">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">1.2M</div>
                            <p className="text-gray-700 font-semibold">Ciudadanos potenciales</p>
                            <p className="text-sm text-gray-600 mt-1">en municipios interesados</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-orange-600 mb-2">$2.5B</div>
                            <p className="text-gray-700 font-semibold">Presupuesto anual</p>
                            <p className="text-sm text-gray-600 mt-1">optimizable</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-green-600 mb-2">750+</div>
                            <p className="text-gray-700 font-semibold">Proyectos sociales</p>
                            <p className="text-sm text-gray-600 mt-1">para financiar</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                            <p className="text-gray-700 font-semibold">Verificable</p>
                            <p className="text-sm text-gray-600 mt-1">on-chain</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;