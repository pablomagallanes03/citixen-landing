import React from 'react';

const Hero = () => {
    return (
        <>
            <section className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Premium gradient background */}
                <div className="absolute inset-0 -z-10">
                    {/* Main gradient mesh */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-100 via-blue-50 to-transparent rounded-full blur-3xl opacity-40" style={{ filter: 'blur(80px)' }}></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-orange-100 via-orange-50 to-transparent rounded-full blur-3xl opacity-35" style={{ filter: 'blur(80px)' }}></div>
                    <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-gradient-to-bl from-indigo-100 to-transparent rounded-full blur-3xl opacity-25" style={{ filter: 'blur(60px)' }}></div>
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        {/* Contenido izquierdo */}
                        <div className="flex flex-col justify-center order-2 lg:order-1">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full px-4 py-2 w-fit border border-blue-200/50">
                                <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Innovación Govtech</span>
                            </div>

                            {/* Main Headline - More Powerful */}
                            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
                                Ciudadanía <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-orange-500 bg-clip-text text-transparent">Decidida</span>
                            </h1>

                            {/* Subheadline - Clear & Strong */}
                            <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed max-w-2xl font-medium">
                                Convierte impuestos en decisiones. Los ciudadanos asignan directamente el presupuesto público mientras gobiernos garantizan transparencia total.
                            </p>

                            {/* CTA Buttons - More Prominent */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-16">
                                <button className="btn-primary px-10 py-4 text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                                    Comenzar
                                </button>
                                <button className="px-10 py-4 text-lg font-semibold bg-white border-2 border-blue-200 text-blue-700 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-all duration-300">
                                    Solicitar demo
                                </button>
                            </div>

                            {/* Trust line */}
                            <div className="flex gap-8 pt-8 border-t border-gray-200">
                                <div>
                                    <div className="text-4xl font-bold text-blue-600">50+</div>
                                    <p className="text-sm text-gray-600 mt-1.5">Gobiernos en conversaciones</p>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-orange-600">$2.5B</div>
                                    <p className="text-sm text-gray-600 mt-1.5">Presupuesto identificado</p>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-green-600">100%</div>
                                    <p className="text-sm text-gray-600 mt-1.5">Verificable on-chain</p>
                                </div>
                            </div>
                        </div>

                        {/* Mockup Derecha - MAIN PROTAGONIST */}
                        <div className="flex justify-center lg:justify-start order-1 lg:order-2">
                            <div className="relative w-full">
                                {/* Outer glow - Premium shadow */}
                                <div className="absolute -inset-8 bg-gradient-to-br from-blue-300 via-indigo-300 to-orange-200 rounded-[48px] blur-3xl opacity-30 animate-pulse"></div>

                                {/* Inner glow */}
                                <div className="absolute -inset-4 bg-gradient-to-br from-blue-200 to-orange-200 rounded-[44px] blur-2xl opacity-40"></div>

                                {/* Main image */}
                                <img
                                    src="/pictures/citixen-app-mockup.png"
                                    alt="Citixen App - Plataforma de presupuesto participativo"
                                    className="relative w-full max-w-2xl rounded-[40px] shadow-2xl border-8 border-white/90 backdrop-blur-sm transition-transform duration-500 hover:scale-105 hover:shadow-3xl"
                                />

                                {/* Shine effect */}
                                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/40 to-transparent rounded-[40px] pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust & Credibility Line */}
            <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 via-white to-orange-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="text-gray-700 font-medium">Plataforma verificada con tecnología blockchain</span>
                        </div>
                        <p className="text-gray-600 text-sm text-center md:text-right">
                            Aprobada por gobiernos locales y auditorías de transparencia
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;