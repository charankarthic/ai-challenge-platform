import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy } from "lucide-react"

const rankings = [
  { rank: 1, name: "Alice Smith", score: 2500, level: 15 },
  { rank: 2, name: "Bob Johnson", score: 2300, level: 14 },
  { rank: 3, name: "Carol Williams", score: 2100, level: 13 },
  { rank: 4, name: "David Brown", score: 1900, level: 12 },
  { rank: 5, name: "Eve Davis", score: 1800, level: 11 },
]

export function Rankings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Trophy className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold">Global Rankings</h1>
      </div>

      <div className="rounded-lg border backdrop-blur-sm bg-background/95">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-20">Rank</TableHead>
              <TableHead>Player</TableHead>
              <TableHead className="text-right">Score</TableHead>
              <TableHead className="text-right">Level</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rankings.map((player) => (
              <TableRow key={player.rank}>
                <TableCell className="font-medium">#{player.rank}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={`/avatar-${player.rank}.png`} />
                      <AvatarFallback>{player.name[0]}</AvatarFallback>
                    </Avatar>
                    <span>{player.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">{player.score}</TableCell>
                <TableCell className="text-right">{player.level}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}