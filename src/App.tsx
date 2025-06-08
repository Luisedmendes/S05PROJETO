import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Vagas } from './pages/Vagas'
import { VisualizarVaga } from './pages/VizualizarVaga'
import { Header } from './components/layout/Header'
import { Toaster } from '@/components/ui/sonner'
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vagas" element={<Vagas />} />
        <Route path="/vagas/:id" element={<VisualizarVaga />} />
      </Routes>
      <Toaster richColors/>
    </div>
  )
}
