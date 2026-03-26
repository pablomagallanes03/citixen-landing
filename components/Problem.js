import React from 'react';

const Problem = () => {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Contenido */}
                    <div>
                        <div className="inline-block mb-4 px-4 py-2 bg-red-50 rounded-full">
                            <span className="text-sm font-semibold text-red-700">El Desafío</span>
                        </div>

                        <h2 className="mb-8">
                            Los gobiernos enfrentan desconexión ciudadana
                        </h2>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-red-100">
                                        <span className="text-red-600 font-bold">1</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Falta de transparencia</h3>
                                    <p className="text-gray-700">Los ciudadanos no ven cómo se asignan sus impuestos, lo que genera desconfianza institucional.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-red-100">
                                        <span className="text-red-600 font-bold">2</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Participación limitada</h3>
                                    <p className="text-gray-700">Las herramientas actuales no permiten que los ciudadanos influyan realmente en decisiones presupuestarias.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-red-100">
                                        <span className="text-red-600 font-bold">3</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Ineficiencia en la asignación</h3>
                                    <p className="text-gray-700">Los presupuestos se asignan sin considerar las prioridades reales de la población.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Estadísticas */}
                    <div className="grid grid-cols-1 gap-6">
                        <div className="section-card">
                            <div className="text-5xl font-bold text-gray-900 mb-2">73%</div>
                            <p className="text-gray-600">de los ciudadanos no sabe cómo se usan sus impuestos</p>
                        </div>
                        <div className="section-card">
                            <div className="text-5xl font-bold text-gray-900 mb-2">41%</div>
                            <p className="text-gray-600">desconfía de las instituciones públicas</p>
                        </div>
                        <div className="section-card">
                            <div className="text-5xl font-bold text-gray-900 mb-2">$800B</div>
                            <p className="text-gray-600">en gastos públicos sin optimizar</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;