import { useState, useEffect } from 'react';

export default function PayForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");

  const [isCardValid, setIsCardValid] = useState(false);
  const [isExpiryValid, setIsExpiryValid] = useState(false);
  const [isCvvValid, setIsCvvValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    const cleanCard = cardNumber.replace(/\D/g, '');
    const validCard = cleanCard.length === 16;
    setIsCardValid(validCard);

    const monthNum = parseInt(expiryMonth, 10);
    const yearNum = parseInt(expiryYear, 10);
    const currentYear = new Date().getFullYear();
    const validExpiry =
      !isNaN(monthNum) &&
      monthNum >= 1 &&
      monthNum <= 12 &&
      !isNaN(yearNum) &&
      yearNum >= currentYear &&
      yearNum <= currentYear + 20;
    setIsExpiryValid(validExpiry);

    const cleanCvv = cvv.replace(/\D/g, '');
    const validCvv = cleanCvv.length === 3;
    setIsCvvValid(validCvv);

    setIsFormValid(validCard && validExpiry && validCvv);
  }, [cardNumber, expiryMonth, expiryYear, cvv]);

  const handlePayment = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setPaymentSuccess(true);
    }
  };

  return (
    <div className="container py-4">
      <div className="card shadow-sm p-4">
        <h3 className="card-title text-primary mb-3">Esercizio 2: Form di Pagamento</h3>
        <p className="text-muted small mb-4">
          Validazione reattiva degli input con <code>useEffect</code>.
        </p>

        {!paymentSuccess ? (
          <form onSubmit={handlePayment} className="text-start">
            <div className="mb-3">
              <label htmlFor="cardNumber" className="form-label fw-semibold">Numero di Carta (16 cifre)</label>
              <input
                id="cardNumber"
                type="text"
                maxLength="19"
                className={`form-control ${cardNumber && (isCardValid ? 'is-valid' : 'is-invalid')}`}
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
              <div className="invalid-feedback">Inserisci 16 cifre esatte.</div>
            </div>

            <div className="row g-3 mb-3">
              <div className="col-6">
                <label htmlFor="expiryMonth" className="form-label fw-semibold">Mese Scadenza</label>
                <select
                  id="expiryMonth"
                  className={`form-select ${expiryMonth && (isExpiryValid ? 'is-valid' : 'is-invalid')}`}
                  value={expiryMonth}
                  onChange={(e) => setExpiryMonth(e.target.value)}
                >
                  <option value="">MM</option>
                  {Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0')).map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
              <div className="col-6">
                <label htmlFor="expiryYear" className="form-label fw-semibold">Anno Scadenza</label>
                <select
                  id="expiryYear"
                  className={`form-select ${expiryYear && (isExpiryValid ? 'is-valid' : 'is-invalid')}`}
                  value={expiryYear}
                  onChange={(e) => setExpiryYear(e.target.value)}
                >
                  <option value="">AAAA</option>
                  {Array.from({ length: 12 }, (_, i) => new Date().getFullYear() + i).map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="cvv" className="form-label fw-semibold">CVV (3 cifre)</label>
              <input
                id="cvv"
                type="text"
                maxLength="3"
                className={`form-control ${cvv && (isCvvValid ? 'is-valid' : 'is-invalid')}`}
                placeholder="123"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
              <div className="invalid-feedback">Inserisci 3 cifre esatte.</div>
            </div>

            <button
              type="submit"
              className={`btn w-100 py-2 fw-bold ${isFormValid ? 'btn-success' : 'btn-secondary'}`}
              disabled={!isFormValid}
            >
              Paga Ora
            </button>
          </form>
        ) : (
          <div className="alert alert-success text-center my-3">
            <h5 className="alert-heading fw-bold">Pagamento Completato!</h5>
            <p className="mb-3">Transazione elaborata per carta con finale {cardNumber.replace(/\D/g, '').slice(-4)}.</p>
            <button className="btn btn-outline-success btn-sm" onClick={() => {
              setPaymentSuccess(false);
              setCardNumber("");
              setExpiryMonth("");
              setExpiryYear("");
              setCvv("");
            }}>
              Nuovo Pagamento
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
