import { useState } from 'react';
const INITIAL_GUESTS = [
  { id: 1, name: "Chiara Neri", present: true },
  { id: 2, name: "Roberto Mancini", present: false },
  { id: 3, name: "Sofia Martini", present: false }
];
export default function GuestList() {
  const [guests, setGuests] = useState(INITIAL_GUESTS);
  const [newName, setNewName] = useState("");
  const handleAdd = (e) => {
    e.preventDefault();
    if (!newName.trim()) return;
    setGuests([...guests, { id: Date.now(), name: newName.trim(), present: false }]);
    setNewName("");
  };
  const togglePresent = (id) => {
    setGuests(guests.map(g => g.id === id ? { ...g, present: !g.present } : g));
  };
  const arrived = guests.filter(g => g.present);
  const expected = guests.filter(g => !g.present);
  return (
    <div className="container py-4">
      <div className="card shadow-sm p-4">
        <h3 className="card-title text-primary mb-3">Esercizio 6: Lista Invitati</h3>
        <form onSubmit={handleAdd} className="mb-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Nome nuovo invitato..."
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Aggiungi</button>
          </div>
        </form>
        <h6 className="text-success fw-bold">Arrivati ({arrived.length})</h6>
        <ul className="list-group mb-3">
          {arrived.map(g => (
            <li key={g.id} className="list-group-item d-flex justify-content-between align-items-center list-group-item-success">
              <span>{g.name}</span>
              <button className="btn btn-sm btn-outline-secondary" onClick={() => togglePresent(g.id)}>Segna assente</button>
            </li>
          ))}
          {!arrived.length && <li className="list-group-item text-muted small fst-italic">Nessuno arrivato</li>}
        </ul>
        <h6 className="text-warning-emphasis fw-bold">Ancora Attesi ({expected.length})</h6>
        <ul className="list-group">
          {expected.map(g => (
            <li key={g.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{g.name}</span>
              <button className="btn btn-sm btn-success" onClick={() => togglePresent(g.id)}>Segna presente</button>
            </li>
          ))}
          {!expected.length && <li className="list-group-item text-muted small fst-italic">Tutti gli invitati sono arrivati!</li>}
        </ul>
      </div>
    </div>
  );
}