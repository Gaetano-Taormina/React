import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <div className="container py-4">
      <div className="card shadow-sm p-4">
        <h3 className="card-title text-primary mb-3">Esercizio 1: Newsletter</h3>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Indirizzo Email</label>
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="nome@esempio.it"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Iscriviti</button>
          </form>
        ) : (
          <div className="alert alert-success text-center mb-0">
            <h5 className="alert-heading fw-bold mb-2">Grazie per l'iscrizione!</h5>
            <p className="mb-2">Ti abbiamo inviato una conferma all'indirizzo <strong>{email}</strong>.</p>
            <button className="btn btn-sm btn-outline-success mt-2" onClick={() => { setSubmitted(false); setEmail(""); }}>
              Nuova iscrizione
            </button>
          </div>
        )}
      </div>
    </div>
  );
}