import React, { useState } from 'react';

const Waitlist = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple handling, in production connect to backend
        alert(`Gracias por unirte, ${email}. Te contactaremos pronto.`);
        setEmail('');
    };

    return (
        <section id="contact" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 fade-in">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                    Únete a la comunidad
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    Deja tu email para recibir novedades y ser parte del lanzamiento.
                </p>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Tu email"
                        className="input-field mb-4"
                        required
                    />
                    <button
                        type="submit"
                        className="btn-primary w-full"
                    >
                        Quiero ser parte
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Waitlist;