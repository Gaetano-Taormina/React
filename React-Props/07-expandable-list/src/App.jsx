import { useState } from 'react';

function ExpandableList({ items, initialLimit = 3 }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedItems = isExpanded ? items : items.slice(0, initialLimit);

  return (
    <div className="card shadow-sm p-4 border-0">
      <h3 className="card-title mb-3 fw-bold text-dark">Lista Funzionalità</h3>
      <ul className="list-group list-group-flush mb-3">
        {displayedItems.map((item, idx) => (
          <li key={idx} className="list-group-item d-flex align-items-center gap-2 px-0">
            <span className="badge bg-success rounded-circle p-1">✓</span>
            <span className="text-secondary fw-medium">{item}</span>
          </li>
        ))}
      </ul>
      {items.length > initialLimit && (
        <button 
          className="btn btn-outline-primary fw-bold py-2 w-100 shadow-sm" 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "🔼 Mostra meno" : `🔽 Mostra tutti (${items.length})`}
        </button>
      )}
    </div>
  );
}

export default function App() {
  const features = [
    "Design Responsive con Bootstrap 5",
    "Supporto per HMR e Vite",
    "Componenti React Riutilizzabili",
    "Gestione Dinamica dello Stato",
    "Styling Pulito e Minimale",
    "Accessibilità e Best Practices",
    "Struttura Modulare e Organizzata"
  ];

  return (
    <div className="container py-5" style={{ maxWidth: '500px' }}>
      <h1 className="text-center mb-4 fw-bold text-dark">Esercizio 7: Lista Espandibile</h1>
      <ExpandableList items={features} initialLimit={3} />
    </div>
  );
}
