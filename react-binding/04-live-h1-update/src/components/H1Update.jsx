import { useState } from 'react';
export default function H1Update() {
  const [title, setTitle] = useState("");
  return (
    <div className="container py-4">
      <div className="card shadow-sm p-4 text-center">
        <h1 className="text-primary mb-4">{title || "Titolo di Default"}</h1>
        <input
          type="text"
          className="form-control"
          placeholder="Modifica il titolo H1..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
    </div>
  );
}