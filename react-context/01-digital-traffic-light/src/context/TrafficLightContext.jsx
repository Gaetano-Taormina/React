import { createContext, useState } from 'react';
export const TrafficLightContext = createContext();
export function TrafficLightProvider({ children }) {
  const [color, setColor] = useState('red');
  return (
    <TrafficLightContext.Provider value={{ color, setColor }}>
      {children}
    </TrafficLightContext.Provider>
  );
}
