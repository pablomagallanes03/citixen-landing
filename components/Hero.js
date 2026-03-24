import React from 'react';

const Hero = () => {
    return (
        <section className="hero-bg relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 fade-in">
            <span className="bg-blur" style={{ width: '280px', height: '280px', left: '-80px', top: '30px', background: 'rgba(47, 128, 237, 0.18)' }} />
            <span className="bg-blur" style={{ width: '320px', height: '320px', right: '-100px', top: '80px', background: 'rgba(242, 153, 74, 0.15)' }} />
            <div className="max-w-7xl mx-auto text-center relative z-10">
                <div className="mb-6 flex justify-center">
                    <img src="/logo2.svg" alt="Icon" className="h-20 w-20" />
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
                    Decide a dónde van tus impuestos
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Citixen permite a los ciudadanos asignar parte de sus impuestos a proyectos sociales reales en su ciudad, de forma transparente y participativa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="btn-primary">
                        Unirme a la comunidad
                    </button>
                    <button className="btn-secondary">
                        Ver cómo funciona
                    </button>
                </div>
                <div className="mt-12 flex justify-center">
                    <div className="bg-white rounded-3xl p-3 shadow-soft border border-gray-200 max-w-sm w-full">
                        <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl h-80 flex flex-col justify-center items-center text-center">
                            <div className="w-28 h-28 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">App</div>
                            <p className="mt-4 text-sm text-gray-500 max-w-xs">Interfaz de ejemplo de Citixen para visualizar el flujo de participación ciudadana.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;