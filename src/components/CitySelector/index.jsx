import React, { Children, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/actions";
import Temp from "../Temp/";
import Time from "../Time";
import DataWeather from "../DataWeather";
import HourWeather from "../HourWeather";
import WeekWeather from "../WeekWeather";

export default function CitySelector() {
  const state = useSelector((state) => state.selectedCity);

  const [city, setCity] = useState("Cordoba");

  const handleChange = (e) => {
    setCity(e.target.value);
  };



  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.selectedCity(city));
  }, [city]);

  return (
    <div>
      <div
        className={`flex flex-col sm:flex-row flex-wrap rounded-3xl bg-black bg-opacity-70 py-2 mx-10 md:mx-32 text-white justify-center `}
      >
        <h1 className="font-extrabold tracking-widest">CITY SELECTOR</h1>
        <input
          className="text-black text-center w-1/4 ml-9 uppercase "
          type="text"
          name="cityInput"
          id="cityInput"
        />
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
        <HourWeather />
        <WeekWeather />
      </div>
    </div>
  );
}

// export const mapStateToProps = (state) => {
//   return {
//     selectedCity: state.selectedCity,
//   };
// };

// export const mapDispatchToProps = (dispatch) => {
//   return {
//     selectedCity: function (city) {
//       dispatch(actions.selectedCity(city));
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CitySelector);
