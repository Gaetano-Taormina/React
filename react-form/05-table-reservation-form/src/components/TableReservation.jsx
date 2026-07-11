import { useState } from 'react';

export default function TableReservation() {
  const [formData, setFormData] = useState({ name: "", guests: 2, date: "" });
  const [confirmed, setConfirmed] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.date) {
      setConfirmed(formData);
    }
  };

  return (
    <div className="container py-4">
      <div className="card shadow-sm p-4">
        <h3 className="card-title text-primary mb-3">Esercizio 5: Prenotazione Tavolo</h3>
        {!confirmed ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nome della Prenotazione</label>
              <input
                id="name"
                type="text"
                className="form-control"
                placeholder="Es. Mario Rossi"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="row g-2 mb-3">
              <div className="col-6">
                <label htmlFor="guests" className="form-label">Numero Ospiti</label>
                <input
                  id="guests"
                  type="number"
                  min="1"
                  max="20"
                  className="form-control"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                  required
                />
              </div>
              <div className="col-6">
                <label htmlFor="date" className="form-label">Data e Ora</label>
                <input
                  id="date"
                  type="datetime-local"
                  className="form-control"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100">Conferma Prenotazione</button>
          </form>
        ) : (
          <div className="alert alert-success mb-0">
            <h5 className="alert-heading fw-bold mb-3">Prenotazione Confermata! 🎉</h5>
            <ul className="list-unstyled mb-3">
              <li className="mb-1"><strong>Intestatario:</strong> {confirmed.name}</li>
              <li className="mb-1"><strong>Numero Ospiti:</strong> {confirmed.guests} persone</li>
              <li className="mb-1"><strong>Data e Ora:</strong> {new Date(confirmed.date).toLocaleString('it-IT')}</li>
            </ul>
            <button className="btn btn-sm btn-outline-success w-100" onClick={() => setConfirmed(null)}>
              Nuova Prenotazione
            </button>
          </div>
        )}
      </div>
    </div>
  );
}