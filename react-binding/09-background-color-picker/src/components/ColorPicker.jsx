import { useState } from 'react';
const COLORS = [
  { name: "Bianco", class: "bg-white text-dark", btn: "btn-outline-dark" },
  { name: "Grigio", class: "bg-light text-dark", btn: "btn-secondary" },
  { name: "Azzurro", class: "bg-info-subtle text-dark", btn: "btn-info" },
  { name: "Scuro", class: "bg-dark text-white", btn: "btn-dark" }
];
export default function ColorPicker() {
  const [color, setColor] = useState(COLORS[0]);
  return (
    <div className={`min-vh-100 py-4 ${color.class}`}>
      <div className="container">
        <div className="card shadow-sm p-4 text-dark bg-white">
          <h3 className="card-title text-primary mb-3">Esercizio 9: Colore Sfondo</h3>
          <div className="d-flex gap-2 justify-content-center">
            {COLORS.map((c, idx) => (
              <button key={idx} className={`btn ${c.btn}`} onClick={() => setColor(c)}>
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}