import React from 'react';

const WhoCanUse = () => {
    return (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white">
            {/* Decorative */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl opacity-20 -z-10"></div>

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4 px-4 py-2 bg-rose-50 rounded-full">
                        <span className="text-sm font-semibold text-rose-700">Para Todos</span>
                    </div>

                    <h2 className="mb-8">
                        Citixen es para quién cree en la democracia participativa
                    </h2>

                    <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        Una plataforma diseñada para conectar tres actores clave en la transformación de cómo se distribuye el poder presupuestario.
                    </p>
                </div>

                {/* Three personas */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Citizens */}
                    <div className="card-item">
                        <div className="mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 20H9m8-4v4m0 0h4m-11 0H9m11-5a3 3 0 01-5.824 1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zM7 20H4v-2a3 3 0 015.824-1.487M9 10a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ciudadanos</h3>

                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Si eres contribuyente y quieres mayor control sobre cómo se gastan tus impuestos.
                        </p>

                        <div className="space-y-3 border-t border-gray-200 pt-6">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">Votar directamente en decisiones presupuestarias</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">Ver en tiempo real cómo se usa cada peso</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">Apoiar proyectos que importan en tu ciudad</span>
                            </div>
                        </div>
                    </div>

                    {/* Government */}
                    <div className="card-item border-t-4 border-orange-500">
                        <div className="mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4 0h1m-1-4h1m4 4h1m-1-4h1" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Gobiernos Locales</h3>

                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Si gobiernas una comunidad y buscas fortalecer confianza ciudadana e innovar en gestión pública.
                        </p>

                        <div className="space-y-3 border-t border-gray-200 pt-6">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">Transparencia radical del presupuesto municipal</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">Alineación presupuestaria con prioridades ciudadanas</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">Diferenciación política basada en resultados</span>
                            </div>
                        </div>
                    </div>

                    {/* Organizations */}
                    <div className="card-item border-t-4 border-green-500">
                        <div className="mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Organizaciones Sociales</h3>

                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Si ejecutas proyectos de impacto social y necesitas financiamiento directo del ciudadano.
                        </p>

                        <div className="space-y-3 border-t border-gray-200 pt-6">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">Acceso directo a financiamiento ciudadano</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">Validación y credibilidad de proyectos</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">Medición y reporte de impacto</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoCanUse;