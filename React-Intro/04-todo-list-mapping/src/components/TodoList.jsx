export default function TodoList() {
  const tasks = [
    { id: 1, testo: "Completare gli esercizi di React-Intro", completata: true },
    { id: 2, testo: "Studiare la gestione dello Stato e le Props", completata: true },
    { id: 3, testo: "Creare il progetto finale di fine modulo", completata: false },
    { id: 4, testo: "Esercitarsi con lo styling in Bootstrap 5", completata: false },
    { id: 5, testo: "Fare push della repository su GitHub", completata: false }
  ];

  return (
    <section className="container py-5" style={{ maxWidth: '600px' }}>
      <div className="card shadow-sm border-0 p-4">
        <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
          <h1 className="h3 fw-bold text-primary mb-0"> Todo List</h1>
          <span className="badge bg-primary rounded-pill fs-6">
            {tasks.filter(t => t.completata).length} / {tasks.length}
          </span>
        </div>
        
        <ul className="list-group list-group-flush">
          {tasks.map(task => (
            <li 
              key={task.id} 
              className="list-group-item d-flex align-items-center gap-3 py-3 px-2 border-bottom-0 border-top-0"
            >
              <input 
                className="form-check-input fs-5 mt-0 shadow-sm" 
                type="checkbox" 
                checked={task.completata} 
                readOnly 
              />
              <span className={`fs-6 ${task.completata ? 'text-decoration-line-through text-muted fst-italic' : 'fw-medium text-dark'}`}>
                {task.testo}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
