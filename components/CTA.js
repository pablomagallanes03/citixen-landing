import React from 'react';

const CTA = () => {
    return (
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 overflow-hidden">
            {/* Decorative gradient orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-3xl -ml-48 -mb-48"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                    Transforma tu ciudad hoy
                </h2>

                <p className="text-xl sm:text-2xl text-blue-50 mb-12 leading-relaxed max-w-2xl mx-auto">
                    Únete al movimiento que está redefiniendo cómo funcionan los gobiernos. Empieza con tu comunidad. Escala globalmente.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="btn-primary px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all">
                        Comenzar ahora
                    </button>
                    <button className="px-10 py-4 text-lg font-semibold border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-700 transition-all">
                        Contactar a ventas
                    </button>
                </div>

                <p className="text-blue-100 text-sm mt-10">
                    Para gobiernos • Para inversores • Para ciudadanía activa
                </p>
            </div>
        </section>
    );
};

export default CTA;