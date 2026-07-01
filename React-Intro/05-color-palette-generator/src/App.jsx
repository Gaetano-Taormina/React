export default function App() {
  const colori = [
    "#0d6efd", // Blue
    "#198754", // Green
    "#dc3545", // Red
    "#ffc107", // Yellow
    "#0dcaf0", // Cyan
    "#6610f2", // Purple
    "#fd7e14", // Orange
    "#20c997", // Teal
    "#d63384", // Pink
    "#212529"  // Dark
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-dark">🎨 Palette Box Colorati</h1>
        <p className="text-muted">Generazione dinamica di elementi a partire da un array di codici colore</p>
      </div>
      
      <div className="row g-4 justify-content-center">
        {colori.map((colore, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div 
              className="card shadow-sm border-0 h-100 p-4 text-center d-flex flex-column justify-content-center align-items-center rounded-4"
              style={{ 
                backgroundColor: colore,
                minHeight: '140px',
                transition: 'transform 0.2s ease'
              }}
            >
              <span 
                className="badge bg-white text-dark shadow fs-6 px-3 py-2 fw-bold font-monospace"
                style={{ border: '1px solid rgba(0,0,0,0.1)' }}
              >
                {colore}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
