import { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Link } from 'react-router-dom'

export type Vaga = {
  id: number
  empresa: string
  descricao: string
  tipo: string
  detalhes: {
    salario: string,
    responsabilidades: Array<string>,
    requisitos: Array<string>,
    beneficios: Array<string>,
    local: string
    }
}

const vagasMock: Vaga[] = [
  {
    id: 1,
    empresa: 'Empresa A',
    descricao: 'Vaga para DBA',
    tipo: 'Banco de Dados',
    detalhes: {
      salario: 'R$ 6.500,00',
      responsabilidades: [
        'Gerenciar banco de dados',
        'Garantir segurança das informações',
        'Realizar backup e recovery'
      ],
      requisitos: [
        'Experiência com PostgreSQL e MySQL',
        'Conhecimento em modelagem de dados'
      ],
      beneficios: ['Vale Refeição', 'Plano de Saúde', 'Home office 2x por semana'],
      local: 'São Paulo, SP'
    }
  },
  {
    id: 2,
    empresa: 'Empresa B',
    descricao: 'Desenvolvedor de Software',
    tipo: 'Software',
    detalhes: {
      salario: 'R$ 7.200,00',
      responsabilidades: [
        'Desenvolver novas funcionalidades',
        'Corrigir bugs e melhorar performance',
        'Trabalhar em equipe ágil'
      ],
      requisitos: [
        'Experiência com React e Node.js',
        'Conhecimento de APIs REST'
      ],
      beneficios: ['Plano odontológico', 'VR', 'Auxílio educação'],
      local: 'Remoto'
    }
  },
  {
    id: 3,
    empresa: 'Empresa C',
    descricao: 'Testador de QA',
    tipo: 'QA',
    detalhes: {
      salario: 'R$ 5.000,00',
      responsabilidades: [
        'Executar testes manuais e automatizados',
        'Documentar bugs encontrados',
        'Garantir a qualidade dos entregáveis'
      ],
      requisitos: ['Conhecimento em testes automatizados', 'Ferramentas como Selenium ou Cypress'],
      beneficios: ['Vale Alimentação', 'Gympass', 'Plano de saúde'],
      local: 'Belo Horizonte, MG'
    }
  },
  {
    id: 4,
    empresa: 'Empresa D',
    descricao: 'Engenheiro de Dados',
    tipo: 'Banco de Dados',
    detalhes: {
      salario: 'R$ 9.000,00',
      responsabilidades: [
        'Desenvolver pipelines de dados',
        'Trabalhar com grandes volumes de informação',
        'Garantir a integridade dos dados'
      ],
      requisitos: [
        'Experiência com BigQuery ou Redshift',
        'Conhecimento em Python e SQL'
      ],
      beneficios: ['Stock options', 'VR/VA', 'Plano de saúde premium'],
      local: 'Curitiba, PR'
    }
  },
  {
    id: 5,
    empresa: 'Empresa E',
    descricao: 'Desenvolvedor Front-end',
    tipo: 'Software',
    detalhes: {
      salario: 'R$ 6.800,00',
      responsabilidades: [
        'Implementar interfaces modernas e responsivas',
        'Garantir performance e acessibilidade',
        'Participar de code reviews'
      ],
      requisitos: [
        'Experiência com React ou Vue.js',
        'Conhecimento em testes unitários (Jest)'
      ],
      beneficios: ['VR', 'Seguro de vida', 'Horário flexível'],
      local: 'Porto Alegre, RS'
    }
  },
  {
    id: 6,
    empresa: 'Empresa F',
    descricao: 'Analista de QA',
    tipo: 'QA',
    detalhes: {
      salario: 'R$ 5.300,00',
      responsabilidades: [
        'Criar planos de testes',
        'Executar testes exploratórios',
        'Colaborar com desenvolvedores para prevenir bugs'
      ],
      requisitos: ['Conhecimento em metodologias ágeis', 'Ferramentas como TestRail'],
      beneficios: ['VA', 'Plano de saúde', 'Auxílio home office'],
      local: 'Florianópolis, SC'
    }
  }
]


export function Vagas() {
  const [search, setSearch] = useState('')
  const [filtroTipo, setFiltroTipo] = useState('')

  const tipos = ['Banco de Dados', 'Software', 'QA']

  const vagasFiltradas = useMemo(() => {
    return vagasMock.filter((vaga) => {
      const textoBusca = search.toLowerCase()
      const matchBusca =
        vaga.empresa.toLowerCase().includes(textoBusca) ||
        vaga.descricao.toLowerCase().includes(textoBusca)

      const matchTipo = filtroTipo ? vaga.tipo === filtroTipo : true

      return matchBusca && matchTipo
    })
  }, [search, filtroTipo])

  return (
    <div className="p-4 space-y-4">
      <Input
        placeholder="Procurar vagas..."
        className="border-gray-300"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="flex gap-2 overflow-x-auto">
        <Button
          variant={filtroTipo === '' ? 'default' : 'outline'}
          onClick={() => setFiltroTipo('')}
        >
          Todos
        </Button>
        {tipos.map((tipo) => (
          <Button
            key={tipo}
            variant={filtroTipo === tipo ? 'default' : 'outline'}
            onClick={() => setFiltroTipo(tipo)}
          >
            {tipo}
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        {vagasFiltradas.length > 0 ? (
          vagasFiltradas.map((vaga) => (
            <Link to={`/vagas/${vaga.id}`} key={vaga.id} state={{ vaga }}>
              <Card className="cursor-pointer">
                <CardContent className="p-4 flex items-center gap-4">
                  <Avatar className="w-10 h-10 bg-gray-400" />
                  <div>
                    <p className="font-semibold text-blue-800">{vaga.empresa}</p>
                    <p className="text-sm text-gray-500">{vaga.descricao}</p>
                    <p className="text-xs text-gray-400 italic">{vaga.tipo}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 text-center">Nenhuma vaga encontrada.</p>
        )}
      </div>
    </div>
  )
}
