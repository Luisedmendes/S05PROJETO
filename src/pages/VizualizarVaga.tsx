import { useLocation } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import type { Vaga } from './Vagas'
import { Candidatura } from './Candidatura' // importe o componente

export function VisualizarVaga() {
  const location = useLocation()
  const vaga = location.state?.vaga as Vaga

  const { descricao, detalhes, empresa, tipo } = vaga

  return (
    <div className="p-4 space-y-4">
      <Card>
        <CardContent className="p-4 space-y-2">
          <h2 className="text-lg font-bold text-blue-700">{empresa}</h2>
          <p>{tipo}</p>
          <p>{descricao}</p>

          {Object.entries(detalhes).map(([chave, valor]) => (
            <div key={chave} className="mb-4">
              <h2 className="font-semibold capitalize">{chave}:</h2>
              {typeof valor === 'string' ? (
                <p>{valor}</p>
              ) : Array.isArray(valor) ? (
                <ul className="list-disc list-inside">
                  {valor.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}

          <p className="text-gray-600"></p>
        </CardContent>
      </Card>

      {/* Substitua o botão por isso */}
      <Candidatura vaga={vaga} />
    </div>
  )
}
