import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkinSearch from "@/components/SkinSearch";
import Benefits from "@/components/Benefits";
import ScienceResults from "@/components/ScienceResults";
import ProductCard from "@/components/ProductCard";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SkinSearch />
        <Benefits />
        <ScienceResults />
        <ProductCard />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
