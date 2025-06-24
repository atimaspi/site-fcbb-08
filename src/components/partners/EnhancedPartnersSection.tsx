
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';
import { Star, Award, Trophy, Handshake } from 'lucide-react';

const EnhancedPartnersSection = () => {
  const partnersByCategory = {
    platinum: {
      title: "Parceiros Platina",
      icon: Trophy,
      color: "bg-gradient-to-r from-gray-300 to-gray-500",
      level: "platinum",
      partners: [
        {
          name: "FIBA",
          logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=200&h=100&fit=crop",
          category: "Parceiro Oficial Internacional",
          level: "platinum"
        },
        {
          name: "Governo de Cabo Verde",
          logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=200&h=100&fit=crop",
          category: "Parceiro Institucional Principal",
          level: "platinum"
        }
      ]
    },
    gold: {
      title: "Parceiros Ouro",
      icon: Award,
      color: "bg-gradient-to-r from-yellow-400 to-yellow-600",
      level: "gold",
      partners: [
        {
          name: "TCL",
          logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=200&h=100&fit=crop",
          category: "Parceiro Tecnológico",
          level: "gold"
        },
        {
          name: "Cabo Verde Airlines",
          logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=200&h=100&fit=crop",
          category: "Parceiro de Mobilidade",
          level: "gold"
        },
        {
          name: "Banco Interatlântico",
          logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=200&h=100&fit=crop",
          category: "Parceiro Financeiro",
          level: "gold"
        }
      ]
    },
    silver: {
      title: "Parceiros Prata",
      icon: Star,
      color: "bg-gradient-to-r from-gray-400 to-gray-600",
      level: "silver",
      partners: [
        {
          name: "Molten",
          logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=200&h=100&fit=crop",
          category: "Equipamento Oficial",
          level: "silver"
        },
        {
          name: "Spalding",
          logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=200&h=100&fit=crop",
          category: "Material Desportivo",
          level: "silver"
        },
        {
          name: "Smart Cabo Verde",
          logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=200&h=100&fit=crop",
          category: "Telecomunicações",
          level: "silver"
        }
      ]
    },
    bronze: {
      title: "Parceiros Bronze",
      icon: Handshake,
      color: "bg-gradient-to-r from-orange-400 to-orange-600",
      level: "bronze",
      partners: [
        {
          name: "CV Multimédia",
          logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=200&h=100&fit=crop",
          category: "Média Partner",
          level: "bronze"
        },
        {
          name: "Restaurante Sodade",
          logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=200&h=100&fit=crop",
          category: "Hospitalidade",
          level: "bronze"
        }
      ]
    }
  };

  return (
    <section className="py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="cv-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display bg-gradient-to-r from-cv-yellow to-white bg-clip-text text-transparent">
            NOSSOS PARCEIROS
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Organizações que apoiam e promovem o desenvolvimento do basquetebol cabo-verdiano
          </p>
        </motion.div>

        <div className="space-y-10">
          {Object.entries(partnersByCategory).map(([key, category], categoryIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${category.color} text-white shadow-lg`}>
                  <category.icon className="w-4 h-4" />
                  <h3 className="text-sm font-bold">{category.title}</h3>
                </div>
              </div>

              <div className={`grid gap-4 ${
                category.level === 'platinum' ? 'grid-cols-2 md:grid-cols-2 max-w-2xl mx-auto' :
                category.level === 'gold' ? 'grid-cols-3 md:grid-cols-3 max-w-3xl mx-auto' :
                'grid-cols-4 md:grid-cols-6 lg:grid-cols-8'
              }`}>
                {category.partners.map((partner, index) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="group"
                  >
                    <Card className={`bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group-hover:shadow-lg ${
                      category.level === 'platinum' ? 'h-24 p-4' : 
                      category.level === 'gold' ? 'h-20 p-3' : 'h-16 p-2'
                    }`}>
                      <CardContent className="p-0 h-full flex flex-col items-center justify-center">
                        <div className="mb-1 transform group-hover:scale-110 transition-transform duration-300">
                          <img 
                            src={partner.logo} 
                            alt={partner.name}
                            className={`object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300 ${
                              category.level === 'platinum' ? 'w-full h-12' : 
                              category.level === 'gold' ? 'w-full h-10' : 'w-full h-8'
                            }`}
                          />
                        </div>
                        {category.level === 'platinum' && (
                          <>
                            <h4 className="font-semibold text-white text-xs mb-1 group-hover:text-cv-yellow transition-colors text-center">
                              {partner.name}
                            </h4>
                            <Badge className="bg-cv-blue/20 text-cv-yellow border-cv-yellow/30 text-xs px-1 py-0">
                              {partner.category}
                            </Badge>
                          </>
                        )}
                        {category.level === 'gold' && (
                          <h4 className="font-medium text-white text-xs group-hover:text-cv-yellow transition-colors text-center">
                            {partner.name}
                          </h4>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action for Partnership - Reduzido */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-cv-blue to-cv-red rounded-xl p-6 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-3">Seja Nosso Parceiro</h3>
            <p className="text-base mb-4 text-gray-100">
              Junte-se a nós no desenvolvimento do basquetebol cabo-verdiano
            </p>
            <button className="bg-cv-yellow text-cv-blue px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
              Contactar-nos
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedPartnersSection;
