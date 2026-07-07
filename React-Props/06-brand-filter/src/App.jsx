import BrandFilterList from './components/BrandFilterList';

export default function App() {
  const catalogo = [
    { id: 1, name: "MacBook Pro M3", brand: "Apple", price: 2499.00 },
    { id: 2, name: "Galaxy S24 Ultra", brand: "Samsung", price: 1399.00 },
    { id: 3, name: "iPad Air", brand: "Apple", price: 699.00 },
    { id: 4, name: "Bravia XR OLED", brand: "Sony", price: 1899.00 },
    { id: 5, name: "Galaxy Book 4", brand: "Samsung", price: 1199.00 },
    { id: 6, name: "PlayStation 5 Pro", brand: "Sony", price: 799.00 }
  ];

  return (
    <div className="container py-5" style={{ maxWidth: '800px' }}>
      <h1 className="text-center mb-2 fw-bold text-dark">Esercizio 6: Filtro Marca</h1>
      <p className="text-center text-muted mb-4">Filtro dinamico a tendina con <code>event.target.value</code> e Bootstrap</p>
      <BrandFilterList articles={catalogo} />
    </div>
  );
}
