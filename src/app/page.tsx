import Footer from "./_components/Footer";
import Header from "./_components/Header"; // <-- Adicionado
import HeroSection from "./_components/HeroSection";
import LocationAndContactSection from "./_components/LocationAndContactSection";
import ServicesAndSalesSection from "./_components/ServicesAndSalesSection";
import TestimonialsSection from "./_components/TestimonialsSection";
import ProductsSection from './_components/ProductsSection';
import TradeInSection from "./_components/TradeInSection";


export default function Home() {
    return (

        <main className="bg-[#030303] min-h-screen">

            <Header />

            <HeroSection />

            <ServicesAndSalesSection />

            <TradeInSection />

            <ProductsSection />

            <TestimonialsSection />

            <LocationAndContactSection />

            <Footer />

        </main>
    );
}