import React from 'react';

const CTA = () => {
    return (
        <section className="bg-primary py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                    Sé parte del cambio
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                    Únete a la revolución de la participación ciudadana.
                </p>
                <button className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300">
                    Unirme ahora
                </button>
            </div>
        </section>
    );
};

export default CTA;