import { useState } from 'react';

export default function TextEcho() {
  const [text, setText] = useState("");

  return (
    <div className="container py-4">
      <div className="card shadow-sm p-4">
        <h3 className="card-title text-primary mb-3">Esercizio 1: Eco del Testo</h3>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Digita qualcosa..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="p-3 bg-light rounded border">
          <span className="text-muted small d-block">Testo digitato:</span>
          <p className="mb-0 fw-medium">{text || "Nessun testo"}</p>
        </div>
      </div>
    </div>
  );
}