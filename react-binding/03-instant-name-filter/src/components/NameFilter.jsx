import { useState } from 'react';
const NAMES = ["Alice Rossi", "Marco Bianchi", "Giulia Verdi", "Luca Neri", "Elena Ferrari"];
export default function NameFilter() {
  const [search, setSearch] = useState("");
  const filtered = NAMES.filter(n => n.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="container py-4">
      <div className="card shadow-sm p-4">
        <h3 className="card-title text-primary mb-3">Esercizio 3: Filtro Nomi</h3>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Filtra per nome..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul className="list-group">
          {filtered.length ? (
            filtered.map((name, idx) => <li key={idx} className="list-group-item">{name}</li>)
          ) : (
            <li className="list-group-item text-muted fst-italic">Nessun risultato</li>
          )}
        </ul>
      </div>
    </div>
  );
}