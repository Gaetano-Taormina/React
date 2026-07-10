import { useState } from 'react';

const PROMOS = {
  "SCONTO10": 10,
  "PROMO20": 20,
  "WELCOME50": 50
};

export default function PromoValidator() {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState(null);

  const handleValidate = (e) => {
    e.preventDefault();
    const cleanCode = code.trim().toUpperCase();
    if (PROMOS[cleanCode]) {
      setStatus({ valid: true, msg: `Codice valido! Sconto applicato del ${PROMOS[cleanCode]}%` });
    } else {
      setStatus({ valid: false, msg: "Codice promozionale non valido o scaduto." });
    }
  };

  return (
    <div className="container py-4">
      <div className="card shadow-sm p-4">
        <h3 className="card-title text-primary mb-3">Esercizio 2: Codice Promo</h3>
        <p className="text-muted small">Codici di prova: SCONTO10, PROMO20, WELCOME50</p>
        <form onSubmit={handleValidate} className="mb-3">
          <div className="input-group">
            <input
              type="text"
              className="form-control text-uppercase"
              placeholder="Inserisci codice promo..."
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">Applica</button>
          </div>
        </form>
        {status && (
          <div className={`alert ${status.valid ? 'alert-success' : 'alert-danger'} mb-0`}>
            {status.msg}
          </div>
        )}
      </div>
    </div>
  );
}