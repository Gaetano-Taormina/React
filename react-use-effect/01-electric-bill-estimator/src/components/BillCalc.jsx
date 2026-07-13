import { useState, useEffect } from 'react';

export default function BillCalc() {
  const [costPerKwh, setCostPerKwh] = useState(0.28);
  const [dailyKwh, setDailyKwh] = useState(12.5);
  const [warningThreshold, setWarningThreshold] = useState(90);

  const [monthlyCost, setMonthlyCost] = useState(0);
  const [annualCost, setAnnualCost] = useState(0);
  const [isOverThreshold, setIsOverThreshold] = useState(false);

  useEffect(() => {
    const costPerDay = Number(dailyKwh) * Number(costPerKwh);
    const calculatedMonthly = costPerDay * 30;
    const calculatedAnnual = costPerDay * 365;

    setMonthlyCost(calculatedMonthly);
    setAnnualCost(calculatedAnnual);
    setIsOverThreshold(calculatedMonthly > Number(warningThreshold));
  }, [costPerKwh, dailyKwh, warningThreshold]);

  return (
    <div className="container py-4">
      <div className="card shadow-sm p-4">
        <h3 className="card-title text-primary mb-3">Esercizio 1: Bolletta Elettrica</h3>
        <p className="text-muted small mb-4">
          Sincronizzazione costi in tempo reale tramite <code>useEffect</code>.
        </p>

        <form className="text-start mb-4">
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="costPerKwh" className="form-label fw-semibold">Costo al kWh (€)</label>
              <input
                id="costPerKwh"
                type="number"
                step="0.01"
                min="0"
                className="form-control"
                value={costPerKwh}
                onChange={(e) => setCostPerKwh(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="dailyKwh" className="form-label fw-semibold">Consumo Medio Giornaliero (kWh)</label>
              <input
                id="dailyKwh"
                type="number"
                step="0.1"
                min="0"
                className="form-control"
                value={dailyKwh}
                onChange={(e) => setDailyKwh(e.target.value)}
              />
            </div>
            <div className="col-12 mt-3">
              <label htmlFor="warningThreshold" className="form-label fw-semibold">Soglia di Attenzione Mensile (€)</label>
              <input
                id="warningThreshold"
                type="number"
                step="5"
                min="0"
                className="form-control"
                value={warningThreshold}
                onChange={(e) => setWarningThreshold(e.target.value)}
              />
            </div>
          </div>
        </form>

        <hr />

        <div className="text-start mt-3">
          <h5 className="fw-bold mb-3">Riepilogo Costi Stimati</h5>
          <div className="row g-3">
            <div className="col-md-6">
              <div className={`p-3 border rounded ${isOverThreshold ? 'border-danger bg-danger bg-opacity-10' : 'bg-light'}`}>
                <div className="text-muted small">Costo Mensile (30 giorni)</div>
                <div className={`fs-4 fw-bold ${isOverThreshold ? 'text-danger' : 'text-dark'}`}>
                  {monthlyCost.toFixed(2)} €
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-3 border rounded bg-light">
                <div className="text-muted small">Costo Annuale (365 giorni)</div>
                <div className="fs-4 fw-bold text-dark">
                  {annualCost.toFixed(2)} €
                </div>
              </div>
            </div>
          </div>

          {isOverThreshold && (
            <div className="alert alert-danger mt-3 mb-0 d-flex align-items-center" role="alert">
              <div>
                <strong>Attenzione!</strong> La spesa mensile stimata di <strong>{monthlyCost.toFixed(2)} €</strong> supera la soglia impostata ({warningThreshold} €).
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
