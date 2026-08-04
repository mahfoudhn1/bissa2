"use client"
import AboutSection from "./components/home/about";
import Header from "./components/home/header";
import HeroSection from "./components/home/hero";
import VideoSection from "./components/home/videosec";
import SolutionsSection from "./components/home/solution";
import Footer from "./components/home/footer";
import BissaProducts from "./components/home/products";

export default function Home() {
  return (
    <div className="bg-[#0B1C14]">
      {/* Header fixe en haut */}
      <Header/>
      
      <main className="relative ">
        
        {/* SECTION 1: HERO */}
        {/* L'id "home" pour le premier bouton du header */}
        <section id="home" className="relative min-h-screen">
          <HeroSection />
        </section>

        {/* SECTION 2: ABOUT */}
        {/* Notez : id="about" et non id="#about" */}
        <section id="about" className="relative">
          <AboutSection />
        </section>

        {/* SECTION 3: SOLUTIONS (BissaLab / BissaCycle) */}
        <section id="solutions" className="relative">
          <SolutionsSection />
        </section>        

        {/* SECTION 4: PRODUITS (Tableau des tarifs) */}
        <section id="produits" className="relative">
          <BissaProducts />
        </section>

        {/* SECTION 5: VIDEO / SECTEURS */}
        {/* Si vous voulez que "Secteur" mène ici */}
        <section id="secteurs" className="relative">
          <VideoSection />
        </section>

      </main>

      <Footer/>
    </div>
  );
}