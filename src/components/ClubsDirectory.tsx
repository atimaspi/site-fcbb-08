
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Globe, Users, Search, Loader2, Filter } from 'lucide-react';
import { useState, useMemo } from 'react';
import { useBackendData } from '@/hooks/useBackendData';
import { Link } from 'react-router-dom';

const ClubsDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIsland, setSelectedIsland] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const { clubs, clubsLoading, clubsError } = useBackendData();

  // Memoized filtered clubs to prevent unnecessary re-renders
  const filteredClubs = useMemo(() => {
    if (!clubs) return [];
    
    return clubs.filter(club => {
      const matchesSearch = club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (club.address && club.address.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (club.island && club.island.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesIsland = selectedIsland === 'all' || club.island === selectedIsland;
      const matchesStatus = selectedStatus === 'all' || club.status === selectedStatus;
      
      return matchesSearch && matchesIsland && matchesStatus;
    });
  }, [clubs, searchTerm, selectedIsland, selectedStatus]);

  // Memoized islands list
  const islands = useMemo(() => {
    if (!clubs) return [];
    return [...new Set(clubs.map(club => club.island).filter(Boolean))];
  }, [clubs]);

  if (clubsLoading) {
    return (
      <Card>
        <CardContent className="p-12 text-center">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-cv-blue mb-4" />
          <p className="text-gray-600">Carregando clubes...</p>
        </CardContent>
      </Card>
    );
  }

  if (clubsError) {
    return (
      <Card>
        <CardContent className="p-12 text-center">
          <Users className="mx-auto h-16 w-16 text-gray-400 mb-4" />
          <h3 className="text-lg font-semibold text-gray-600 mb-2">
            Erro ao carregar clubes
          </h3>
          <p className="text-gray-500">
            Não foi possível carregar os dados dos clubes.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Pesquisar clubes por nome, morada ou ilha..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={selectedIsland} onValueChange={setSelectedIsland}>
                <SelectTrigger className="w-full sm:w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filtrar por ilha" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as ilhas</SelectItem>
                  {islands.map((island) => (
                    <SelectItem key={island} value={island}>
                      {island}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Filtrar por status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os status</SelectItem>
                  <SelectItem value="active">Ativos</SelectItem>
                  <SelectItem value="inactive">Inativos</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClubs.map((club) => (
          <Card key={club.id} className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg">
                <div className="flex items-center justify-between">
                  <span>{club.name}</span>
                  {club.status && (
                    <Badge variant={club.status === 'active' ? 'default' : 'secondary'}>
                      {club.status === 'active' ? 'Ativo' : 'Inativo'}
                    </Badge>
                  )}
                </div>
              </CardTitle>
              {(club.address || club.island) && (
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{club.address}{club.address && club.island ? ', ' : ''}{club.island}</span>
                </div>
              )}
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {club.founded_year && (
                  <div className="text-sm">
                    <strong>Fundado:</strong> {club.founded_year}
                  </div>
                )}
                
                {club.description && (
                  <div className="text-sm">
                    <strong>Descrição:</strong> {club.description}
                  </div>
                )}
              </div>

              <div className="space-y-2 pt-4 border-t">
                {club.contact_phone && (
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                    <a href={`tel:${club.contact_phone}`} className="hover:text-cv-blue">
                      {club.contact_phone}
                    </a>
                  </div>
                )}
                {club.contact_email && (
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                    <a 
                      href={`mailto:${club.contact_email}`} 
                      className="break-all hover:text-cv-blue"
                    >
                      {club.contact_email}
                    </a>
                  </div>
                )}
                {club.website && (
                  <div className="flex items-center text-sm text-gray-600">
                    <Globe className="w-4 h-4 mr-2 flex-shrink-0" />
                    <a 
                      href={club.website.startsWith('http') ? club.website : `https://${club.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cv-blue hover:underline break-all"
                    >
                      {club.website}
                    </a>
                  </div>
                )}
              </div>

              <Button 
                variant="outline" 
                className="w-full mt-4"
                asChild
              >
                <Link to={`/clubes/${club.id}`}>
                  Ver Detalhes
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredClubs.length === 0 && !clubsLoading && (
        <Card>
          <CardContent className="p-12 text-center">
            <Users className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">
              Nenhum clube encontrado
            </h3>
            <p className="text-gray-500">
              {searchTerm || selectedIsland !== 'all' || selectedStatus !== 'all' 
                ? 'Tente ajustar os filtros de pesquisa.' 
                : 'Não há clubes registados na base de dados.'}
            </p>
          </CardContent>
        </Card>
      )}

      {islands.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Distribuição por Ilha</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {islands.map((island) => {
                const clubCount = clubs?.filter(club => club.island === island).length || 0;
                return (
                  <button 
                    key={island} 
                    className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    onClick={() => setSelectedIsland(island)}
                  >
                    <div className="text-2xl font-bold text-cv-blue">{clubCount}</div>
                    <div className="text-sm text-gray-600">{island}</div>
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ClubsDirectory;
