export default function PhonebookDirectory() {
  const contatti = [
    { id: 1, nome: "Giulia", cognome: "Verdi", telefono: "+39 340 1234567", email: "giulia.v@example.com", categoria: "Lavoro" },
    { id: 2, nome: "Marco", cognome: "Rossi", telefono: "+39 333 9876543", email: "marco.rossi@example.com", categoria: "Famiglia" },
    { id: 3, nome: "Anna", cognome: "Bianchi", telefono: "+39 328 4567890", email: "anna.b@example.com", categoria: "Amici" },
    { id: 4, nome: "Luca", cognome: "Verdi", telefono: "+39 349 1122334", email: "luca.verdi@example.com", categoria: "Famiglia" },
    { id: 5, nome: "Beatrice", cognome: "Neri", telefono: "+39 335 5566778", email: "bea.neri@example.com", categoria: "Lavoro" },
    { id: 6, nome: "Davide", cognome: "Gialli", telefono: "+39 347 8899001", email: "davide.g@example.com", categoria: "Amici" }
  ];
  const contattiOrdinati = [...contatti].sort((a, b) => {
    const compareCognome = a.cognome.localeCompare(b.cognome);
    if (compareCognome !== 0) return compareCognome;
    return a.nome.localeCompare(b.nome);
  });
  const getBadgeColor = (categoria) => {
    switch (categoria) {
      case 'Lavoro': return 'bg-primary';
      case 'Famiglia': return 'bg-success';
      case 'Amici': return 'bg-info text-dark';
      default: return 'bg-secondary';
    }
  };
  return (
    <div className="container py-5">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center border-bottom pb-3 mb-5">
        <div>
          <h1 className="fw-bold text-dark mb-1"> Rubrica Telefonica</h1>
          <p className="text-muted mb-0">Contatti ordinati alfabeticamente per cognome e nome</p>
        </div>
        <div className="mt-3 mt-md-0">
          <span className="badge bg-dark fs-6 px-3 py-2 shadow-sm">
            {contattiOrdinati.length} Contatti salvati
          </span>
        </div>
      </div>
      <div className="row g-4">
        {contattiOrdinati.map(contatto => (
          <div key={contatto.id} className="col-12 col-md-6 col-lg-4">
            <div className="card shadow-sm border-0 h-100 p-4 rounded-4 position-relative">
              <span className={`badge ${getBadgeColor(contatto.categoria)} position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill shadow-sm`}>
                {contatto.categoria}
              </span>
              
              <div className="d-flex align-items-center gap-3 mb-3">
                <div 
                  className="bg-light text-primary rounded-circle d-flex align-items-center justify-content-center fw-bold fs-4 shadow-sm"
                  style={{ width: '56px', height: '56px' }}
                >
                  {contatto.nome[0]}{contatto.cognome[0]}
                </div>
                <div>
                  <h2 className="h5 fw-bold text-dark mb-0">{contatto.cognome} {contatto.nome}</h2>
                  <span className="text-muted small">ID Contatto: #{contatto.id}</span>
                </div>
              </div>
              <hr className="text-secondary opacity-25 my-2" />
              <div className="mt-3 d-flex flex-column gap-2">
                <div className="d-flex align-items-center gap-2 text-secondary">
                  <span></span>
                  <a href={`tel:${contatto.telefono}`} className="text-decoration-none fw-medium text-dark">
                    {contatto.telefono}
                  </a>
                </div>
                <div className="d-flex align-items-center gap-2 text-secondary">
                  <span>️</span>
                  <a href={`mailto:${contatto.email}`} className="text-decoration-none text-muted small">
                    {contatto.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
