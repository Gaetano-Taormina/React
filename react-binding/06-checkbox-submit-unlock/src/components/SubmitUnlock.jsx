import { useState } from 'react';
export default function SubmitUnlock() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="container py-4">
      <div className="card shadow-sm p-4">
        <h3 className="card-title text-primary mb-3">Esercizio 6: Sblocco Pulsante</h3>
        <div className="form-check form-switch mb-4">
          <input
            className="form-check-input"
            type="checkbox"
            id="terms"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <label className="form-check-label ms-2" htmlFor="terms">Accetto i termini per procedere</label>
        </div>
        <button className="btn btn-primary w-100" disabled={!checked}>
          {checked ? "Procedi" : "Accetta per Sbloccare"}
        </button>
      </div>
    </div>
  );
}