import React from 'react';

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-bl from-orange-100 to-transparent rounded-full blur-3xl opacity-20 -z-10"></div>

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-block mb-4 px-4 py-2 bg-purple-50 rounded-full">
                        <span className="text-sm font-semibold text-purple-700">Ecosistema Colaborativo</span>
                    </div>

                    <h2 className="mb-8">
                        Tres actores, un objetivo común
                    </h2>

                    <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        Citixen conecta ciudadanía, gobiernos y organizaciones sociales en una plataforma de confianza verificable.
                    </p>
                </div>

                {/* Three roles */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Ciudadanos */}
                    <div className="card-item">
                        <div className="mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 12H9m6 0a6 6 0 11-12 0 6 6 0 0112 0z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ciudadanos</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="text-sm font-semibold text-blue-600 mb-1">1. Contribuir</div>
                                <p className="text-gray-700">Realizan aportaciones fiscales a través de la plataforma de forma transparente y segura.</p>
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-blue-600 mb-1">2. Recibir Civic Coins</div>
                                <p className="text-gray-700">Obtienen poder de voto proporcional a su contribución.</p>
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-blue-600 mb-1">3. Decidir</div>
                                <p className="text-gray-700">Votan directamente qué proyectos financiar en su comunidad.</p>
                            </div>
                        </div>
                    </div>

                    {/* Gobiernos */}
                    <div className="card-item border-t-4 border-orange-500">
                        <div className="mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-orange-100 to-orange-200 mb-4">
                                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Gobiernos</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="text-sm font-semibold text-orange-600 mb-1">1. Validar</div>
                                <p className="text-gray-700">Registran y validan proyectos sociales con presupuestos claros y verificables.</p>
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-orange-600 mb-1">2. Transparencia</div>
                                <p className="text-gray-700">Publican reportes en tiempo real del progreso de cada proyecto.</p>
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-orange-600 mb-1">3. Ejecutar</div>
                                <p className="text-gray-700">Convierten resultados del voto en asignaciones presupuestarias reales.</p>
                            </div>
                        </div>
                    </div>

                    {/* Organizaciones */}
                    <div className="card-item border-t-4 border-green-500">
                        <div className="mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-green-100 to-green-200 mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Organizaciones</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="text-sm font-semibold text-green-600 mb-1">1. Presentar</div>
                                <p className="text-gray-700">Registran proyectos sociales con impacto medible y objetivos claros.</p>
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-green-600 mb-1">2. Financiación</div>
                                <p className="text-gray-700">Reciben financiamiento directo del voto ciudadano sin intermediarios.</p>
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-green-600 mb-1">3. Reportar</div>
                                <p className="text-gray-700">Documentan resultados e impacto social de cada proyecto.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Proceso de ciclo */}
                <div className="mt-20 bg-gradient-to-r from-blue-50 to-orange-50 rounded-3xl p-8 md:p-12">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">El Ciclo de Participación</h3>
                    <div className="grid md:grid-cols-4 gap-6 md:gap-4">
                        <div className="text-center">
                            <div className="inline-block w-12 h-12 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mb-4">1</div>
                            <p className="font-semibold text-gray-900">Aporte Fiscal</p>
                            <p className="text-sm text-gray-600 mt-2">Contribución verificable</p>
                        </div>
                        <div className="hidden md:flex items-center justify-center">
                            <div className="flex-1 h-1 bg-gradient-to-r from-blue-600 to-orange-600"></div>
                        </div>
                        <div className="text-center">
                            <div className="inline-block w-12 h-12 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mb-4">2</div>
                            <p className="font-semibold text-gray-900">Civic Coins</p>
                            <p className="text-sm text-gray-600 mt-2">Poder de voto</p>
                        </div>
                        <div className="hidden md:flex items-center justify-center">
                            <div className="flex-1 h-1 bg-gradient-to-r from-orange-600 to-green-600"></div>
                        </div>
                        <div className="text-center">
                            <div className="inline-block w-12 h-12 rounded-full bg-orange-600 text-white font-bold flex items-center justify-center mb-4">3</div>
                            <p className="font-semibold text-gray-900">Votación</p>
                            <p className="text-sm text-gray-600 mt-2">Decisión democrática</p>
                        </div>
                        <div className="hidden md:flex items-center justify-center">
                            <div className="flex-1 h-1 bg-gradient-to-r from-orange-600 to-green-600"></div>
                        </div>
                        <div className="text-center">
                            <div className="inline-block w-12 h-12 rounded-full bg-green-600 text-white font-bold flex items-center justify-center mb-4">4</div>
                            <p className="font-semibold text-gray-900">Impacto</p>
                            <p className="text-sm text-gray-600 mt-2">Cambio real</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;