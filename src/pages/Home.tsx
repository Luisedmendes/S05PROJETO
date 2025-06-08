import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function Home() {
  return (
    <div className="p-4 space-y-4">
      <Card>
        <CardContent className="p-4 space-y-2">
          <div className="h-32 bg-gray-200 rounded" />
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-3/4" />
            <div className="h-4 bg-gray-300 rounded w-1/2" />
            <div className="h-48 bg-gray-300 rounded" />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between gap-2">
        <Button className="flex-1 bg-blue-600 text-white">Favoritos</Button>
        <Button className="flex-1 bg-blue-600 text-white">Notificações</Button>
      </div>
    </div>
  )
}
