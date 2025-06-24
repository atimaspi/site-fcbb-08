
import PageLayout from './PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Eye, User } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useRealFCBBData } from '@/hooks/useRealFCBBData';

const NoticiasPage = () => {
  const { news, loading, error } = useRealFCBBData();

  const getCategoryColor = (category: string) => {
    switch (category?.toLowerCase()) {
      case 'competições':
        return 'bg-cv-blue text-white';
      case 'seleções':
        return 'bg-cv-red text-white';
      case 'formação':
        return 'bg-cv-yellow text-cv-blue';
      case 'clubes':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  if (loading) {
    return (
      <PageLayout title="Notícias">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="fcbb-skeleton h-96 rounded-lg"></div>
          ))}
        </div>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout title="Notícias" description="Erro ao carregar notícias">
        <div className="text-center text-red-600 py-8">
          <p>Erro ao carregar notícias: {error}</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout 
      title="Notícias" 
      description="Acompanhe as últimas novidades do basquetebol cabo-verdiano"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {news.map((noticia) => (
          <Card key={noticia.id} className="hover:shadow-lg transition-shadow">
            {noticia.image_url && (
              <div className="aspect-video overflow-hidden rounded-t-lg relative">
                <img 
                  src={noticia.image_url} 
                  alt={noticia.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                {noticia.featured && (
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-cv-red text-white text-xs">
                      Destaque
                    </Badge>
                  </div>
                )}
              </div>
            )}
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge className={`${getCategoryColor(noticia.category)} text-xs`}>
                  {noticia.category}
                </Badge>
                <div className="flex items-center text-xs text-gray-500">
                  <Calendar className="w-3 h-3 mr-1" />
                  {format(new Date(noticia.created_at), 'dd MMM, yyyy', { locale: ptBR })}
                </div>
              </div>
              
              <h3 className="text-base font-semibold mb-2 text-gray-900 line-clamp-2">
                {noticia.title}
              </h3>
              
              {noticia.excerpt && (
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  {noticia.excerpt}
                </p>
              )}
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-xs text-gray-500">
                  <User className="w-3 h-3 mr-1" />
                  {noticia.author}
                </div>
                <div className="flex items-center gap-3">
                  <button className="text-cv-blue font-medium hover:text-blue-700 transition-colors text-sm">
                    Ler mais
                  </button>
                  <div className="flex items-center text-gray-400">
                    <Eye className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {news.length > 9 && (
        <div className="text-center mt-6">
          <button className="bg-cv-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
            Ver mais notícias
          </button>
        </div>
      )}
    </PageLayout>
  );
};

export default NoticiasPage;
