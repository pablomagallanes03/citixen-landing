import React from 'react';

const SocialProof = () => {
    return (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 via-white to-orange-50">
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl opacity-20 -z-10"></div>

            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-block mb-8 px-4 py-2 bg-indigo-100 rounded-full">
                    <span className="text-sm font-semibold text-indigo-700">Etapa de Construcción</span>
                </div>

                <h2 className="mb-8">
                    Eres de los primeros en este movimiento
                </h2>

                <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-2xl mx-auto">
                    Estamos armando la primera versión de Citixen con visionarios como tú. Ciudadanos, gobiernos innovadores y organizaciones sociales que creen que la democracia participativa es el futuro.
                </p>

                {/* Key message */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white shadow-xl mb-12">
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-3">Tu voz configura el futuro</h3>
                            <p className="text-blue-100 text-lg leading-relaxed">
                                No eres un beta tester. Eres co-creador. Tu feedback, experiencias y ideas influirán directamente en las decisiones de producto y dirección de Citixen.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="section-card">
                        <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                        <p className="text-gray-700 font-semibold">Gobiernos en conversaciones</p>
                    </div>
                    <div className="section-card">
                        <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                        <p className="text-gray-700 font-semibold">Ciudadanos registrados</p>
                    </div>
                    <div className="section-card">
                        <div className="text-3xl font-bold text-green-600 mb-2">1.2M</div>
                        <p className="text-gray-700 font-semibold">Potencial de impacto</p>
                    </div>
                </div>

                {/* CTA */}
                <p className="text-gray-600">
                    ¿Quieres ser parte del cambio?
                </p>
            </div>
        </section>
    );
};

export default SocialProof;