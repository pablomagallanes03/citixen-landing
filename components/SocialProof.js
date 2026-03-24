import React from 'react';

const SocialProof = () => {
    return (
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
                    Comunidad en crecimiento
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div>
                        <div className="text-4xl font-bold text-primary mb-2">500+</div>
                        <p className="text-gray-600">Personas interesadas</p>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-primary mb-2">20+</div>
                        <p className="text-gray-600">Proyectos creados</p>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-primary mb-2">5</div>
                        <p className="text-gray-600">Ciudades en desarrollo</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;