import { useState } from 'react';
import LoginForm from './components/LoginForm';

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="container py-5" style={{ maxWidth: '450px' }}>
      <h1 className="text-center mb-2 fw-bold text-dark">Esercizio 9: Form Login</h1>
      <p className="text-center text-muted mb-4">Validazione dinamica con <code>event.target.value</code> e Bootstrap</p>
      {user ? (
        <div className="alert alert-success text-center p-4 shadow-sm border-0">
          <h4 className="alert-heading fw-bold"> Accesso Eseguito!</h4>
          <p className="mb-3">Benvenuto, <strong>{user.email}</strong></p>
          <button className="btn btn-outline-success fw-bold" onClick={() => setUser(null)}>
            Disconnetti
          </button>
        </div>
      ) : (
        <LoginForm onLogin={(creds) => setUser(creds)} minEmailLength={5} minPasswordLength={8} />
      )}
    </div>
  );
}
