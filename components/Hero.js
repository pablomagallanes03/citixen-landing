import React from 'react';

const Hero = () => {
    return (
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <div className="mb-8 flex justify-center">
                    <img src="/logo2.svg" alt="Icon" className="h-20 w-20" />
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
                    Decide a dónde van tus impuestos
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                    Citixen transforma impuestos en decisiones ciudadanas. Apoya proyectos reales en tu ciudad.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                        Unirme
                    </button>
                    <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition duration-300">
                        Ver cómo funciona
                    </button>
                </div>
                <div className="mt-12">
                    <div className="bg-gray-200 rounded-lg p-8 max-w-md mx-auto">
                        <p className="text-gray-500">Mockup de la app</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;