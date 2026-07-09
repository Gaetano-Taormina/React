import { useState } from 'react';

const RATES = { EUR: { r: 1, s: "€" }, USD: { r: 1.08, s: "$" }, GBP: { r: 0.85, s: "£" } };
const BASE_EUR = 100;

export default function PriceConverter() {
  const [curr, setCurr] = useState("EUR");
  const { r, s } = RATES[curr];

  return (
    <div className="container py-4">
      <div className="card shadow-sm p-4 text-center">
        <h3 className="card-title text-primary mb-3">Esercizio 13: Convertitore Valuta</h3>
        <p className="text-muted small">Prezzo base: {BASE_EUR} EUR</p>
        <select className="form-select mb-3" value={curr} onChange={(e) => setCurr(e.target.value)}>
          <option value="EUR">Euro (EUR)</option>
          <option value="USD">Dollaro (USD)</option>
          <option value="GBP">Sterlina (GBP)</option>
        </select>
        <div className="alert alert-info display-6 fw-bold mb-0">
          {s}{(BASE_EUR * r).toFixed(2)}
        </div>
      </div>
    </div>
  );
}