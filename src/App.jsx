import './App.css'
import CitySelector from "./components/CitySelector/";
import Background from "./components/Background/";

function App() {
  return (
    <div className="App text-center">
      <h1 className='font-bold'>APP DEL CLIMA</h1>
      <Background />
      <CitySelector />
    </div>
  );
}

export default App
