
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Calendar, Target, TrendingUp, Award } from 'lucide-react';
import { useBackendData } from '@/hooks/useBackendData';

const ModernStatsSection = () => {
  const { teams, clubs, competitions, games } = useBackendData();

  const stats = [
    {
      icon: Users,
      label: "Equipas Registadas",
      value: teams?.length || 16,
      suffix: "",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Trophy,
      label: "Competições Ativas",
      value: competitions?.length || 5,
      suffix: "",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Target,
      label: "Jogadores Federados",
      value: 240,
      suffix: "+",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Calendar,
      label: "Jogos Realizados",
      value: games?.length || 156,
      suffix: "",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Award,
      label: "Clubes Afiliados",
      value: clubs?.length || 24,
      suffix: "",
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: TrendingUp,
      label: "Crescimento Anual",
      value: 15,
      suffix: "%",
      color: "from-teal-400 to-teal-600",
      bgColor: "bg-teal-50"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/40">
      <div className="cv-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-display">
            Basquetebol em <span className="text-cv-blue">Números</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            O crescimento e desenvolvimento do basquetebol cabo-verdiano refletido em estatísticas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group perspective-1000"
            >
              <Card className={`${stat.bgColor} border-0 shadow-lg group-hover:shadow-2xl transition-all duration-500 overflow-hidden relative`}>
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className={`text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 2, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      {stat.value}{stat.suffix}
                    </motion.span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                    {stat.label}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievement Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-cv-blue to-cv-red rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Principais Conquistas 2024</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Trophy className="w-8 h-8 mx-auto mb-2 text-cv-yellow" />
              <div className="font-bold">Liga Nacional</div>
              <div className="text-sm text-gray-200">16 equipas participantes</div>
            </div>
            <div>
              <Award className="w-8 h-8 mx-auto mb-2 text-cv-yellow" />
              <div className="font-bold">AfroBasket</div>
              <div className="text-sm text-gray-200">Qualificação histórica</div>
            </div>
            <div>
              <Users className="w-8 h-8 mx-auto mb-2 text-cv-yellow" />
              <div className="font-bold">Desenvolvimento</div>
              <div className="text-sm text-gray-200">+15% novos federados</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernStatsSection;
