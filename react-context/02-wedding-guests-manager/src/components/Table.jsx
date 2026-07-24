import { useContext } from 'react';
import { GuestsContext } from '../context/GuestsContext';
export default function Table({ table }) {
  const { markGuestArrived } = useContext(GuestsContext);
  return (
    <div className="card mb-3">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title">{table.name}</h5>
          <p className="card-text mb-0">
            Arrived: {table.arrived} / {table.expected}
          </p>
        </div>
        <button 
          className="btn btn-primary" 
          onClick={() => markGuestArrived(table.id)}
          disabled={table.arrived >= table.expected}
        >
          {table.arrived >= table.expected ? 'All Arrived' : 'Guest Arrived'}
        </button>
      </div>
    </div>
  );
}
