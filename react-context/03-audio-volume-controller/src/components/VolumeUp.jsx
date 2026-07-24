import { useContext } from 'react';
import { VolumeContext } from '../context/VolumeContext';
export default function VolumeUp() {
  const { increaseVolume } = useContext(VolumeContext);
  return (
    <button className="btn btn-success mx-2" onClick={increaseVolume}>
      Volume Up (+)
    </button>
  );
}
