import Counter from './components/Counter';

export default function App() {
  return (
    <div className="container py-5" style={{ maxWidth: '600px' }}>
      <h1 className="text-center mb-4 fw-bold text-dark">Esercizio 1: Contatore</h1>
      <Counter initialValue={0} step={1} />
      <Counter initialValue={10} step={5} />
    </div>
  );
}
