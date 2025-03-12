import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Star, Medal } from 'lucide-react'

export function Profile() {
  return (
    <div className="space-y-6">
      <Card className="backdrop-blur-sm bg-background/95">
        <CardHeader className="flex flex-row items-center space-x-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/avatar.png" />
            <AvatarFallback>US</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>User Name</CardTitle>
            <div className="flex space-x-2 mt-2">
              <Badge variant="secondary">Level 12</Badge>
              <Badge variant="outline">Math Master</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Experience</span>
                <span className="text-sm text-muted-foreground">1200/2000</span>
              </div>
              <Progress value={60} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-accent">
                <Trophy className="h-6 w-6" />
                <div>
                  <p className="text-sm font-medium">Trophies</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-accent">
                <Star className="h-6 w-6" />
                <div>
                  <p className="text-sm font-medium">Stars</p>
                  <p className="text-2xl font-bold">156</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-accent">
                <Medal className="h-6 w-6" />
                <div>
                  <p className="text-sm font-medium">Achievements</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}