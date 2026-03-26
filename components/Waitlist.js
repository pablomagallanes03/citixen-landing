import React, { useState } from 'react';

const Waitlist = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setEmail('');
            setSubmitted(false);
        }, 3000);
    };

    return (
        <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-white">
            {/* Decorative gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50 -z-10"></div>

            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4 px-4 py-2 bg-white rounded-full border border-blue-200">
                        <span className="text-sm font-semibold text-blue-700">Únete a la Comunidad</span>
                    </div>

                    <h2 className="mb-8">
                        Sé de los primeros en transformar tu ciudad
                    </h2>

                    <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                        Deja tu email para recibir acceso anticipado, actualizaciones exclusivas y la oportunidad de influir en el lanzamiento.
                    </p>
                </div>

                {/* Form */}
                <div className="bg-white rounded-2xl section-card shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="tu@email.com"
                                className="input-field w-full text-lg py-4"
                                required
                                disabled={submitted}
                            />
                        </div>
                        <button
                            type="submit"
                            className={`btn-primary w-full py-4 text-lg font-semibold transition-all ${submitted
                                    ? 'bg-green-500 hover:bg-green-600'
                                    : ''
                                }`}
                            disabled={submitted}
                        >
                            {submitted ? '✓ Confirmado - Recuerda revisar tu email' : 'Recibir acceso anticipado'}
                        </button>
                    </form>
                </div>

                {/* Footer message */}
                <div className="text-center mt-8">
                    <p className="text-gray-600 text-sm">
                        Tu privacidad es importante. Nunca compartiremos ni venderemos tu información.
                    </p>
                    <div className="flex justify-center gap-6 mt-6 text-sm text-gray-600">
                        <a href="#" className="hover:text-blue-600 transition">Privacidad</a>
                        <a href="#" className="hover:text-blue-600 transition">Términos</a>
                        <a href="mailto:hola@citixen.com" className="hover:text-blue-600 transition">Contacto</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Waitlist;