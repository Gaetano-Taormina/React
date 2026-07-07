import { useState } from 'react';

export default function Counter({ initialValue = 0, step = 1 }) {
  const [count, setCount] = useState(initialValue);

  return (
    <div className="card shadow-sm p-4 text-center mb-3 border-0">
      <h3 className="card-title text-secondary">Contatore con Reset</h3>
      <div className="display-3 fw-bold text-primary my-3">{count}</div>
      <div className="d-flex justify-content-center gap-2">
        <button className="btn btn-primary px-4 fw-bold shadow-sm" onClick={() => setCount(c => c + step)}>
          +{step} Incrementa
        </button>
        <button className="btn btn-outline-secondary px-3 fw-bold" onClick={() => setCount(initialValue)}>
           Reset
        </button>
      </div>
    </div>
  );
}
