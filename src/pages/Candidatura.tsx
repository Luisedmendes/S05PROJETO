import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
type CandidaturaProps = {
  vaga: Vaga
}

import type { Vaga } from './Vagas'

export function Candidatura({ vaga }: CandidaturaProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [file, setFile] = useState<File | null>(null)


  const handleEnviar = () => {
    setModalOpen(false)
    toast.success('Candidatura enviada com sucesso!', {
      description: file
        ? `Currículo enviado para a vaga: ${vaga.descricao}`
        : `${nome || 'Candidato'} aplicado à vaga de ${vaga.descricao}`,
    })

  }

  return (
    <Dialog  open={modalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger asChild>
        <Button>Candidatar-se</Button>
      </DialogTrigger>

      <DialogContent className="z-50 bg-white rounded-lg p-6 max-w-lg mx-auto">
        <h2 className="text-lg font-semibold">
          Candidatura para {vaga.empresa} - {vaga.descricao}
        </h2>

        <div className="space-y-2">
          <div className="space-y-2 border rounded-md p-4">
            <Label>Nome</Label>
            <Input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome"
            />
            <Label>Email</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
            />
          </div>

          <p className="text-center text-gray-500">ou</p>

          <div className="space-y-2 border rounded-md p-4">
            <Label>Enviar currículo</Label>
            <Input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </div>
        </div>

        <Button className="w-full" onClick={handleEnviar}>
          Enviar candidatura
        </Button>
      </DialogContent>
    </Dialog>
  )
}
