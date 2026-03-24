import Head from 'next/head';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import HowItWorks from '../components/HowItWorks';
import Impact from '../components/Impact';
import Product from '../components/Product';
import CTA from '../components/CTA';
import SocialProof from '../components/SocialProof';
import Waitlist from '../components/Waitlist';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Citixen - Decide a dónde van tus impuestos</title>
                <meta name="description" content="Citixen transforma impuestos en decisiones ciudadanas. Apoya proyectos reales en tu ciudad con transparencia y participación." />
                <meta name="keywords" content="impuestos, ciudadanos, participación, transparencia, proyectos sociales, GovTech" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Hero />
                <Problem />
                <Solution />
                <HowItWorks />
                <Impact />
                <Product />
                <CTA />
                <SocialProof />
                <Waitlist />
            </main>
            <Footer />
        </div>
    );
}