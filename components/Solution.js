import React from 'react';

const Solution = () => {
    return (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4 px-4 py-2 bg-green-50 rounded-full">
                        <span className="text-sm font-semibold text-green-700">La Solución</span>
                    </div>

                    <h2 className="mb-8">
                        Plataforma de Presupuesto Participativo Verificable
                    </h2>

                    <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        Citixen es la infraestructura digital que permite a gobiernos conectar directamente con sus ciudadanos, asignando presupuestos de forma democrática, transparente y verificable.
                    </p>
                </div>

                {/* Tres pilares */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {/* Pilar 1 */}
                    <div className="card-item">
                        <div className="mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Seguridad Verificable</h3>
                        </div>
                        <p className="text-gray-700">Tecnología blockchain para garantizar que cada voto y transacción es auditable, inmutable y transparente.</p>
                    </div>

                    {/* Pilar 2 */}
                    <div className="card-item">
                        <div className="mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 text-white mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Participación Real</h3>
                        </div>
                        <p className="text-gray-700">Los ciudadanos pueden decidir cómo se distribuyen fondos públicos específicos usando Civic Coins, su poder de voto.</p>
                    </div>

                    {/* Pilar 3 */}
                    <div className="card-item">
                        <div className="mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Impacto Medible</h3>
                        </div>
                        <p className="text-gray-700">Dashboard inteligente que rastrea cómo se gastan los fondos y qué impacto social generan los proyectos.</p>
                    </div>
                </div>

                {/* Proceso */}
                <div className="relative">
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-orange-500 hidden md:block"></div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Paso 1 */}
                        <div className="relative md:pl-20">
                            <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-blue-50 border-4 border-white flex items-center justify-center font-bold text-blue-600 text-xl hidden md:flex">1</div>
                            <div className="md:pt-2">
                                <h4 className="text-lg font-semibold text-gray-900 mb-3">Ciudadanos Contribuyen</h4>
                                <p className="text-gray-700">Los contribuyentes realizan aportaciones fiscales y reciben Civic Coins proporcionales a su inversión.</p>
                            </div>
                        </div>

                        {/* Paso 2 */}
                        <div className="relative md:pl-20">
                            <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-orange-50 border-4 border-white flex items-center justify-center font-bold text-orange-600 text-xl hidden md:flex">2</div>
                            <div className="md:pt-2">
                                <h4 className="text-lg font-semibold text-gray-900 mb-3">Proyectos Verificados</h4>
                                <p className="text-gray-700">Gobiernos registran proyectos sociales reales con objetivos claros, presupuestos y timeline verificable.</p>
                            </div>
                        </div>

                        {/* Paso 3 */}
                        <div className="relative md:pl-20">
                            <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-green-50 border-4 border-white flex items-center justify-center font-bold text-green-600 text-xl hidden md:flex">3</div>
                            <div className="md:pt-2">
                                <h4 className="text-lg font-semibold text-gray-900 mb-3">Asignación Democrática</h4>
                                <p className="text-gray-700">Los ciudadanos votan usando sus Civic Coins. El consenso determina qué proyectos se financian y en qué proporción.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;