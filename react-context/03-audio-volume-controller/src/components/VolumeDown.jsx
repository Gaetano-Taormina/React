import { useContext } from 'react';
import { VolumeContext } from '../context/VolumeContext';
export default function VolumeDown() {
  const { decreaseVolume } = useContext(VolumeContext);
  return (
    <button className="btn btn-danger mx-2" onClick={decreaseVolume}>
      Volume Down (-)
    </button>
  );
}
