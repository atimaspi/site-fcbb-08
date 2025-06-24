
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
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="cv-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 font-display bg-gradient-to-r from-cv-yellow to-white bg-clip-text text-transparent">
            NOSSOS PARCEIROS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Organizações que apoiam e promovem o desenvolvimento do basquetebol cabo-verdiano, 
            divididas por níveis de parceria e comprometimento
          </p>
        </motion.div>

        <div className="space-y-16">
          {Object.entries(partnersByCategory).map(([key, category], categoryIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-10">
                <div className={`flex items-center space-x-3 px-6 py-3 rounded-full ${category.color} text-white shadow-xl`}>
                  <category.icon className="w-6 h-6" />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
              </div>

              <div className={`grid gap-8 ${
                category.level === 'platinum' ? 'grid-cols-1 md:grid-cols-2' :
                category.level === 'gold' ? 'grid-cols-1 md:grid-cols-3' :
                'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
              }`}>
                {category.partners.map((partner, index) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    className="group perspective-1000"
                  >
                    <Card className={`bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 group-hover:shadow-2xl ${
                      category.level === 'platinum' ? 'h-48' : 'h-40'
                    }`}>
                      <CardContent className="p-6 text-center h-full flex flex-col items-center justify-center">
                        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                          <img 
                            src={partner.logo} 
                            alt={partner.name}
                            className={`object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-500 ${
                              category.level === 'platinum' ? 'w-full h-20' : 'w-full h-16'
                            }`}
                          />
                        </div>
                        <h4 className={`font-bold text-white mb-2 group-hover:text-cv-yellow transition-colors ${
                          category.level === 'platinum' ? 'text-xl' : 'text-lg'
                        }`}>
                          {partner.name}
                        </h4>
                        <Badge className="bg-cv-blue/20 text-cv-yellow border-cv-yellow/30 text-xs">
                          {partner.category}
                        </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action for Partnership */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cv-blue to-cv-red rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Seja Nosso Parceiro</h3>
            <p className="text-lg mb-6 text-gray-100">
              Junte-se a nós no desenvolvimento do basquetebol cabo-verdiano e faça parte desta família
            </p>
            <button className="bg-cv-yellow text-cv-blue px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
              Contactar-nos
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedPartnersSection;
