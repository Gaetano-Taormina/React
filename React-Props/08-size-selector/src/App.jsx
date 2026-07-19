import SizeSelector from './components/SizeSelector';
export default function App() {
  const taglie = ["S", "M", "L", "XL", "XXL"];
  return (
    <div className="container py-5" style={{ maxWidth: '450px' }}>
      <h1 className="text-center mb-4 fw-bold text-dark">Esercizio 8: Taglie</h1>
      <SizeSelector sizes={taglie} onSizeSelect={(s) => console.log("Selezionata:", s)} />
    </div>
  );
}
