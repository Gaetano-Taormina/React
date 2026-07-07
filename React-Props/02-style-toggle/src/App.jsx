import StyleToggleButton from './components/StyleToggleButton';

export default function App() {
  return (
    <div className="container py-5" style={{ maxWidth: '500px' }}>
      <h1 className="text-center mb-4 fw-bold text-dark">Esercizio 2: Toggle Classe CSS</h1>
      <div className="card shadow-sm p-4 border-0">
        <p className="text-muted text-center mb-4">Clicca sui bottoni per alternare la classe Bootstrap:</p>
        <div className="d-flex flex-column gap-3">
          <StyleToggleButton label="Stile Stato" classA="primary" classB="success" />
          <StyleToggleButton label="Stile Allerta" classA="warning" classB="danger" />
          <StyleToggleButton label="Stile Tema" classA="dark" classB="info" />
        </div>
      </div>
    </div>
  );
}
