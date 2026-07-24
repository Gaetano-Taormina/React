import { useContext } from 'react';
import { TrafficLightContext } from '../context/TrafficLightContext';
export default function TrafficLightViewer() {
  const { color } = useContext(TrafficLightContext);
  const getOpacity = (targetColor) => (color === targetColor ? '1' : '0.2');
  return (
    <div className="d-flex flex-column align-items-center bg-dark p-3 rounded" style={{ width: '100px', margin: '0 auto' }}>
      <div className="rounded-circle bg-danger mb-2" style={{ width: '60px', height: '60px', opacity: getOpacity('red') }}></div>
      <div className="rounded-circle bg-warning mb-2" style={{ width: '60px', height: '60px', opacity: getOpacity('yellow') }}></div>
      <div className="rounded-circle bg-success" style={{ width: '60px', height: '60px', opacity: getOpacity('green') }}></div>
    </div>
  );
}
