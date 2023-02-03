import './App.css'
import CitySelector from "./components/CitySelector/";
import BackgroundRain from "./components/BackgroundRain/";
import BackgroundSnow from "./components/BackgroundSnow/";
import BackgroundCloud from "./components/BackgroundCloud/";

function App() {
  return (
    <div className="App text-center">
      <h1 className="font-bold">APP DEL CLIMA</h1>
      {/* <BackgroundRain /> */}
      {/* <BackgroundSnow /> */}
      <BackgroundCloud />
      <CitySelector />
    </div>
  );
}

export default App
