import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <section className="about-page">
      <p className="eyebrow">SOBRE LA APLICACIÓN</p>
      <h1>About</h1>
      <p className="lead">Una agenda sencilla para tener a tus clientes a mano.</p>
      <div className="surface p-4 mt-4">
        <h2>AppClients</h2>
        <p>Consulta tu lista de clientes y añade nuevos contactos con su nombre, email y teléfono. Los datos se guardan en Supabase y están disponibles al volver a abrir la aplicación.</p>
        <p className="text-secondary">Proyecto de práctica desarrollado con Ionic React, React Router, Bootstrap y Supabase.</p>
        <img src="/images/appclients.webp" alt="Esquema de AppClients: la aplicación React consulta y añade clientes en Supabase." width="1200" height="500" className="img-fluid rounded my-3" />
        <div><Link to="/clients" className="btn btn-primary">Ver clientes</Link></div>
      </div>
      <div className="mt-5">
        <h2>Conoce Ionic React</h2>
        <p>Vídeo introductorio del canal oficial de Ionic.</p>
        <div className="ratio ratio-16x9">
          <iframe src="https://www.youtube-nocookie.com/embed/29DnDnqcVlY" title="Build your first Ionic React app — canal oficial de Ionic" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
        <p className="mt-2"><a href="https://www.youtube.com/watch?v=29DnDnqcVlY" target="_blank" rel="noreferrer">Ver el vídeo en YouTube</a></p>
      </div>
    </section>
  );
}
