import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ClientsService } from '../services/ClientsService';
import type { Client } from '../interfaces/Client';

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError('');
    ClientsService.getClients()
      .then(data => { if (active) setClients(data ?? []); })
      .catch(() => { if (active) setError('No se pudieron cargar los clientes. Comprueba la conexión e inténtalo de nuevo.'); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [attempt]);

  return (
    <section>
      <div className="page-heading">
        <div><p className="eyebrow">AGENDA</p><h1>Ver clientes</h1><p className="text-secondary">Consulta los datos de tus clientes.</p></div>
        <Link to="/clients/new" className="btn btn-primary">+ Añadir cliente</Link>
      </div>
      {loading ? <p role="status">Cargando clientes…</p> : error ? (
        <div className="alert alert-danger" role="alert">{error}<div className="mt-3"><button className="btn btn-outline-danger" onClick={() => setAttempt(value => value + 1)}>Reintentar</button></div></div>
      ) : clients.length === 0 ? (
        <div className="empty-state"><h2>Aún no hay clientes</h2><p>Añade el primero para empezar a organizar tu agenda.</p><Link className="btn btn-primary" to="/clients/new">Añadir cliente</Link></div>
      ) : (
        <div className="table-responsive surface"><table className="table table-hover mb-0"><caption className="px-3">{clients.length} clientes en tu agenda</caption><thead><tr><th scope="col">ID</th><th scope="col">Nombre</th><th scope="col">Email</th><th scope="col">Teléfono</th></tr></thead><tbody>{clients.map(client => <tr key={client.id}><td>{client.id}</td><td>{client.name}</td><td>{client.email}</td><td>{client.phone}</td></tr>)}</tbody></table></div>
      )}
    </section>
  );
}
