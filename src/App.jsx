import "./App.css";
//import CitySelector from "./components/CitySelector/";
import BackgroundRain from "./components/BackgroundRain/";
import BackgroundSnow from "./components/BackgroundSnow/";
import BackgroundCloud from "./components/BackgroundCloud/";
import BackgroundSun from "./components/BackgroundSun/";
import { useDispatch, useSelector } from "react-redux";
import DayAndWeekWeather from "./components/DayAndWeekWeather";
import DataWeather from "./components/DataWeather";
import Time from "./components/Time";
import Temp from "./components/Temp";
import { useEffect, useState } from "react";
import * as actions from "./redux/actions/actions";

function App() {
  const state = useSelector((state) => state.selectedCity);

  const APIKEY = "b08d19a14cd7ae896b7e4b1c1c5aa351";

  const [city, setCity] = useState({
    coord: { lat: "-31.4135", lon: "-64.1811" },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${e.target[0].value}&appid=${APIKEY}`
    );
    const data = await res.json();
    setCity(data);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.selectedCity(city));
  }, [city]);

  const condition = state.city?.name && state.list[0].weather[0].main;

  return (
    <div className="App text-center">
      <h1 className="font-bold">WEATHER APP (DEH)</h1>
      {condition === "Clear" ? (
        <BackgroundSun />
      ) : condition === "Drizzle" ||
        condition === "Thunderstorm" ||
        condition === "Rain" ? (
        <BackgroundRain />
      ) : condition === "Snow" ? (
        <BackgroundSnow />
      ) : condition === "Clouds" ? (
        <BackgroundCloud />
      ) : null}
      <div>
        <div
          className={`flex flex-col sm:flex-row flex-wrap rounded-3xl bg-black bg-opacity-70 py-2 mx-10 md:mx-32 text-white justify-center `}
        >
          <form onSubmit={handleSubmit} className="w-full">
            <label
              className="font-extrabold tracking-widest"
              htmlFor="cityInput"
            >
              CITY SELECTOR{" "}
            </label>
            <input
              className="text-black text-center w-1/4 ml-9 "
              type="text"
              name="cityInput"
              id="cityInput"
            />
          </form>
        </div>

        <div>
          {state.city?.name && (
            <div>
              <h1>Ciudad de {state.city?.name}</h1>
              <Temp
                temp={(state.list[0].main?.temp - 273.15).toFixed(2)}
                max={(state.list[0].main?.temp_max - 273.15).toFixed(2)}
                min={(state.list[0].main?.temp_min - 273.15).toFixed(2)}
              />
              <Time />
              <DataWeather
                humidity={state.main?.humidity}
                pressure={state.main?.pressure}
                feels={(state.main?.feels_like - 273.15).toFixed(2)}
              />
            </div>
          )}
          <DayAndWeekWeather />
        </div>
      </div>
    </div>
  );
}

export default App;
