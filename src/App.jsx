import "./App.css";
import CitySelector from "./components/CitySelector/";
import BackgroundRain from "./components/BackgroundRain/";
import BackgroundSnow from "./components/BackgroundSnow/";
import BackgroundCloud from "./components/BackgroundCloud/";
import BackgroundSun from "./components/BackgroundSun/";

function App() {
  //POSIBLES RESPUESTAS DE LA API
  // Thunderstorm;// Drizzle;// Rain;
  // Snow;
  // Mist; // Smoke; // Haze; // Dust; // Fog; 
  // Ash; // Squall; // Tornado;// Dust;// Sand; 
  // Clear;
  // Clouds;

// condition DEBE TOMAR VALOR QUE DEVUELVE LA API 
  const condition = "Clouds";
  return (
    <div className="App text-center">
      <h1 className="font-bold">WEATHER APP (DEH)</h1>
      {condition === "Clear" ? <BackgroundSun /> 
       : condition === "Drizzle" ||
        condition === "Thunderstorm" ||
        condition === "Rain" ? (
        <BackgroundRain />
      ) : condition === "Snow" ? (
        <BackgroundSnow />
      ) : condition === "Clouds" ? (
        <BackgroundCloud />
      ) : null}
      <CitySelector />
    </div>
  );
}

export default App;
