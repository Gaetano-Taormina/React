import { useState, useEffect } from 'react';

export default function ShipCalc() {
  const [width, setWidth] = useState(30);
  const [height, setHeight] = useState(40);
  const [depth, setDepth] = useState(25);

  const [totalDimensions, setTotalDimensions] = useState(95);
  const [shippingCost, setShippingCost] = useState(12);
  const [shippingType, setShippingType] = useState('standard');

  useEffect(() => {
    const w = Number(width) || 0;
    const h = Number(height) || 0;
    const d = Number(depth) || 0;
    const sum = w + h + d;

    setTotalDimensions(sum);

    if (sum < 150) {
      setShippingCost(12);
      setShippingType('standard');
    } else if (sum >= 150 && sum <= 750) {
      setShippingCost(sum * 0.10);
      setShippingType('volumetric');
    } else {
      setShippingCost(null);
      setShippingType('oversized');
    }
  }, [width, height, depth]);

  return (
    <div className="container py-4">
      <div className="card shadow-sm p-4">
        <h3 className="card-title text-primary mb-3">Esercizio 3: Costo Spedizione</h3>
        <p className="text-muted small mb-4">
          Calcolo fasce reattivo in tempo reale con <code>useEffect</code>.
        </p>

        <form className="text-start mb-4">
          <div className="row g-3">
            <div className="col-md-4">
              <label htmlFor="width" className="form-label fw-semibold">Larghezza (cm)</label>
              <input
                id="width"
                type="number"
                min="1"
                className="form-control"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="height" className="form-label fw-semibold">Altezza (cm)</label>
              <input
                id="height"
                type="number"
                min="1"
                className="form-control"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="depth" className="form-label fw-semibold">Profondità (cm)</label>
              <input
                id="depth"
                type="number"
                min="1"
                className="form-control"
                value={depth}
                onChange={(e) => setDepth(e.target.value)}
              />
            </div>
          </div>
        </form>

        <hr />

        <div className="text-start mt-3">
          <div className="mb-3">
            <span className="text-muted">Somma Dimensioni (L + A + P): </span>
            <span className="fw-bold fs-5">{totalDimensions} cm</span>
          </div>

          {shippingType === 'standard' && (
            <div className="alert alert-success d-flex justify-content-between align-items-center mb-0">
              <div>
                <h5 className="alert-heading fw-bold mb-1">Spedizione Standard (Fissa)</h5>
                <p className="mb-0 small">Somma dimensioni inferiore a 150 cm.</p>
              </div>
              <div className="fs-3 fw-bold text-success">12.00 €</div>
            </div>
          )}

          {shippingType === 'volumetric' && (
            <div className="alert alert-warning d-flex justify-content-between align-items-center mb-0">
              <div>
                <h5 className="alert-heading fw-bold mb-1">Spedizione Volumetrica (10%)</h5>
                <p className="mb-0 small">Somma dimensioni tra 150 e 750 cm.</p>
              </div>
              <div className="fs-3 fw-bold text-dark">{shippingCost !== null ? shippingCost.toFixed(2) : '0.00'} €</div>
            </div>
          )}

          {shippingType === 'oversized' && (
            <div className="alert alert-danger mb-0">
              <h5 className="alert-heading fw-bold mb-1">Spedizione Non Disponibile</h5>
              <p className="mb-0">
                La somma ({totalDimensions} cm) supera <strong>750 cm</strong>. Pacco troppo ingombrante.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
