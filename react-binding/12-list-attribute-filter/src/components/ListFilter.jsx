import { useState } from 'react';
const ITEMS = [
  { id: 1, name: "MacBook Pro", cat: "Tech" },
  { id: 2, name: "Cuffie Sony", cat: "Tech" },
  { id: 3, name: "Felpa Cotone", cat: "Abbigliamento" },
  { id: 4, name: "Clean Code", cat: "Libri" }
];
export default function ListFilter() {
  const [category, setCategory] = useState("all");
  const filtered = category === "all" ? ITEMS : ITEMS.filter(i => i.cat === category);
  return (
    <div className="container py-4">
      <div className="card shadow-sm p-4">
        <h3 className="card-title text-primary mb-3">Esercizio 12: Filtro Categoria</h3>
        <select className="form-select mb-3" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">Tutte le categorie</option>
          <option value="Tech">Tech</option>
          <option value="Abbigliamento">Abbigliamento</option>
          <option value="Libri">Libri</option>
        </select>
        <ul className="list-group">
          {filtered.map(item => (
            <li key={item.id} className="list-group-item d-flex justify-content-between">
              <span>{item.name}</span>
              <span className="badge bg-secondary">{item.cat}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}