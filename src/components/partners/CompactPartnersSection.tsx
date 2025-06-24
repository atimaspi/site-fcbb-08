
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';
import { Star, Award, Trophy, Handshake } from 'lucide-react';

const CompactPartnersSection = () => {
  const partnersByCategory = {
    platinum: {
      title: "Parceiros Platina",
      icon: Trophy,
      color: "bg-gradient-to-r from-gray-300 to-gray-500",
      partners: [
        { name: "FIBA", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=200&h=100&fit=crop" },
        { name: "Governo de Cabo Verde", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=200&h=100&fit=crop" }
      ]
    },
    gold: {
      title: "Parceiros Ouro",
      icon: Award,
      color: "bg-gradient-to-r from-yellow-400 to-yellow-600",
      partners: [
        { name: "TCL", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=200&h=100&fit=crop" },
        { name: "Cabo Verde Airlines", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=200&h=100&fit=crop" },
        { name: "Banco Interatlântico", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=200&h=100&fit=crop" }
      ]
    },
    silver: {
      title: "Parceiros Prata",
      icon: Star,
      color: "bg-gradient-to-r from-gray-400 to-gray-600",
      partners: [
        { name: "Molten", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=200&h=100&fit=crop" },
        { name: "Spalding", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=200&h=100&fit=crop" },
        { name: "Smart Cabo Verde", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=200&h=100&fit=crop" }
      ]
    }
  };

  return (
    <section className="py-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="cv-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="text-lg md:text-xl font-bold mb-1 font-display bg-gradient-to-r from-cv-yellow to-white bg-clip-text text-transparent">
            NOSSOS PARCEIROS
          </h2>
          <p className="text-xs text-gray-300 max-w-lg mx-auto">
            Organizações que apoiam o desenvolvimento do basquetebol cabo-verdiano
          </p>
        </motion.div>

        <div className="space-y-3">
          {Object.entries(partnersByCategory).map(([key, category], categoryIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-2">
                <div className={`flex items-center space-x-1 px-2 py-0.5 rounded-full ${category.color} text-white shadow-lg`}>
                  <category.icon className="w-2.5 h-2.5" />
                  <h3 className="text-xs font-bold">{category.title}</h3>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="grid gap-1.5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-3xl">
                  {category.partners.map((partner, index) => (
                    <motion.div
                      key={partner.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="group"
                    >
                      <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 h-12 p-2">
                        <CardContent className="p-0 h-full flex items-center justify-center">
                          <img 
                            src={partner.logo} 
                            alt={partner.name}
                            className="max-h-8 max-w-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                          />
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action compacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-4"
        >
          <div className="bg-gradient-to-r from-cv-blue to-cv-red rounded-lg p-2 max-w-md mx-auto">
            <h3 className="text-sm font-bold mb-1">Seja Nosso Parceiro</h3>
            <p className="text-xs mb-1 text-gray-100">
              Junte-se ao desenvolvimento do basquetebol cabo-verdiano
            </p>
            <button className="bg-cv-yellow text-cv-blue px-2 py-0.5 rounded font-bold hover:bg-yellow-400 transition-colors text-xs">
              Contactar-nos
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompactPartnersSection;
