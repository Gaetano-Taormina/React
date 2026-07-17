export default function ImageDisplay() {
  const imageUrl = "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80";
  const imageAlt = "Logo di React con sfondo colorato e dinamico";
  return (
    <main className="container py-5" style={{ maxWidth: '650px' }}>
      <div className="card shadow-sm border-0 p-4 text-center">
        <h1 className="card-title text-primary fw-bold mb-3">Esercizio 1: Immagine da Variabile</h1>
        <p className="text-muted mb-4">
          L'immagine sottostante è caricata dinamicamente tramite variabili per <code>src</code> e <code>alt</code>.
        </p>
        <div className="mb-3">
          <img 
            src={imageUrl} 
            alt={imageAlt} 
            className="img-fluid rounded shadow"
            style={{ maxHeight: '350px', objectFit: 'cover', width: '100%' }}
          />
        </div>
        <figcaption className="text-secondary small fst-italic">
          {imageAlt}
        </figcaption>
      </div>
    </main>
  );
}
