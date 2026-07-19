import { useState } from 'react';
export default function RegistrationForm({ onRegister }) {
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
         Registrati Ora
      </button>
    </form>
  );
}
