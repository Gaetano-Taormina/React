import { useState } from 'react';
export default function StyleToggle() {
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const classes = [
    bold ? "fw-bold" : "",
    italic ? "fst-italic" : "",
    underline ? "text-decoration-underline" : ""
  ].join(" ").trim();
  return (
    <div className="container py-4">
      <div className="card shadow-sm p-4">
        <h3 className="card-title text-primary mb-3">Esercizio 7: Stili Dinamici</h3>
        <p className={`p-3 bg-light border rounded mb-3 ${classes}`}>
          Testo di esempio con stili dinamici applicati dalle checkbox.
        </p>
        <div className="d-flex gap-3 justify-content-center">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="b" checked={bold} onChange={(e) => setBold(e.target.checked)} />
            <label className="form-check-label fw-bold" htmlFor="b">Grassetto</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="i" checked={italic} onChange={(e) => setItalic(e.target.checked)} />
            <label className="form-check-label fst-italic" htmlFor="i">Corsivo</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="u" checked={underline} onChange={(e) => setUnderline(e.target.checked)} />
            <label className="form-check-label text-decoration-underline" htmlFor="u">Sottolineato</label>
          </div>
        </div>
      </div>
    </div>
  );
}