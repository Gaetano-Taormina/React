export default function SplitTaskManager() {
  const tasks = [
    { id: 1, titolo: "Progettare l'architettura dei componenti", completata: true },
    { id: 2, titolo: "Configurare il routing con React Router", completata: true },
    { id: 3, titolo: "Implementare la chiamata API per i prodotti", completata: false },
    { id: 4, titolo: "Scrivere i test di unità per i reducer", completata: false },
    { id: 5, titolo: "Ottimizzare il bundle per la produzione", completata: false },
    { id: 6, titolo: "Revisione del design responsive", completata: true }
  ];

  const taskDaSvolgere = tasks.filter(t => !t.completata);
  const taskCompletate = tasks.filter(t => t.completata);

  return (
    <div className="container py-5" style={{ maxWidth: '850px' }}>
      <div className="text-center mb-5">
        <h1 className="fw-bold text-dark">️ Task Manager Separato</h1>
        <p className="text-muted">Gestione e suddivisione automatica delle attività tramite <code>.filter()</code></p>
      </div>

      <div className="row g-4">
        {/* To Do Section */}
        <div className="col-12 col-md-6">
          <div className="card shadow-sm border-0 h-100 p-4 border-top border-warning border-4">
            <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
              <h2 className="h4 fw-bold text-dark mb-0"> Da Svolgere</h2>
              <span className="badge bg-warning text-dark rounded-pill fs-6">
                {taskDaSvolgere.length}
              </span>
            </div>
            
            {taskDaSvolgere.length === 0 ? (
              <p className="text-muted fst-italic text-center my-auto py-4">Nessuna attività pendente!</p>
            ) : (
              <ul className="list-group list-group-flush">
                {taskDaSvolgere.map(task => (
                  <li key={task.id} className="list-group-item py-3 px-2 d-flex align-items-center gap-2">
                    <span className="badge bg-light text-dark border">⏱️</span>
                    <span className="fw-medium text-dark">{task.titolo}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Completed Section */}
        <div className="col-12 col-md-6">
          <div className="card shadow-sm border-0 h-100 p-4 border-top border-success border-4 bg-light bg-opacity-50">
            <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
              <h2 className="h4 fw-bold text-success mb-0"> Completate</h2>
              <span className="badge bg-success rounded-pill fs-6">
                {taskCompletate.length}
              </span>
            </div>
            
            {taskCompletate.length === 0 ? (
              <p className="text-muted fst-italic text-center my-auto py-4">Nessuna attività completata.</p>
            ) : (
              <ul className="list-group list-group-flush bg-transparent">
                {taskCompletate.map(task => (
                  <li key={task.id} className="list-group-item bg-transparent py-3 px-2 d-flex align-items-center gap-2">
                    <span className="text-success"></span>
                    <span className="text-decoration-line-through text-muted fst-italic">{task.titolo}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
