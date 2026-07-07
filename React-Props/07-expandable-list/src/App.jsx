import ExpandableList from './components/ExpandableList';

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
