import React from 'react';

const Hero = () => {
    return (
        <section className="hero-bg relative overflow-hidden py-32 px-4 sm:px-6 lg:px-8 fade-in">
            <span className="bg-blur" style={{ width: '280px', height: '280px', left: '-80px', top: '30px', background: 'rgba(47, 128, 237, 0.15)' }} />
            <span className="bg-blur" style={{ width: '320px', height: '320px', right: '-100px', top: '80px', background: 'rgba(242, 153, 74, 0.12)' }} />
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                            Decide a dónde van tus impuestos
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-2xl leading-relaxed font-medium">
                            Citixen permite a los ciudadanos asignar parte de sus impuestos a proyectos sociales reales en su ciudad, de forma transparente y participativa.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="btn-primary px-8 py-3 text-lg">
                                Unirme a la comunidad
                            </button>
                            <button className="btn-secondary px-8 py-3 text-lg">
                                Ver cómo funciona
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <div className="placeholder-mockup w-full max-w-sm h-[600px] rounded-[40px] flex flex-col items-center justify-start p-4 relative overflow-hidden">
                            <div className="w-full h-full rounded-[36px] bg-gradient-to-b from-blue-50 to-white p-6 flex flex-col gap-6">
                                {/* Header simulado */}
                                <div className="flex justify-between items-center">
                                    <div className="w-16 h-6 bg-gray-900 rounded-full"></div>
                                    <div className="flex gap-2">
                                        <div className="w-4 h-4 rounded-full bg-gray-400"></div>
                                        <div className="w-4 h-4 rounded-full bg-gray-400"></div>
                                    </div>
                                </div>

                                {/* Avatar y nombre */}
                                <div className="flex items-center gap-3 pb-2">
                                    <div className="w-10 h-10 rounded-full bg-blue-300"></div>
                                    <div className="flex flex-col gap-1">
                                        <div className="w-24 h-3 bg-gray-700 rounded"></div>
                                        <div className="w-16 h-2 bg-gray-300 rounded"></div>
                                    </div>
                                </div>

                                {/* Buscador */}
                                <div className="w-full h-10 rounded-lg bg-white border border-gray-300"></div>

                                {/* Proyecto simulado */}
                                <div className="w-full bg-white rounded-xl overflow-hidden border border-gray-200">
                                    <div className="w-full h-24 bg-gradient-to-br from-green-300 to-green-400"></div>
                                    <div className="p-3 space-y-2">
                                        <div className="w-20 h-2 bg-gray-300 rounded"></div>
                                        <div className="w-32 h-3 bg-gray-700 rounded"></div>
                                        <div className="w-full h-2 bg-blue-200 rounded-full overflow-hidden">
                                            <div className="w-6/12 h-full bg-blue-500"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Botón simulado */}
                                <div className="w-full h-10 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg mt-auto"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;