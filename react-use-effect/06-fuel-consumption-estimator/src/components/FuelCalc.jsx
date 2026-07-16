import { useState, useEffect } from 'react';

export default function FuelCalc() {
  const [distanceKm, setDistanceKm] = useState(450);
  const [kmPerLiter, setKmPerLiter] = useState(18.5);
  const [fuelPrice, setFuelPrice] = useState(1.85);

  const [litersNeeded, setLitersNeeded] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const km = Number(distanceKm) || 0;
    const efficiency = Number(kmPerLiter) || 0;
    const price = Number(fuelPrice) || 0;

    if (efficiency > 0 && km > 0) {
      const liters = km / efficiency;
      const cost = liters * price;

      setLitersNeeded(liters);
      setTotalCost(cost);
    } else {
      setLitersNeeded(0);
      setTotalCost(0);
    }
  }, [distanceKm, kmPerLiter, fuelPrice]);

  return (
    <div className="container py-4">
      <div className="card shadow-sm p-4">
        <h3 className="card-title text-primary mb-3">Esercizio 6: Consumo Carburante</h3>
        <p className="text-muted small mb-4">
          Calcolo litri e spesa di viaggio reattivo con <code>useEffect</code>.
        </p>

        <form className="text-start mb-4">
          <div className="row g-3">
            <div className="col-md-4">
              <label htmlFor="distanceKm" className="form-label fw-semibold">Chilometri (km)</label>
              <input
                id="distanceKm"
                type="number"
                step="10"
                min="0"
                className="form-control"
                value={distanceKm}
                onChange={(e) => setDistanceKm(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="kmPerLiter" className="form-label fw-semibold">Consumo Medio (km/L)</label>
              <input
                id="kmPerLiter"
                type="number"
                step="0.5"
                min="1"
                className="form-control"
                value={kmPerLiter}
                onChange={(e) => setKmPerLiter(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="fuelPrice" className="form-label fw-semibold">Prezzo Carburante (€/L)</label>
              <input
                id="fuelPrice"
                type="number"
                step="0.01"
                min="0.1"
                className="form-control"
                value={fuelPrice}
                onChange={(e) => setFuelPrice(e.target.value)}
              />
            </div>
          </div>
        </form>

        <hr />

        <div className="text-start mt-3">
          <h5 className="fw-bold mb-3">Stima Fabbisogno e Costi</h5>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="p-3 border rounded bg-light">
                <div className="text-muted small">Carburante Necessario</div>
                <div className="fs-3 fw-bold text-dark">
                  {litersNeeded.toFixed(2)} L
                </div>
                <div className="text-muted small mt-1">per {distanceKm} km</div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-3 border rounded bg-primary bg-opacity-10 border-primary">
                <div className="text-muted small">Costo Totale Stimato</div>
                <div className="fs-3 fw-bold text-primary">
                  {totalCost.toFixed(2)} €
                </div>
                <div className="text-muted small mt-1">a {fuelPrice} €/litro</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
