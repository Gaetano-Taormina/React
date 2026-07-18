import { useState } from 'react';
export default function StyleToggleButton({ label, classA, classB }) {
  const [isClassA, setIsClassA] = useState(true);
  return (
    <button 
      className={`btn btn-${isClassA ? classA : classB} w-100 py-3 fw-bold shadow-sm transition`} 
      onClick={() => setIsClassA(!isClassA)}
    >
      {label} ({isClassA ? classA : classB})
    </button>
  );
}
