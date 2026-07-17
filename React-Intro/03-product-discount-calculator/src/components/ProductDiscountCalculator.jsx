export default function ProductDiscountCalculator() {
  const prodotto = {
    nome: "Cuffie Wireless Noise-Cancelling Pro",
    descrizione: "Cuffie bluetooth audio Hi-Res con cancellazione attiva del rumore e autonomia di 40 ore.",
    prezzoOriginale: 199.99,
    scontoPercentuale: 20
  };
  const prezzoScontato = prodotto.prezzoOriginale * (1 - prodotto.scontoPercentuale / 100);
  return (
    <div className="container py-5" style={{ maxWidth: '600px' }}>
      <article className="card shadow-sm border-0 p-4">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h1 className="h4 fw-bold text-dark mb-0">{prodotto.nome}</h1>
          <span className="badge bg-danger fs-6 px-3 py-2 shadow-sm">
            -{prodotto.scontoPercentuale}%
          </span>
        </div>
        
        <p className="text-muted my-3">{prodotto.descrizione}</p>
        
        <hr className="text-secondary opacity-25" />
        
        <div className="d-flex align-items-baseline justify-content-between mt-2">
          <div>
            <span className="text-muted d-block small">Prezzo di listino</span>
            <span className="text-decoration-line-through text-secondary fs-5">
              € {prodotto.prezzoOriginale.toFixed(2)}
            </span>
          </div>
          <div className="text-end">
            <span className="text-success fw-bold d-block small text-uppercase">Offerta speciale</span>
            <span className="display-6 fw-bold text-success">
              € {prezzoScontato.toFixed(2)}
            </span>
          </div>
        </div>
        
        <button className="btn btn-primary w-100 mt-4 py-2 fw-bold shadow-sm">
           Aggiungi al carrello
        </button>
      </article>
    </div>
  );
}
