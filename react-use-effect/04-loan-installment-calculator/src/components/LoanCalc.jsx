import { useState, useEffect } from 'react';

export default function LoanCalc() {
  const [totalAmount, setTotalAmount] = useState(15000);
  const [durationYears, setDurationYears] = useState(15);

  const [interestRate, setInterestRate] = useState(5.0);
  const [monthlyInstallment, setMonthlyInstallment] = useState(0);
  const [totalRepayment, setTotalRepayment] = useState(0);

  useEffect(() => {
    const amount = Number(totalAmount) || 0;
    const years = Number(durationYears) || 0;

    let rate = 5.0;
    if (years > 10) {
      const multiplesExceeded = Math.floor((years - 1) / 10);
      rate -= multiplesExceeded * 0.25;
    }
    if (rate < 0.5) rate = 0.5;

    setInterestRate(rate);

    const months = years * 12;
    if (amount > 0 && months > 0) {
      const monthlyRate = (rate / 100) / 12;
      const installment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
      const total = installment * months;

      setMonthlyInstallment(installment);
      setTotalRepayment(total);
    } else {
      setMonthlyInstallment(0);
      setTotalRepayment(0);
    }
  }, [totalAmount, durationYears]);

  return (
    <div className="container py-4">
      <div className="card shadow-sm p-4">
        <h3 className="card-title text-primary mb-3">Esercizio 4: Rata Finanziamento</h3>
        <p className="text-muted small mb-4">
          Sconto tasso e ricalcolo ammortamento reattivi con <code>useEffect</code>.
        </p>

        <form className="text-start mb-4">
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="totalAmount" className="form-label fw-semibold">Importo Finanziamento (€)</label>
              <input
                id="totalAmount"
                type="number"
                step="500"
                min="1000"
                className="form-control"
                value={totalAmount}
                onChange={(e) => setTotalAmount(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="durationYears" className="form-label fw-semibold">Durata (Anni)</label>
              <input
                id="durationYears"
                type="number"
                step="1"
                min="1"
                max="40"
                className="form-control"
                value={durationYears}
                onChange={(e) => setDurationYears(e.target.value)}
              />
            </div>
          </div>
        </form>

        <hr />

        <div className="text-start mt-3">
          <div className="d-flex justify-content-between align-items-center mb-3 p-3 bg-light rounded border">
            <div>
              <span className="text-muted d-block small">Tasso di Interesse Applicato (Base 5%)</span>
              {durationYears > 10 ? (
                <span className="badge bg-success mt-1">
                  Sconto durata &gt; 10 anni (-{((5 - interestRate)).toFixed(2)}%)
                </span>
              ) : (
                <span className="badge bg-secondary mt-1">Tasso Base Standard</span>
              )}
            </div>
            <div className="fs-3 fw-bold text-primary">{interestRate.toFixed(2)}%</div>
          </div>

          <div className="row g-3">
            <div className="col-md-6">
              <div className="p-3 border rounded bg-light">
                <div className="text-muted small">Rata Mensile Stimata</div>
                <div className="fs-3 fw-bold text-success">
                  {monthlyInstallment.toFixed(2)} €
                </div>
                <div className="text-muted small mt-1">per {durationYears * 12} mesi</div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-3 border rounded bg-light">
                <div className="text-muted small">Totale da Restituire</div>
                <div className="fs-3 fw-bold text-dark">
                  {totalRepayment.toFixed(2)} €
                </div>
                <div className="text-muted small mt-1">Interessi: {(totalRepayment - totalAmount > 0 ? totalRepayment - totalAmount : 0).toFixed(2)} €</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
