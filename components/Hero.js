import React from 'react';

const Hero = () => {
    return (
        <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8 fade-in">
            {/* Gradient background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100 to-transparent rounded-full blur-3xl opacity-30"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-100 to-transparent rounded-full blur-3xl opacity-20"></div>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Contenido izquierdo */}
                    <div className="flex flex-col justify-center">
                        <div className="inline-flex items-center gap-3 mb-6 bg-blue-50 rounded-full px-4 py-2 w-fit">
                            <span className="text-sm font-semibold text-blue-700">🚀 Govtech Premium</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
                            Transforma la participación ciudadana
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed max-w-xl">
                            Citixen democratiza la asignación presupuestaria permitiendo a los ciudadanos decidir directamente dónde van sus impuestos, con transparencia y verificabilidad total.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <button className="btn-primary">
                                Comenzar ahora
                            </button>
                            <button className="btn-secondary">
                                Solicitar demo
                            </button>
                        </div>

                        <div className="flex gap-12 pt-8 border-t border-gray-200">
                            <div>
                                <div className="text-3xl font-bold text-gray-900">50+</div>
                                <p className="text-sm text-gray-600 mt-1">Municipios interesados</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-gray-900">$2.5M</div>
                                <p className="text-sm text-gray-600 mt-1">Presupuesto identificado</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-gray-900">Trust</div>
                                <p className="text-sm text-gray-600 mt-1">Plataforma verificada</p>
                            </div>
                        </div>
                    </div>

                    {/* Imagen del mockup */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-orange-200 rounded-[40px] blur-2xl opacity-30"></div>
                            <img
                                src="/pictures/citixen-app-mockup.png"
                                alt="Citixen App"
                                className="relative w-full max-w-md rounded-[32px] shadow-2xl border-8 border-white"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;