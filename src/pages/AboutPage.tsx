import { Link } from 'react-router-dom';

export default function AboutPage() {
  return <section className="about-page"><p className="eyebrow">SOBRE LA APLICACIÓN</p><h1>About</h1><p className="lead">Una agenda sencilla para tener a tus clientes a mano.</p><div className="surface p-4 mt-4"><h2>AppClients</h2><p>Consulta tu lista de clientes y añade nuevos contactos con su nombre, email y teléfono.</p><p className="text-secondary">Proyecto de práctica desarrollado con Ionic React, Bootstrap y Supabase.</p><Link to="/clients" className="btn btn-primary">Ver clientes</Link></div></section>;
}
