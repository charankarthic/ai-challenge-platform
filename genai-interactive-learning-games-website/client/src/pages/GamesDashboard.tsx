import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getGames } from '@/api/games';
import { GameCard } from '@/components/GameCard';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export function GamesDashboard() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await getGames();
        setGames(response.games);
      } catch (error) {
        console.error('Error fetching games:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchGames();
  }, []);

  const filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(search.toLowerCase()) ||
    game.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <h1 className="text-3xl font-bold">Learning Games</h1>
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search games..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGames.map((game) => (
          <motion.div
            key={game._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <GameCard game={game} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}