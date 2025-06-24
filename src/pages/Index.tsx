
import { useEffect } from "react";
import { motion } from "framer-motion";
import FibaInspiredHero from "@/components/FibaInspiredHero";
import ModernStatsSection from "@/components/stats/ModernStatsSection";
import FibaStyleLiveResults from "@/components/FibaStyleLiveResults";
import FibaNewsSection from "@/components/FibaNewsSection";
import EnhancedPartnersSection from "@/components/partners/EnhancedPartnersSection";
import TeamsSection from "@/components/TeamsSection";
import FibaStyleHeader from "@/components/header/FibaStyleHeader";
import Footer from "@/components/Footer";
import { useTranslation } from "@/contexts/InternationalizationContext";
import SEO from "@/components/SEO";

const Index = () => {
  const { t } = useTranslation();

  useEffect(() => {
    console.log("Index page loaded - FCBB website initialized");
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="FCBB - Federação Cabo-verdiana de Basquetebol"
        description="Website oficial da Federação Cabo-verdiana de Basquetebol. Acompanhe as últimas notícias, resultados, classificações e informações sobre o basquetebol em Cabo Verde."
        keywords="basquetebol, Cabo Verde, FCBB, federação, desporto, competições, seleções nacionais"
      />
      
      <FibaStyleHeader />
      
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <FibaInspiredHero />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FibaStyleLiveResults />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ModernStatsSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FibaNewsSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <TeamsSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <EnhancedPartnersSection />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
