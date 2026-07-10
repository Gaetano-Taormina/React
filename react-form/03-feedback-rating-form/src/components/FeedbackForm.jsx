import { useState } from 'react';

export default function FeedbackForm() {
  const [rating, setRating] = useState("5");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const numRating = parseInt(rating, 10);
    let reply = "Grazie per il tuo feedback!";
    if (numRating >= 4) reply = "Siamo felicissimi che la tua esperienza sia stata eccellente!";
    else if (numRating === 3) reply = "Grazie per la recensione, cercheremo di migliorare.";
    else reply = "Ci dispiace per l'esperienza negativa, ti contatteremo per risolvere!";
    setSubmitted({ rating: numRating, comment, reply });
  };

  return (
    <div className="container py-4">
      <div className="card shadow-sm p-4">
        <h3 className="card-title text-primary mb-3">Esercizio 3: Feedback & Recensioni</h3>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-medium d-block">Voto (da 1 a 5 stelle):</label>
              <div className="d-flex gap-3">
                {[1, 2, 3, 4, 5].map(star => (
                  <div key={star} className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rating"
                      id={`r-${star}`}
                      value={star.toString()}
                      checked={rating === star.toString()}
                      onChange={(e) => setRating(e.target.value)}
                    />
                    <label className="form-check-label fw-bold" htmlFor={`r-${star}`}>{star}★</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="comm" className="form-label">Commento opzionale:</label>
              <textarea
                id="comm"
                className="form-control"
                rows={3}
                placeholder="Scrivi qui cosa ne pensi..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Invia Feedback</button>
          </form>
        ) : (
          <div className="alert alert-info mb-0">
            <h5 className="alert-heading fw-bold">Risposta Personalizzata:</h5>
            <p className="mb-2">{submitted.reply}</p>
            <hr />
            <p className="small mb-2"><strong>Voto registrato:</strong> {submitted.rating}/5★</p>
            {submitted.comment && <p className="small mb-2"><strong>Commento:</strong> "{submitted.comment}"</p>}
            <button className="btn btn-sm btn-outline-primary mt-2" onClick={() => setSubmitted(null)}>
              Nuova Recensione
            </button>
          </div>
        )}
      </div>
    </div>
  );
}