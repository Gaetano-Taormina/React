import { useState } from 'react';

export default function NameMerger() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  return (
    <div className="container py-4">
      <div className="card shadow-sm p-4">
        <h3 className="card-title text-primary mb-3">Esercizio 5: Unione Nome</h3>
        <div className="row g-2 mb-3">
          <div className="col-6">
            <input type="text" className="form-control" placeholder="Nome" value={first} onChange={(e) => setFirst(e.target.value)} />
          </div>
          <div className="col-6">
            <input type="text" className="form-control" placeholder="Cognome" value={last} onChange={(e) => setLast(e.target.value)} />
          </div>
        </div>
        <div className="alert alert-primary mb-0 text-center">
          <strong>Nome completo: </strong>
          {first || last ? `${first} ${last}`.trim() : <span className="text-muted fst-italic">Inserisci i dati</span>}
        </div>
      </div>
    </div>
  );
}