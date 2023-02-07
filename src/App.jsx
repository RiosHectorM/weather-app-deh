import "./App.css";
import BackgroundRain from "./components/BackgroundRain/";
import BackgroundSnow from "./components/BackgroundSnow/";
import BackgroundCloud from "./components/BackgroundCloud/";
import BackgroundSun from "./components/BackgroundSun/";
import { useDispatch, useSelector } from "react-redux";
import DayAndWeekWeather from "./components/DayAndWeekWeather";
import DataWeather from "./components/DataWeather";
import Temp from "./components/Temp";
import { useEffect, useState } from "react";
import * as actions from "./redux/actions/actions";

import { motion } from "framer-motion";
import { slideIn, zoomIn } from "./constants/motion";

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

  const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  options.timeZoneName = "short";
  const now = date.toLocaleString("en-US", options);
  const datesplit = now.split(",")  

  return (
    <div className="App text-center">
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
      <div className="pt-2">
        <motion.div
          variants={zoomIn(0, 1)}
          initial="hidden"
          whileInView="show"
          className={`flex flex-col sm:flex-row rounded-3xl bg-black bg-opacity-70 py-2 mx-10 md:mx-20 text-white lg:mx-32 justify-center`}
        >
          <form onSubmit={handleSubmit} className="w-full justify-center flex sm:flex-row flex-col">
            <label
              className="font-extrabold tracking-widest pr-2"
              htmlFor="cityInput"
            >
              CITY SELECTOR
            </label>
            <input
              className="text-black text-center sm:w-1/4 w-3/4 self-center"
              type="text"
              name="cityInput"
              id="cityInput"
            />
          </form>
        </motion.div>

        <div>
          {state.city?.name && (
            <div>
              <motion.div
                variants={slideIn("left", "spring", 0, 1)}
                initial="hidden"
                whileInView="show"
                className="font-extrabold flex flex-col sm:flex-row h-auto rounded-t-3xl bg-black bg-opacity-70 mx-10 md:mx-20 lg:mx-32 text-white sm:justify-around  justify-center my-2 py-2 align-middle"
              >
                <div className="flex sm:flex-col sm:w-auto w-full sm:justify-around  justify-start px-5">
                  <div className="pr-2">{datesplit[0]}</div>
                  <div>{datesplit[1]}</div>
                </div>
                <h1 className="text-3xl self-center">
                  Ciudad de {state.city?.name}
                </h1>
                <div className="flex justify-end px-5">
                  {state.list[0].weather[0].main &&
                    state.list[0].weather[0].main}
                </div>
              </motion.div>
              <Temp
                temp={(state.list[0].main?.temp - 273.15).toFixed(2)}
                max={(state.list[0].main?.temp_max - 273.15).toFixed(2)}
                min={(state.list[0].main?.temp_min - 273.15).toFixed(2)}
                feels={(state.list[0].main?.feels_like - 273.15).toFixed(2)}
              />
              <DataWeather
                humidity={state.list[0].main?.humidity}
                pressure={state.list[0].main?.pressure}
                visibility={(state.list[0].visibility / 1000).toFixed(2)}
                speed={(state.list[0].wind.speed * 3.6).toFixed(2)}
              />
            </div>
          )}
          <DayAndWeekWeather data={state} />
        </div>
      </div>
    </div>
  );
}

export default App;
