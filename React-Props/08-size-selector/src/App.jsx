import { useState } from 'react';

function SizeSelector({ sizes, onSizeSelect }) {
  const [selectedSize, setSelectedSize] = useState(sizes[0] || null);

  const handleSelect = (size) => {
    setSelectedSize(size);
    if (onSizeSelect) onSizeSelect(size);
  };

  return (
    <div className="card shadow-sm p-4 border-0 text-center">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="mb-0 fw-bold text-dark">Seleziona Taglia:</h4>
        <span className="badge bg-primary fs-6 px-3 py-2">{selectedSize}</span>
      </div>
      <div className="d-flex justify-content-center gap-2 flex-wrap">
        {sizes.map((size) => {
          const isActive = selectedSize === size;
          return (
            <button
              key={size}
              onClick={() => handleSelect(size)}
              className={`btn py-3 px-4 fw-bold ${isActive ? 'btn-primary shadow' : 'btn-outline-secondary'}`}
              style={{ minWidth: '60px' }}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function App() {
  const taglie = ["S", "M", "L", "XL", "XXL"];

  return (
    <div className="container py-5" style={{ maxWidth: '450px' }}>
      <h1 className="text-center mb-4 fw-bold text-dark">Esercizio 8: Taglie</h1>
      <SizeSelector sizes={taglie} onSizeSelect={(s) => console.log("Selezionata:", s)} />
    </div>
  );
}
