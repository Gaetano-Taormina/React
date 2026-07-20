import { useState } from 'react';
export default function CharCounter() {
  const [text, setText] = useState("");
  return (
    <div className="container py-4">
      <div className="card shadow-sm p-4">
        <h3 className="card-title text-primary mb-3">Esercizio 2: Contatore Caratteri</h3>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Scrivi qui..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="alert alert-info d-flex justify-content-between align-items-center mb-0">
          <span>Caratteri digitati:</span>
          <span className="badge bg-primary fs-6">{text.length}</span>
        </div>
      </div>
    </div>
  );
}