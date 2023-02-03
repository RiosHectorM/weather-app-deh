import './App.css'
import CitySelector from "./components/CitySelector/";
import BackgroundRain from "./components/BackgroundRain/";

function App() {
  return (
    <div className="App text-center">
      <h1 className="font-bold">APP DEL CLIMA</h1>
      <BackgroundRain />
      <CitySelector />
    </div>
  );
}

export default App
