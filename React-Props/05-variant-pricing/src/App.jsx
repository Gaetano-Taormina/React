import { useState } from 'react';

function ProductCard({ basePrice, variants, productName }) {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  const handleVariantChange = (event) => {
    // USO DI event.target.value per leggere l'indice selezionato dalla tendina
    setSelectedVariantIndex(Number(event.target.value));
  };

  const selectedVariant = variants[selectedVariantIndex];
  const finalPrice = basePrice * (1 + selectedVariant.surchargePercentage / 100);

  return (
    <div className="card shadow-sm p-4 border-0 bg-dark text-white rounded-4">
      <span className="badge bg-info text-dark align-self-start mb-2 px-3 py-2 fw-bold">PRODOTTO PREMIUM</span>
      <h2 className="card-title fw-bold mb-3">{productName}</h2>
      
      <div className="mb-4">
        <label className="form-label text-light fw-medium">Seleziona Variante (colore/modello):</label>
        <select
          value={selectedVariantIndex}
          onChange={handleVariantChange}
          className="form-select form-select-lg bg-secondary text-white border-0 fw-bold shadow-sm"
        >
          {variants.map((variant, idx) => (
            <option key={idx} value={idx}>
              {variant.name} ({variant.surchargePercentage > 0 ? `+${variant.surchargePercentage}%` : 'Prezzo Base'})
            </option>
          ))}
        </select>
      </div>

      <div className="p-3 bg-black bg-opacity-50 rounded-3 d-flex justify-content-between align-items-center">
        <div>
          <small className="text-muted d-block">Prezzo Base:</small>
          <span className="text-decoration-line-through text-secondary">€{basePrice.toFixed(2)}</span>
        </div>
        <div className="text-end">
          <small className="text-light d-block fw-bold">Prezzo Finale:</small>
          <span className="fs-2 fw-bold text-info">€{finalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const variantiCuffie = [
    { name: "Nero Opaco (Standard)", surchargePercentage: 0 },
    { name: "Bianco Perla (Deluxe)", surchargePercentage: 15 },
    { name: "Oro Rosa (Limited Edition)", surchargePercentage: 30 }
  ];

  return (
    <div className="container py-5" style={{ maxWidth: '550px' }}>
      <h1 className="text-center mb-2 fw-bold text-dark">Esercizio 5: Calcolo Prezzo</h1>
      <p className="text-center text-muted mb-4">Uso di <code>event.target.value</code> e Bootstrap</p>
      <ProductCard
        productName="Cuffie Wireless Pro Max"
        basePrice={199.99}
        variants={variantiCuffie}
      />
    </div>
  );
}
