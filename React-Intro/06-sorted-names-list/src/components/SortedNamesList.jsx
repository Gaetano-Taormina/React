export default function SortedNamesList() {
  const nomi = ["Luca", "Anna", "Marco", "Giulia", "Francesco", "Beatrice", "Davide", "Elena", "Chiara", "Simone"];
  const nomiOrdinati = [...nomi].sort();

  return (
    <div className="container py-5" style={{ maxWidth: '600px' }}>
      <div className="card shadow-sm border-0 p-4">
        <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
          <h1 className="h3 fw-bold text-primary mb-0"> Lista Nomi Ordinata</h1>
          <span className="badge bg-secondary rounded-pill fs-6">{nomiOrdinati.length} Nomi</span>
        </div>
        
        <p className="text-muted small mb-3">
          L'array originale è stato copiato e ordinato alfabeticamente tramite il metodo <code>.sort()</code>.
        </p>
        
        <ol className="list-group list-group-numbered list-group-flush">
          {nomiOrdinati.map((nome, index) => (
            <li key={index} className="list-group-item py-3 px-2 d-flex justify-content-between align-items-center">
              <span className="fw-semibold text-dark fs-6 ms-2">{nome}</span>
              <span className="badge bg-light text-muted border font-monospace">#{index + 1}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
