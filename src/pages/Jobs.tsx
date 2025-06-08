import { Link } from 'react-router-dom';

export default function Jobs() {
  return (
    <div className="p-4">
      <header className="flex justify-between items-center mb-4">
        <button>☰</button>
        <h1>Inatel</h1>
      </header>
      <input placeholder="Procurar vagas..." className="w-full p-2 border mb-2" />
      <div className="flex gap-2 mb-4">
        <button className="bg-gray-200 px-4 py-1 rounded">Banco de Dados</button>
        <button className="bg-gray-200 px-4 py-1 rounded">Software</button>
        <button className="bg-gray-200 px-4 py-1 rounded">Outros</button>
      </div>
      <div className="space-y-2">
        {[1, 2, 3].map(id => (
          <Link to={`/vaga/${id}`} key={id} className="block bg-gray-100 p-4 rounded shadow">
            Vaga {id}
          </Link>
        ))}
      </div>
    </div>
  );
}