import { useState } from 'react';

function BrandFilterList({ articles }) {
  const [selectedBrand, setSelectedBrand] = useState('tutte');
  const brands = ['tutte', ...new Set(articles.map((item) => item.brand))];

  const filteredArticles = selectedBrand === 'tutte'
    ? articles
    : articles.filter((item) => item.brand === selectedBrand);

  return (
    <div className="card shadow-sm p-4 border-0">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <h3 className="mb-0 fw-bold text-dark">Catalogo Prodotti</h3>
        <div className="d-flex align-items-center gap-2">
          <label className="form-label mb-0 fw-medium text-secondary">Filtra:</label>
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)} // USO DI event.target.value
            className="form-select bg-light fw-bold text-primary shadow-sm"
            style={{ width: '180px' }}
          >
            {brands.map((b, i) => (
              <option key={i} value={b}>
                {b.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="row g-3">
        {filteredArticles.map((art) => (
          <div className="col-md-6 col-lg-4" key={art.id}>
            <div className="card h-100 border shadow-sm">
              <div className="card-body d-flex flex-column">
                <span className="badge bg-secondary align-self-start mb-2 px-2 py-1">{art.brand}</span>
                <h5 className="card-title fw-bold text-dark">{art.name}</h5>
                <div className="mt-auto pt-3 d-flex justify-content-between align-items-center border-top">
                  <span className="text-muted small">Prezzo</span>
                  <span className="fs-5 fw-bold text-success">€{art.price.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        {filteredArticles.length === 0 && (
          <div className="col-12 text-center py-5 text-muted">
            Nessun prodotto trovato per la marca selezionata.
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const catalogo = [
    { id: 1, name: "MacBook Pro M3", brand: "Apple", price: 2499.00 },
    { id: 2, name: "Galaxy S24 Ultra", brand: "Samsung", price: 1399.00 },
    { id: 3, name: "iPad Air", brand: "Apple", price: 699.00 },
    { id: 4, name: "Bravia XR OLED", brand: "Sony", price: 1899.00 },
    { id: 5, name: "Galaxy Book 4", brand: "Samsung", price: 1199.00 },
    { id: 6, name: "PlayStation 5 Pro", brand: "Sony", price: 799.00 }
  ];

  return (
    <div className="container py-5" style={{ maxWidth: '800px' }}>
      <h1 className="text-center mb-2 fw-bold text-dark">Esercizio 6: Filtro Marca</h1>
      <p className="text-center text-muted mb-4">Filtro dinamico a tendina con <code>event.target.value</code> e Bootstrap</p>
      <BrandFilterList articles={catalogo} />
    </div>
  );
}
