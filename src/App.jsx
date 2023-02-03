import './App.css'
import CitySelector from "./components/CitySelector/";
import BackgroundRain from "./components/BackgroundRain/";
import BackgroundSnow from "./components/BackgroundSnow/";
import BackgroundCloud from "./components/BackgroundCloud/";
import BackgroundSun from "./components/BackgroundSun/";

function App() {
  return (
    <div className="App text-center">
      <h1 className="font-bold">APP DEL CLIMA</h1>
      {/* <BackgroundRain /> */}
      {/* <BackgroundSnow /> */}
      {/* <BackgroundCloud /> */}
      <BackgroundCloud />
      <CitySelector />
    </div>
  );
}

export default App
