
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Users, Trophy, Clock } from 'lucide-react';
import { useCompetitionsData } from '@/hooks/useCompetitionsData';

const CompetitionsSection = () => {
  const { competitions, loading, error } = useCompetitionsData();

  if (loading) {
    return (
      <section className="py-20 bg-white" aria-label="Carregando competições">
        <div className="cv-container">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cv-blue mx-auto"></div>
            <p className="mt-4 text-gray-600">Carregando competições...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-white" aria-label="Erro ao carregar competições">
        <div className="cv-container">
          <div className="text-center text-red-600">
            <p>Erro ao carregar competições: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'ativa':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'programada':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'finalizada':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section 
      id="competicoes" 
      className="py-20 bg-white"
      aria-labelledby="competicoes-heading"
    >
      <div className="cv-container">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            id="competicoes-heading"
            className="text-4xl md:text-5xl font-bold text-cv-blue mb-6 font-display"
          >
            Competições
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Acompanhe as principais competições do basquetebol cabo-verdiano
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {competitions.map((competition, index) => (
            <motion.article
              key={competition.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
            >
              <header className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-cv-blue mb-2">
                    {competition.name}
                  </h3>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(competition.status)}`}>
                    <Clock className="w-3 h-3 mr-1" aria-hidden="true" />
                    {competition.status}
                  </span>
                </div>
              </header>

              <div className="space-y-4 mb-6">
                <p className="text-gray-600 leading-relaxed">
                  {competition.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-cv-blue" aria-hidden="true" />
                    <span className="text-sm">{competition.participants} equipas</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-cv-blue" aria-hidden="true" />
                    <span className="text-sm">{competition.season}</span>
                  </div>
                </div>

                <div className="bg-cv-yellow/10 rounded-lg p-4">
                  <div className="flex items-center text-cv-blue mb-2">
                    <Trophy className="w-5 h-5 mr-2" aria-hidden="true" />
                    <span className="font-semibold">Atual Campeão</span>
                  </div>
                  <p className="text-gray-700 font-medium">{competition.currentChampion}</p>
                </div>
              </div>

              <footer>
                <a
                  href={competition.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-cv-blue text-white rounded-lg hover:bg-cv-blue/90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cv-blue focus:ring-offset-2 shadow-lg hover:shadow-xl"
                  aria-label={`Ver mais sobre ${competition.name} (abre numa nova janela)`}
                >
                  <span>Ver Mais</span>
                  <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
                </a>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitionsSection;
