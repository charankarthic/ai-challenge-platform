import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { getGames, getProgress } from '@/api/games'
import { GameCard } from './GameCard'
import { Progress } from './ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

export function Dashboard() {
  const [games, setGames] = useState([])
  const [progress, setProgress] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [gamesData, progressData] = await Promise.all([
          getGames(),
          getProgress()
        ])
        setGames(gamesData.games)
        setProgress(progressData.progress)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="container mx-auto p-6">
      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Games</TabsTrigger>
          <TabsTrigger value="progress">My Progress</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {games.map((game) => (
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
        </TabsContent>
        <TabsContent value="progress">
          <div className="space-y-6 mt-6">
            {progress.map((item) => {
              const game = games.find(g => g._id === item.gameId)
              return (
                <div key={item.gameId} className="bg-card p-4 rounded-lg">
                  <h3 className="font-semibold">{game?.title}</h3>
                  <Progress value={item.completed} className="mt-2" />
                  <p className="text-sm text-muted-foreground mt-2">
                    Score: {item.score}
                  </p>
                </div>
              )
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}