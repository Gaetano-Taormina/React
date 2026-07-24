import { useContext } from 'react';
import { TrafficLightContext } from '../context/TrafficLightContext';
export default function ColorButton({ targetColor, label, btnClass }) {
  const { setColor } = useContext(TrafficLightContext);
  return (
    <button className={`btn ${btnClass} m-2`} onClick={() => setColor(targetColor)}>
      {label}
    </button>
  );
}
