export default function App() {
  const persona = {
    nome: "Mario",
    cognome: "Rossi",
    eta: 32,
    citta: "Milano",
    professione: "Sviluppatore Frontend & React Developer"
  };

  return (
    <div className="container py-5" style={{ maxWidth: '600px' }}>
      <article className="card shadow-sm border-0 overflow-hidden">
        <div className="bg-primary text-white p-4 text-center">
          <div className="display-4 mb-2">👤</div>
          <h1 className="h3 fw-bold mb-0">{persona.nome} {persona.cognome}</h1>
          <p className="opacity-75 mb-0">{persona.professione}</p>
        </div>
        <div className="card-body p-4">
          <h2 className="h5 text-secondary border-bottom pb-2 mb-3">Dettagli Anagrafici</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center py-3 px-0">
              <span className="text-muted fw-semibold">Età</span>
              <span className="badge bg-secondary rounded-pill fs-6">{persona.eta} anni</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center py-3 px-0">
              <span className="text-muted fw-semibold">Città di Residenza</span>
              <span className="fw-bold text-dark">📍 {persona.citta}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center py-3 px-0">
              <span className="text-muted fw-semibold">Professione</span>
              <span className="text-primary fw-medium">💻 {persona.professione}</span>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
}
