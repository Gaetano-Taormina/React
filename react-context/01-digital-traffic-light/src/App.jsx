import { TrafficLightProvider } from './context/TrafficLightContext';
import TrafficLightViewer from './components/TrafficLightViewer';
import ColorButton from './components/ColorButton';
function App() {
  return (
    <TrafficLightProvider>
      <div className="container text-center mt-5">
        <h1>Digital Traffic Light</h1>
        
        <div className="my-4">
          <TrafficLightViewer />
        </div>
        <div className="d-flex justify-content-center">
          <ColorButton targetColor="red" label="Red" btnClass="btn-danger" />
          <ColorButton targetColor="yellow" label="Yellow" btnClass="btn-warning" />
          <ColorButton targetColor="green" label="Green" btnClass="btn-success" />
        </div>
      </div>
    </TrafficLightProvider>
  );
}
export default App;
