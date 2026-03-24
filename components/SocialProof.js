import React from 'react';

const SocialProof = () => {
    return (
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <div className="mb-8 flex justify-center">
                    <img src="/logo4.svg" alt="Icon" className="h-16 w-16" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                    En etapa inicial
                </h2>
                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Estamos construyendo la primera versión de Citixen y formando una comunidad inicial de ciudadanos, organizaciones y actores públicos interesados en este nuevo modelo.
                </p>
            </div>
        </section>
    );
};

export default SocialProof;