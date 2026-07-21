import { useState } from 'react';
export default function AlignSelector() {
  const [align, setAlign] = useState("text-start");
  return (
    <div className="container py-4">
      <div className="card shadow-sm p-4">
        <h3 className="card-title text-primary mb-3">Esercizio 8: Allineamento</h3>
        <div className="d-flex gap-3 justify-content-center mb-3">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="a" id="l" checked={align === "text-start"} onChange={() => setAlign("text-start")} />
            <label className="form-check-label" htmlFor="l">Sinistra</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="a" id="c" checked={align === "text-center"} onChange={() => setAlign("text-center")} />
            <label className="form-check-label" htmlFor="c">Centro</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="a" id="r" checked={align === "text-end"} onChange={() => setAlign("text-end")} />
            <label className="form-check-label" htmlFor="r">Destra</label>
          </div>
        </div>
        <p className={`p-3 bg-light border rounded mb-0 ${align}`}>
          Questo paragrafo cambia allineamento in base all'opzione selezionata.
        </p>
      </div>
    </div>
  );
}