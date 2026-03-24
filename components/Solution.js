import React from 'react';

const Solution = () => {
    return (
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                    Esto cambia con Citixen
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="text-center">
                        <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">1</div>
                        <h3 className="text-xl font-semibold mb-2">Pagas tus impuestos</h3>
                        <p className="text-gray-600">Declara o paga tus impuestos de forma habitual.</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">2</div>
                        <h3 className="text-xl font-semibold mb-2">Recibes civic coins</h3>
                        <p className="text-gray-600">Obtén tokens proporcionales a tus contribuciones.</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">3</div>
                        <h3 className="text-xl font-semibold mb-2">Eliges qué proyectos apoyar</h3>
                        <p className="text-gray-600">Asigna tus tokens a proyectos sociales en tu ciudad.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;