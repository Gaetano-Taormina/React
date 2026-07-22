import { useState } from 'react';
export default function LengthAlerts() {
  const [text, setText] = useState("");
  const len = text.length;
  let alertClass = "alert-warning";
  let msg = "Testo troppo corto (< 10 caratteri)";
  if (len >= 10 && len <= 50) {
    alertClass = "alert-success";
    msg = "Lunghezza ottimale (10 - 50 caratteri)";
  } else if (len > 50) {
    alertClass = "alert-danger";
    msg = "Testo troppo lungo (> 50 caratteri)";
  }
  return (
    <div className="container py-4">
      <div className="card shadow-sm p-4">
        <h3 className="card-title text-primary mb-3">Esercizio 15: Avvisi Lunghezza</h3>
        <textarea
          className="form-control mb-3"
          rows={4}
          placeholder="Scrivi qualcosa..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className={`alert ${alertClass} mb-0 fw-medium`}>
          {len === 0 ? "Inizia a scrivere..." : msg}
        </div>
      </div>
    </div>
  );
}