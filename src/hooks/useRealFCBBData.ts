
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface FCBBStats {
  stat_key: string;
  stat_name: string;
  stat_value: string;
  description: string;
  icon_name: string;
}

interface Club {
  id: string;
  name: string;
  island: string;
  founded_year: number;
  logo_url: string;
  description: string;
  contact_email: string;
  website: string;
  status: string;
}

interface Player {
  id: string;
  first_name: string;
  last_name: string;
  position: string;
  jersey_number: number;
  age: number;
  nationality: string;
  club: string;
  height_cm: number;
  weight_kg: number;
  status: string;
}

interface Competition {
  id: string;
  name: string;
  type: string;
  season: string;
  status: string;
  start_date: string;
  end_date: string;
  description: string;
}

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  published: boolean;
  featured: boolean;
  image_url: string;
  created_at: string;
}

interface FCBBEvent {
  id: string;
  title: string;
  description: string;
  event_date: string;
  end_date: string;
  location: string;
  type: string;
  organizer: string;
}

export const useRealFCBBData = () => {
  const [stats, setStats] = useState<FCBBStats[]>([]);
  const [clubs, setClubs] = useState<Club[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);
  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [events, setEvents] = useState<FCBBEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        
        // Fetch stats
        const { data: statsData, error: statsError } = await supabase
          .from('basketball_stats')
          .select('*')
          .eq('active', true)
          .order('order_index');

        if (statsError) throw statsError;

        // Fetch clubs
        const { data: clubsData, error: clubsError } = await supabase
          .from('clubs')
          .select('*')
          .eq('status', 'active')
          .order('name');

        if (clubsError) throw clubsError;

        // Fetch players
        const { data: playersData, error: playersError } = await supabase
          .from('players')
          .select('*')
          .eq('status', 'active')
          .order('last_name');

        if (playersError) throw playersError;

        // Fetch competitions
        const { data: competitionsData, error: competitionsError } = await supabase
          .from('championships')
          .select('*')
          .order('name');

        if (competitionsError) throw competitionsError;

        // Fetch news
        const { data: newsData, error: newsError } = await supabase
          .from('news')
          .select('*')
          .eq('published', true)
          .order('created_at', { ascending: false })
          .limit(10);

        if (newsError) throw newsError;

        // Fetch events
        const { data: eventsData, error: eventsError } = await supabase
          .from('events')
          .select('*')
          .order('event_date');

        if (eventsError) throw eventsError;

        setStats(statsData || []);
        setClubs(clubsData || []);
        setPlayers(playersData || []);
        setCompetitions(competitionsData || []);
        setNews(newsData || []);
        setEvents(eventsData || []);
        
      } catch (err) {
        console.error('Erro ao carregar dados da FCBB:', err);
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  return {
    stats,
    clubs,
    players,
    competitions,
    news,
    events,
    loading,
    error
  };
};
