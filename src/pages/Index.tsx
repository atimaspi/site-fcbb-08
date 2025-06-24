
import FCBBLayout from '@/components/layout/FCBBLayout';
import DynamicHeroSlider from '@/components/hero/DynamicHeroSlider';
import FibaVideoGrid from '@/components/FibaVideoGrid';
import FibaNewsSection from '@/components/FibaNewsSection';
import ModernStatsSection from '@/components/stats/ModernStatsSection';
import GameResults from '@/components/GameResults';
import GameCalendar from '@/components/GameCalendar';
import EnhancedPartnersSection from '@/components/partners/EnhancedPartnersSection';
import GaleriaSection from '@/components/sections/GaleriaSection';
import ContactoSection from '@/components/sections/ContactoSection';
import { useSupabaseData } from '@/hooks/useSupabaseData';

const Index = () => {
  const { 
    newsData, 
    clubsData, 
    gamesData, 
    competitionsData,
    teamsData,
    statsData,
    playersData,
    refereesData,
    eventsData,
    federationsData,
    regionalAssociationsData,
    partnersData,
    heroSlidesData,
    galleryData,
    galleryImagesData,
    siteSettingsData,
    isLoading 
  } = useSupabaseData();

  console.log('Index page - Enhanced FIBA Design Layout:', {
    news: newsData?.length || 0,
    clubs: clubsData?.length || 0,
    games: gamesData?.length || 0,
    competitions: competitionsData?.length || 0,
    loading: isLoading
  });

  return (
    <FCBBLayout 
      title="FCBB - Federação Cabo-verdiana de Basquetebol" 
      description="Site oficial da Federação Cabo-verdiana de Basquetebol. Acompanhe as últimas notícias, resultados, classificações e competições do basquetebol cabo-verdiano."
      keywords="FCBB, basquetebol, Cabo Verde, federação, liga nacional, competições, resultados"
    >
      {/* Hero Section com Slider Dinâmico */}
      <DynamicHeroSlider />

      {/* Video Grid Section */}
      <FibaVideoGrid />

      {/* News Section */}
      <FibaNewsSection />

      {/* Statistics Section Moderna */}
      <ModernStatsSection />

      {/* Game Results */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50/40 py-16">
        <div className="cv-container">
          <GameResults />
        </div>
      </section>

      {/* Game Calendar */}
      <section className="bg-white py-16">
        <div className="cv-container">
          <GameCalendar />
        </div>
      </section>

      {/* Enhanced Partners Section */}
      <EnhancedPartnersSection />

      {/* Gallery Section */}
      <section className="bg-gradient-to-br from-gray-50 to-slate-100 py-16">
        <GaleriaSection />
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-cv-blue to-cv-red py-16 text-white">
        <ContactoSection />
      </section>
    </FCBBLayout>
  );
};

export default Index;
