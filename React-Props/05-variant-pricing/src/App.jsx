import ProductCard from './components/ProductCard';
export default function App() {
  const variantiCuffie = [
    { name: "Nero Opaco (Standard)", surchargePercentage: 0 },
    { name: "Bianco Perla (Deluxe)", surchargePercentage: 15 },
    { name: "Oro Rosa (Limited Edition)", surchargePercentage: 30 }
  ];
  return (
    <div className="container py-5" style={{ maxWidth: '550px' }}>
      <h1 className="text-center mb-2 fw-bold text-dark">Esercizio 5: Calcolo Prezzo</h1>
      <p className="text-center text-muted mb-4">Uso di <code>event.target.value</code> e Bootstrap</p>
      <ProductCard
        productName="Cuffie Wireless Pro Max"
        basePrice={199.99}
        variants={variantiCuffie}
      />
    </div>
  );
}
