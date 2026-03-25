import React from 'react';

const Product = () => {
    return (
        <section id="features" className="bg-gray-50 py-32 px-4 sm:px-6 lg:px-8 fade-in">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-gray-900 mb-6">
                        Nuestra plataforma
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Diseñada con los estándares más altos de usabilidad, transparencia y seguridad.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="card-item">
                        <div className="flex flex-col">
                            <div className="icon-circle mb-6" style={{ borderRadius: '14px', background: 'linear-gradient(135deg, #2f80ed 0%, #1e5cc7 100%)' }}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Interfaz intuitiva</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Diseñada para que cualquier ciudadano la use fácilmente, sin necesidad de capacitación previa.
                            </p>
                        </div>
                    </div>
                    <div className="card-item">
                        <div className="flex flex-col">
                            <div className="icon-circle mb-6" style={{ borderRadius: '14px', background: 'linear-gradient(135deg, #2f80ed 0%, #1e5cc7 100%)' }}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Proyectos visibles</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Explora todas los proyectos sociales de tu comunidad con información clara y accesible.
                            </p>
                        </div>
                    </div>
                    <div className="card-item">
                        <div className="flex flex-col">
                            <div className="icon-circle mb-6" style={{ borderRadius: '14px', background: 'linear-gradient(135deg, #2f80ed 0%, #1e5cc7 100%)' }}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Civic Coins</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Sistema seguro que vincula claramente impuestos con decisiones participativas ciudadanas.
                            </p>
                        </div>
                    </div>
                    <div className="card-item">
                        <div className="flex flex-col">
                            <div className="icon-circle mb-6" style={{ borderRadius: '14px', background: 'linear-gradient(135deg, #2f80ed 0%, #1e5cc7 100%)' }}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Validación externa</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Proyectos supervisados por gobiernos locales y ejecutados con transparencia total.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;