import { useState, useEffect } from 'react';

const ACCOMMODATION_PRICES = {
  standard: { label: 'Standard (Camera base + colazione)', price: 80 },
  premium: { label: 'Premium (Vista mare + mezza pensione)', price: 130 },
  vip: { label: 'VIP (Suite all-inclusive + Spa)', price: 250 },
};

export default function TripConfig() {
  const [rooms, setRooms] = useState(1);
  const [nights, setNights] = useState(3);
  const [accommodationType, setAccommodationType] = useState('standard');

  const [pricePerNight, setPricePerNight] = useState(80);
  const [totalQuote, setTotalQuote] = useState(240);

  useEffect(() => {
    const r = Number(rooms) || 0;
    const n = Number(nights) || 0;
    const currentPrice = ACCOMMODATION_PRICES[accommodationType]?.price || 0;

    setPricePerNight(currentPrice);
    setTotalQuote(r * n * currentPrice);
  }, [rooms, nights, accommodationType]);

  return (
    <div className="container py-4">
      <div className="card shadow-sm p-4">
        <h3 className="card-title text-primary mb-3">Esercizio 5: Configuratore Viaggio</h3>
        <p className="text-muted small mb-4">
          Calcolo preventivo combinato reattivo tramite <code>useEffect</code>.
        </p>

        <form className="text-start mb-4">
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="rooms" className="form-label fw-semibold">Numero Camere</label>
              <input
                id="rooms"
                type="number"
                min="1"
                max="10"
                className="form-control"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="nights" className="form-label fw-semibold">Numero di Notti</label>
              <input
                id="nights"
                type="number"
                min="1"
                max="30"
                className="form-control"
                value={nights}
                onChange={(e) => setNights(e.target.value)}
              />
            </div>
            <div className="col-12 mt-3">
              <label htmlFor="accommodationType" className="form-label fw-semibold">Tipo di Alloggio</label>
              <select
                id="accommodationType"
                className="form-select"
                value={accommodationType}
                onChange={(e) => setAccommodationType(e.target.value)}
              >
                {Object.entries(ACCOMMODATION_PRICES).map(([key, info]) => (
                  <option key={key} value={key}>
                    {info.label} — {info.price} € / notte
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>

        <hr />

        <div className="text-start mt-3">
          <h5 className="fw-bold mb-3">Riepilogo Preventivo</h5>
          <ul className="list-group list-group-flush mb-3 border rounded">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span>Camere selezionate</span>
              <strong>{rooms}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span>Durata soggiorno</span>
              <strong>{nights} notti</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span>Tariffa ({accommodationType.toUpperCase()})</span>
              <strong>{pricePerNight} € / camera / notte</strong>
            </li>
          </ul>

          <div className="p-3 bg-primary bg-opacity-10 border border-primary rounded d-flex justify-content-between align-items-center">
            <div>
              <span className="text-muted small d-block">Preventivo Totale Soggiorno</span>
              <strong className="text-dark fs-5">{rooms} × {nights} notti × {pricePerNight} €</strong>
            </div>
            <div className="fs-2 fw-bold text-primary">{totalQuote.toFixed(2)} €</div>
          </div>
        </div>
      </div>
    </div>
  );
}
