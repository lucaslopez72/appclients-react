import { IonApp, setupIonicReact } from '@ionic/react';
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import ClientsPage from './pages/ClientsPage';
import NewClientPage from './pages/NewClientPage';
import AboutPage from './pages/AboutPage';
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './theme/variables.css';
import './App.css';

setupIonicReact();

export default function App() {
  return (
    <IonApp>
      <BrowserRouter>
        <div className="clients-app">
          <a className="skip-link" href="#main-content">Saltar al contenido</a>
          <header className="app-header">
            <div className="container header-inner">
              <NavLink to="/clients" className="app-brand">AppClients<span>Gestión de clientes</span></NavLink>
              <nav aria-label="Navegación principal" className="app-nav">
                <NavLink to="/clients" end>Ver clientes</NavLink>
                <NavLink to="/clients/new">Añadir clientes</NavLink>
                <NavLink to="/about">About</NavLink>
              </nav>
            </div>
          </header>
          <main id="main-content" className="container app-main">
            <Routes>
              <Route path="/clients" element={<ClientsPage />} />
              <Route path="/clients/new" element={<NewClientPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<Navigate to="/clients" replace />} />
            </Routes>
          </main>
          <footer className="container app-footer">AppClients · Tu agenda de clientes, en un solo lugar.</footer>
        </div>
      </BrowserRouter>
    </IonApp>
  );
}
