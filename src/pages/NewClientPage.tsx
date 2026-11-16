import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClientsService } from '../services/ClientsService';


export default function NewClientPage() {
  const navigate = useNavigate();

  const [client, setClient] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [error, setError] = useState('');

  const save = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await ClientsService.addClient(client);
      alert('Cliente añadido correctamente');
      navigate('/clients');
    } catch (err) {
      console.error(err);
      setError('Error al guardar el cliente');
    }
  };

  return (
    <section className="client-form">
      <p className="eyebrow">NUEVO CONTACTO</p><h1>Añadir clientes</h1><p className="text-secondary mb-4">Completa los datos para guardar un nuevo cliente.</p>

      {error && <p className="text-danger">{error}</p>}

      <form onSubmit={save} className="surface p-4">
        <label className="form-label" htmlFor="client-name">Nombre</label>
        <input
          className="form-control mb-3"
          id="client-name" placeholder="Nombre" autoComplete="name"
          required
          value={client.name}
          onChange={e =>
            setClient({ ...client, name: e.target.value })
          }
        />

        <label className="form-label" htmlFor="client-email">Email</label>
        <input
          className="form-control mb-3"
          type="email"
          id="client-email" placeholder="Email" autoComplete="email"
          required
          value={client.email}
          onChange={e =>
            setClient({ ...client, email: e.target.value })
          }
        />

        <label className="form-label" htmlFor="client-phone">Teléfono</label>
        <input
          className="form-control mb-3"
          id="client-phone" type="tel" placeholder="Teléfono" autoComplete="tel"
          required
          value={client.phone}
          onChange={e =>
            setClient({ ...client, phone: e.target.value })
          }
        />

        <button className="btn btn-success" type="submit">
          Guardar cliente
        </button>
      </form>
    </section>
  );
}
