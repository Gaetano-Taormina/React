import { VolumeProvider } from './context/VolumeContext';
import VolumeDisplay from './components/VolumeDisplay';
import VolumeUp from './components/VolumeUp';
import VolumeDown from './components/VolumeDown';
function App() {
  return (
    <VolumeProvider>
      <div className="container mt-5" style={{ maxWidth: '600px' }}>
        <h1 className="text-center mb-4">Audio Volume Controller</h1>
        
        <VolumeDisplay />
        
        <div className="d-flex justify-content-center">
          <VolumeDown />
          <VolumeUp />
        </div>
      </div>
    </VolumeProvider>
  );
}
export default App;
