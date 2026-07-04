import { useState } from 'react';

function RegistrationForm({ onRegister }) {
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (termsAccepted) onRegister();
  };

  return (
    <form onSubmit={handleSubmit} className="card shadow-sm p-4 border-0">
      <h3 className="text-center mb-4 fw-bold">Registrazione Account</h3>
      
      <div className="form-check mb-4 p-3 bg-light rounded border">
        <input
          className="form-check-input ms-0 me-2"
          type="checkbox"
          id="terms"
          checked={termsAccepted}
          onChange={(e) => setTermsAccepted(e.target.checked)}
          style={{ cursor: 'pointer' }}
        />
        <label className="form-check-label text-secondary fw-medium" htmlFor="terms" style={{ cursor: 'pointer' }}>
          Accetto i termini di servizio e la privacy policy
        </label>
      </div>

      <button
        type="submit"
        className={`btn w-100 fw-bold py-3 shadow-sm ${termsAccepted ? 'btn-success' : 'btn-secondary'}`}
        disabled={!termsAccepted}
      >
        🚀 Registrati Ora
      </button>
    </form>
  );
}

export default function App() {
  const [registered, setRegistered] = useState(false);

  return (
    <div className="container py-5" style={{ maxWidth: '500px' }}>
      <h1 className="text-center mb-4 fw-bold text-dark">Esercizio 3: Validazione Checkbox</h1>
      {registered ? (
        <div className="alert alert-success text-center p-4 shadow-sm border-0">
          <h4 className="alert-heading fw-bold">🎉 Registrazione completata!</h4>
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
