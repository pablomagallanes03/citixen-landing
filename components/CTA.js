import React from 'react';

const CTA = () => {
    return (
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-32 px-4 sm:px-6 lg:px-8 fade-in relative overflow-hidden">
            {/* Elementos decorativos */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 opacity-10 rounded-full blur-3xl -ml-48 -mb-48"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                    Sé parte del movimiento
                </h2>
                <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-2xl mx-auto">
                    Únete a la comunidad y ayuda a llevar Citixen a tu ciudad. Juntos, transformaremos cómo se asignan los recursos públicos.
                </p>
                <button className="btn-primary px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                    Unirme a la comunidad
                </button>
            </div>
        </section>
    );
};

export default CTA;