import { useState } from 'react';

const THRESHOLD_HOURS = 40;
const EXTRA_FEE = 150;

export default function QuoteCalc() {
  const [hours, setHours] = useState(20);
  const [rate, setRate] = useState(35);

  const baseTotal = hours * rate;
  const isOverThreshold = hours > THRESHOLD_HOURS;
  const finalTotal = baseTotal + (isOverThreshold ? EXTRA_FEE : 0);

  return (
    <div className="container py-4">
      <div className="card shadow-sm p-4">
        <h3 className="card-title text-primary mb-3">Esercizio 4: Calcolo Preventivo</h3>
        <p className="text-muted small">
          Nota: Se si superano le {THRESHOLD_HOURS} ore lavorative, si aggiunge un extra di {EXTRA_FEE}€ per gestione urgenza.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="mb-4">
          <div className="row g-3">
            <div className="col-6">
              <label htmlFor="hours" className="form-label">Ore Lavorative:</label>
              <input
                id="hours"
                type="number"
                className="form-control"
                min="1"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value) || 0)}
              />
            </div>
            <div className="col-6">
              <label htmlFor="rate" className="form-label">Tariffa (€/ora):</label>
              <input
                id="rate"
                type="number"
                className="form-control"
                min="1"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value) || 0)}
              />
            </div>
          </div>
        </form>
        <div className="p-3 bg-light rounded border">
          <div className="d-flex justify-content-between mb-1">
            <span>Importo base ({hours}h × {rate}€):</span>
            <span>{baseTotal}€</span>
          </div>
          {isOverThreshold && (
            <div className="d-flex justify-content-between text-warning-emphasis fw-medium mb-1">
              <span>Extra soglia (&gt;{THRESHOLD_HOURS}h):</span>
              <span>+{EXTRA_FEE}€</span>
            </div>
          )}
          <hr />
          <div className="d-flex justify-content-between fs-5 fw-bold text-primary">
            <span>Totale Preventivo:</span>
            <span>{finalTotal}€</span>
          </div>
        </div>
      </div>
    </div>
  );
}