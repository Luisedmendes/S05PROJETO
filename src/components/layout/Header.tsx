import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Sidebar } from './Sidebar'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
      <Sheet>
        <SheetTrigger>
          <Button variant="outline">☰</Button>
        </SheetTrigger>
        <SheetContent side="left"  className="w-64 data-[state=open]:animate-in data-[state=open]:slide-in-from-left data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left duration-300">
          <Sidebar />
        </SheetContent>
      </Sheet>
      <Link to="/vagas" className="text-xl font-bold text-blue-700">Inatel</Link>
    </header>
  )
}
