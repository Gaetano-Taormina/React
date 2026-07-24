import { useContext } from 'react';
import { VolumeContext } from '../context/VolumeContext';
export default function VolumeDisplay() {
  const { volume } = useContext(VolumeContext);
  return (
    <div className="card text-center mb-4 p-4 bg-light">
      <h2>Volume: {volume}%</h2>
      <div className="progress mt-3">
        <div 
          className="progress-bar bg-info" 
          role="progressbar" 
          style={{ width: `${volume}%` }} 
          aria-valuenow={volume} 
          aria-valuemin="0" 
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}
