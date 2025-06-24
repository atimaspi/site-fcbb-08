
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import DynamicBannerCarousel from "@/components/hero/DynamicBannerCarousel";
import RealFCBBStats from "@/components/RealFCBBStats";
import FibaStyleLiveResults from "@/components/FibaStyleLiveResults";
import RealNewsSection from "@/components/RealNewsSection";
import FPBStylePartnersSection from "@/components/partners/FPBStylePartnersSection";
import RealClubsSection from "@/components/RealClubsSection";
import RealPlayersSection from "@/components/RealPlayersSection";
import CompetitionsSection from "@/components/CompetitionsSection";
import FibaStyleHeader from "@/components/header/FibaStyleHeader";
import Footer from "@/components/Footer";
import { useTranslation } from "@/contexts/InternationalizationContext";

const Index = () => {
  const { t } = useTranslation();

  useEffect(() => {
    console.log("Index page loaded - FCBB website initialized with real data");
    
    // Add smooth scroll behavior to the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>FCBB - Federação Cabo-verdiana de Basquetebol | Site Oficial</title>
        <meta 
          name="description" 
          content="Website oficial da Federação Cabo-verdiana de Basquetebol. Acompanhe as últimas notícias, resultados, classificações e informações sobre o basquetebol em Cabo Verde." 
        />
        <meta 
          name="keywords" 
          content="basquetebol, Cabo Verde, FCBB, federação, desporto, competições, seleções nacionais, Liga Nacional, Taça de Cabo Verde" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Federação Cabo-verdiana de Basquetebol" />
        <link rel="canonical" href="https://fcbb.cv" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="FCBB - Federação Cabo-verdiana de Basquetebol" />
        <meta property="og:description" content="Website oficial da Federação Cabo-verdiana de Basquetebol. Acompanhe as últimas notícias, resultados e competições." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fcbb.cv" />
        <meta property="og:image" content="https://fcbb.cv/lovable-uploads/8c0e50b0-b06a-42cf-b3fc-9a08063308b3.png" />
        <meta property="og:image:alt" content="Logótipo da Federação Cabo-verdiana de Basquetebol" />
        <meta property="og:locale" content="pt_CV" />
        <meta property="og:site_name" content="FCBB" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FCBB - Federação Cabo-verdiana de Basquetebol" />
        <meta name="twitter:description" content="Website oficial da Federação Cabo-verdiana de Basquetebol." />
        <meta name="twitter:image" content="https://fcbb.cv/lovable-uploads/8c0e50b0-b06a-42cf-b3fc-9a08063308b3.png" />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#003893" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="FCBB" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <FibaStyleHeader />
        
        <main role="main">
          {/* Skip to content link for accessibility */}
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cv-blue text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-white"
          >
            Saltar para o conteúdo principal
          </a>
          
          <div id="main-content" tabIndex={-1}>
            {/* Dynamic Banner Carousel */}
            <DynamicBannerCarousel />

            {/* Live Results Section */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <FibaStyleLiveResults />
            </motion.section>

            {/* Real FCBB Stats Section */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <RealFCBBStats />
            </motion.section>

            {/* Real News Section */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <RealNewsSection />
            </motion.section>

            {/* Real Players Section */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <RealPlayersSection />
            </motion.section>

            {/* Real Clubs Section */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <RealClubsSection />
            </motion.section>

            {/* Competitions Section */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <CompetitionsSection />
            </motion.section>

            {/* Partners Section */}
            <FPBStylePartnersSection />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
