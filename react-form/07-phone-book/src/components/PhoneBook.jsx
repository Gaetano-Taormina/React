import { useState } from 'react';

export default function PhoneBook() {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Dott. Bianchi", phone: "333 1234567" },
    { id: 2, name: "Ufficio", phone: "02 9876543" }
  ]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setContacts([...contacts, { id: Date.now(), name: name.trim(), phone: phone.trim() }]);
    setName("");
    setPhone("");
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  return (
    <div className="container py-4">
      <div className="card shadow-sm p-4">
        <h3 className="card-title text-primary mb-3">Esercizio 7: Rubrica Telefonica</h3>
        <form onSubmit={handleAdd} className="mb-4">
          <div className="row g-2 mb-2">
            <div className="col-6">
              <input type="text" className="form-control" placeholder="Nome contatto" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="col-6">
              <input type="tel" className="form-control" placeholder="Numero telefono" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100">Salva Contatto</button>
        </form>

        <h6 className="text-secondary fw-bold mb-2">Contatti Salvati ({contacts.length}):</h6>
        <ul className="list-group">
          {contacts.map(c => (
            <li key={c.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{c.name}</strong> <span className="text-muted d-block small">{c.phone}</span>
              </div>
              <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(c.id)}>Elimina</button>
            </li>
          ))}
          {!contacts.length && <li className="list-group-item text-muted fst-italic">Rubrica vuota</li>}
        </ul>
      </div>
    </div>
  );
}