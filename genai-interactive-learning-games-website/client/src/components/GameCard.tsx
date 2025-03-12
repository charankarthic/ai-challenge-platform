import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Play, Brain } from 'lucide-react';
import { AspectRatio } from './ui/aspect-ratio';

export function GameCard({ game }) {
  // Use a fallback image if the game image URL is not available
  const imageUrl = game.imageUrl || '/default-game.jpg';

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="overflow-hidden transition-all hover:shadow-lg backdrop-blur-sm bg-background/95">
        <AspectRatio ratio={16/9}>
          <img
            src={imageUrl}
            alt={game.title}
            className="object-cover w-full h-full rounded-t-lg"
          />
        </AspectRatio>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl">{game.title}</CardTitle>
            <Badge variant="secondary">{game.difficulty}</Badge>
          </div>
          <CardDescription>{game.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <Badge variant="outline" className="flex items-center gap-1">
              <Brain className="w-4 h-4" />
              {game.category}
            </Badge>
            <Button className="gap-2 hover:scale-105 transition-transform">
              <Play className="w-4 h-4" />
              Start Game
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}