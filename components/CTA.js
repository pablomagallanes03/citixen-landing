import React from 'react';

const CTA = () => {
    return (
        <section className="bg-primary py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                    Sé parte desde el inicio
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                    Únete a la comunidad y ayuda a llevar Citixen a tu ciudad.
                </p>
                <button className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300">
                    Unirme a la comunidad
                </button>
            </div>
        </section>
    );
};

export default CTA;