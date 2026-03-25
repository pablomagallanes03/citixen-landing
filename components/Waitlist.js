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
        <section id="contact" className="bg-gradient-to-br from-white to-gray-50 py-32 px-4 sm:px-6 lg:px-8 fade-in">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-gray-900 mb-6">
                        Únete a la comunidad
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Se parte del movimiento que está transformando la relación entre ciudadanos e impuestos. Deja tu email para recibir novedades exclusivas del lanzamiento.
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="flex flex-col gap-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="tu@email.com"
                            className="input-field"
                            required
                            disabled={submitted}
                        />
                        <button
                            type="submit"
                            className={`btn-primary px-8 py-3 text-lg font-semibold transition-all ${submitted ? 'bg-green-500' : ''}`}
                            disabled={submitted}
                        >
                            {submitted ? '✓ Confirmado' : 'Ser parte del lanzamiento'}
                        </button>
                    </div>
                </form>
                <p className="text-center text-gray-600 text-sm mt-6">
                    No compartiremos tu email. Transparencia total.
                </p>
            </div>
        </section>
    );
};

export default Waitlist;