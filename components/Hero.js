import React from 'react';

const Hero = () => {
    return (
        <section className="hero-bg relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 fade-in">
            <span className="bg-blur" style={{ width: '280px', height: '280px', left: '-80px', top: '30px', background: 'rgba(47, 128, 237, 0.18)' }} />
            <span className="bg-blur" style={{ width: '320px', height: '320px', right: '-100px', top: '80px', background: 'rgba(242, 153, 74, 0.15)' }} />
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Decide a dónde van tus impuestos
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                            Citixen permite a los ciudadanos asignar parte de sus impuestos a proyectos sociales reales en su ciudad, de forma transparente y participativa.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="btn-primary">
                                Unirme a la comunidad
                            </button>
                            <button className="btn-secondary">
                                Ver cómo funciona
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <div className="placeholder-mockup w-full max-w-md h-[500px] rounded-3xl shadow-soft flex items-center justify-center">
                            <span className="text-gray-500 text-lg font-medium">App preview</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;