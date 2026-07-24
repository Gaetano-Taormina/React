import { GuestsProvider, GuestsContext } from './context/GuestsContext';
import { useContext } from 'react';
import Table from './components/Table';
import TotalGuests from './components/TotalGuests';
function TableList() {
  const { tables } = useContext(GuestsContext);
  return (
    <div className="row">
      {tables.map(table => (
        <div className="col-md-4" key={table.id}>
          <Table table={table} />
        </div>
      ))}
    </div>
  );
}
function App() {
  return (
    <GuestsProvider>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Wedding Guests Manager</h1>
        <TotalGuests />
        <TableList />
      </div>
    </GuestsProvider>
  );
}
export default App;
