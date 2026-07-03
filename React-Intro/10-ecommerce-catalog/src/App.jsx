export default function App() {
  const prodotti = [
    {
      id: 1,
      nome: "MacBook Pro 16\" M3 Max",
      prezzo: 3499.00,
      immagine: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=80",
      categoria: "Informatica",
      disponibile: true
    },
    {
      id: 2,
      nome: "iPhone 16 Pro 256GB",
      prezzo: 1299.00,
      immagine: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=500&auto=format&fit=crop&q=80",
      categoria: "Smartphone",
      disponibile: true
    },
    {
      id: 3,
      nome: "Sony PlayStation 5 Pro",
      prezzo: 799.00,
      immagine: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&auto=format&fit=crop&q=80",
      categoria: "Gaming",
      disponibile: false
    },
    {
      id: 4,
      nome: "iPad Air 13\" M2",
      prezzo: 899.00,
      immagine: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=80",
      categoria: "Tablet",
      disponibile: true
    },
    {
      id: 5,
      nome: "Smartwatch Ultra GPS 49mm",
      prezzo: 899.00,
      immagine: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80",
      categoria: "Wearable",
      disponibile: false
    },
    {
      id: 6,
      nome: "Fotocamera Mirrorless 4K",
      prezzo: 1599.00,
      immagine: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=80",
      categoria: "Fotografia",
      disponibile: true
    }
  ];

  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-dark display-6">🛍️ I Nostri Prodotti</h1>
        <p className="text-muted">Esplora il nostro catalogo e-commerce con gestione dinamica delle scorte</p>
      </div>

      <div className="row g-4">
        {prodotti.map(prodotto => (
          <div key={prodotto.id} className="col-12 col-md-6 col-lg-4">
            <div className={`card shadow-sm border-0 h-100 overflow-hidden rounded-4 ${!prodotto.disponibile ? 'opacity-75 bg-light' : ''}`}>
              <div className="position-relative" style={{ height: '220px', backgroundColor: '#f8f9fa' }}>
                <img 
                  src={prodotto.immagine} 
                  alt={prodotto.nome}
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
                <span className="badge bg-dark position-absolute top-0 start-0 m-3 px-3 py-2 shadow-sm">
                  {prodotto.categoria}
                </span>
                {!prodotto.disponibile && (
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge bg-danger px-3 py-2 shadow-sm text-uppercase">
                      Esaurito
                    </span>
                  </div>
                )}
              </div>

              <div className="card-body p-4 d-flex flex-column justify-content-between">
                <div>
                  <h2 className="h5 fw-bold text-dark mb-2">{prodotto.nome}</h2>
                  <div className="d-flex align-items-baseline gap-2 mb-3">
                    <span className="fs-4 fw-bold text-primary">€ {prodotto.prezzo.toFixed(2)}</span>
                    <span className="text-muted small">IVA inclusa</span>
                  </div>
                </div>

                <div className="mt-auto pt-3 border-top">
                  {prodotto.disponibile ? (
                    <button className="btn btn-primary w-100 py-2 fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2">
                      <span>🛒</span> Aggiungi al carrello
                    </button>
                  ) : (
                    <button className="btn btn-secondary w-100 py-2 fw-bold disabled" disabled>
                      ❌ Prodotto Esaurito
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
