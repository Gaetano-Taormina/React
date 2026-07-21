import { useState } from 'react';
export default function FontResizer() {
  const [size, setSize] = useState("fs-5");
  return (
    <div className="container py-4">
      <div className="card shadow-sm p-4">
        <h3 className="card-title text-primary mb-3">Esercizio 10: Dimensione Font</h3>
        <div className="d-flex gap-3 justify-content-center mb-3">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="s" id="s1" checked={size === "fs-6"} onChange={() => setSize("fs-6")} />
            <label className="form-check-label" htmlFor="s1">Piccolo</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="s" id="s2" checked={size === "fs-5"} onChange={() => setSize("fs-5")} />
            <label className="form-check-label" htmlFor="s2">Medio</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="s" id="s3" checked={size === "fs-3"} onChange={() => setSize("fs-3")} />
            <label className="form-check-label" htmlFor="s3">Grande</label>
          </div>
        </div>
        <p className={`p-3 bg-light border rounded mb-0 ${size}`}>
          Testo dimostrativo la cui dimensione varia dinamicamente.
        </p>
      </div>
    </div>
  );
}