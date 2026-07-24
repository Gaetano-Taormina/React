import { createContext, useState } from 'react';
export const GuestsContext = createContext();
const initialTables = [
  { id: 1, name: 'Table 1', expected: 4, arrived: 0 },
  { id: 2, name: 'Table 2', expected: 5, arrived: 0 },
  { id: 3, name: 'Table 3', expected: 2, arrived: 0 },
];
export function GuestsProvider({ children }) {
  const [tables, setTables] = useState(initialTables);
  const markGuestArrived = (tableId) => {
    setTables(tables.map(table => 
      table.id === tableId && table.arrived < table.expected 
        ? { ...table, arrived: table.arrived + 1 } 
        : table
    ));
  };
  const totalArrived = tables.reduce((acc, table) => acc + table.arrived, 0);
  const totalExpected = tables.reduce((acc, table) => acc + table.expected, 0);
  return (
    <GuestsContext.Provider value={{ tables, markGuestArrived, totalArrived, totalExpected }}>
      {children}
    </GuestsContext.Provider>
  );
}
