import { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';

export default function App() {
  const [registered, setRegistered] = useState(false);

  return (
    <div className="container py-5" style={{ maxWidth: '500px' }}>
      <h1 className="text-center mb-4 fw-bold text-dark">Esercizio 3: Validazione Checkbox</h1>
      {registered ? (
        <div className="alert alert-success text-center p-4 shadow-sm border-0">
          <h4 className="alert-heading fw-bold"> Registrazione completata!</h4>
          <p className="mb-3">Hai accettato correttamente i termini di servizio.</p>
          <button className="btn btn-outline-success fw-bold" onClick={() => setRegistered(false)}>
            Torna indietro
          </button>
        </div>
      ) : (
        <RegistrationForm onRegister={() => setRegistered(true)} />
      )}
    </div>
  );
}
