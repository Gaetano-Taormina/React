import { useContext } from 'react';
import { GuestsContext } from '../context/GuestsContext';
export default function TotalGuests() {
  const { totalArrived, totalExpected } = useContext(GuestsContext);
  return (
    <div className="alert alert-info text-center mt-4">
      <h4>Total Arrived Guests: {totalArrived} / {totalExpected}</h4>
    </div>
  );
}
