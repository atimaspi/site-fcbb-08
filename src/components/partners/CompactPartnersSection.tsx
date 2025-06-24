
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
    <section className="py-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="cv-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 font-display bg-gradient-to-r from-cv-yellow to-white bg-clip-text text-transparent">
            NOSSOS PARCEIROS
          </h2>
          <p className="text-base text-gray-300 max-w-xl mx-auto">
            Organizações que apoiam o desenvolvimento do basquetebol cabo-verdiano
          </p>
        </motion.div>

        <div className="space-y-6">
          {Object.entries(partnersByCategory).map(([key, category], categoryIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-4">
                <div className={`flex items-center space-x-2 px-3 py-1 rounded-full ${category.color} text-white shadow-lg`}>
                  <category.icon className="w-3 h-3" />
                  <h3 className="text-xs font-bold">{category.title}</h3>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 max-w-4xl">
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
                            className="max-h-6 max-w-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
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
          className="text-center mt-8"
        >
          <div className="bg-gradient-to-r from-cv-blue to-cv-red rounded-lg p-4 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold mb-2">Seja Nosso Parceiro</h3>
            <p className="text-sm mb-3 text-gray-100">
              Junte-se ao desenvolvimento do basquetebol cabo-verdiano
            </p>
            <button className="bg-cv-yellow text-cv-blue px-4 py-2 rounded-lg font-bold hover:bg-yellow-400 transition-colors text-sm">
              Contactar-nos
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompactPartnersSection;
