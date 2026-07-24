import { createContext, useState } from 'react';
export const VolumeContext = createContext();
export function VolumeProvider({ children }) {
  const [volume, setVolume] = useState(50); // Default to 50
  const increaseVolume = () => {
    setVolume(prev => (prev < 100 ? prev + 10 : 100));
  };
  const decreaseVolume = () => {
    setVolume(prev => (prev > 0 ? prev - 10 : 0));
  };
  return (
    <VolumeContext.Provider value={{ volume, increaseVolume, decreaseVolume }}>
      {children}
    </VolumeContext.Provider>
  );
}
