import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export function Sidebar() {
  return (
    <div className="flex flex-col gap-4 bg-white z-10 h-full p-3">
      <div className="flex items-center gap-3">
        <Avatar  className="w-10 h-10 bg-gray-400" />
        <div>
          <p className="font-medium">Lucas Andrade 331</p>
          <p className="text-sm text-gray-500">8º Período</p>
        </div>
      </div>
      <Link to="/vagas"><Button variant="ghost" className="text-left">Vagas</Button></Link>
      <Link to="/"><Button variant="ghost" className="text-left">Home</Button></Link>
    </div>
  )
}
