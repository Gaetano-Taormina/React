import { useState } from 'react';

export default function BrandFilterList({ articles }) {
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
            onChange={(e) => setSelectedBrand(e.target.value)} // USING event.target.value
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
