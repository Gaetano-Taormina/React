import { useState } from 'react';
const MAX = 100;
export default function RemainingChars() {
  const [text, setText] = useState("");
  const rem = MAX - text.length;
  return (
    <div className="container py-4">
      <div className="card shadow-sm p-4">
        <h3 className="card-title text-primary mb-3">Esercizio 14: Caratteri Rimanenti</h3>
        <textarea
          className="form-control mb-3"
          rows={4}
          maxLength={MAX}
          placeholder="Scrivi qui..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className={`badge ${rem < 20 ? 'bg-danger' : 'bg-success'} fs-6 p-2`}>
          Caratteri rimanenti: {rem} / {MAX}
        </div>
      </div>
    </div>
  );
}