export default function TournamentLeaderboard() {
  const partecipanti = [
    { id: 1, nome: "Alex Rossi", punteggioTotale: 2450, partiteGiocate: 30, vittorie: 24, sconfitte: 6 },
    { id: 2, nome: "Sara Bianchi", punteggioTotale: 2890, partiteGiocate: 30, vittorie: 28, sconfitte: 2 },
    { id: 3, nome: "Luca Verdi", punteggioTotale: 2100, partiteGiocate: 30, vittorie: 20, sconfitte: 10 },
    { id: 4, nome: "Elena Neri", punteggioTotale: 2650, partiteGiocate: 30, vittorie: 26, sconfitte: 4 },
    { id: 5, nome: "Marco Gialli", punteggioTotale: 1850, partiteGiocate: 30, vittorie: 18, sconfitte: 12 }
  ];
  const partecipantiOrdinati = [...partecipanti].sort((a, b) => b.punteggioTotale - a.punteggioTotale);
  const getMedal = (pos) => {
    if (pos === 0) return "";
    if (pos === 1) return "";
    if (pos === 2) return "";
    return `#${pos + 1}`;
  };
  return (
    <div className="container py-5" style={{ maxWidth: '850px' }}>
      <div className="card shadow-sm border-0 p-4">
        <div className="border-bottom pb-3 mb-4 d-flex justify-content-between align-items-center">
          <h1 className="h3 fw-bold text-dark mb-0"> Classifica Risultati Torneo</h1>
          <span className="badge bg-primary px-3 py-2 fs-6">Stagione 2026</span>
        </div>
        
        <div className="table-responsive">
          <table className="table table-hover align-middle text-center mb-0">
            <thead className="table-light">
              <tr>
                <th scope="col" className="text-start">Posizione & Giocatore</th>
                <th scope="col">Punteggio Totale</th>
                <th scope="col">Partite Giocate</th>
                <th scope="col">Vittorie / Sconfitte</th>
                <th scope="col">Win Rate</th>
              </tr>
            </thead>
            <tbody>
              {partecipantiOrdinati.map((giocatore, index) => {
                const winRate = ((giocatore.vittorie / giocatore.partiteGiocate) * 100).toFixed(0);
                return (
                  <tr key={giocatore.id} className={index === 0 ? "table-warning fw-bold" : ""}>
                    <td className="text-start py-3">
                      <span className="fs-5 me-2">{getMedal(index)}</span>
                      <span className="fw-semibold text-dark">{giocatore.nome}</span>
                    </td>
                    <td>
                      <span className="badge bg-success fs-6 px-3 py-2 shadow-sm">
                        {giocatore.punteggioTotale} pt
                      </span>
                    </td>
                    <td className="text-muted fw-medium">{giocatore.partiteGiocate}</td>
                    <td>
                      <span className="text-success fw-bold">{giocatore.vittorie}V</span>
                      <span className="text-muted mx-1">/</span>
                      <span className="text-danger fw-bold">{giocatore.sconfitte}S</span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center justify-content-center gap-2">
                        <div className="progress" style={{ width: '60px', height: '6px' }}>
                          <div className="progress-bar bg-primary" style={{ width: `${winRate}%` }}></div>
                        </div>
                        <span className="small font-monospace">{winRate}%</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
