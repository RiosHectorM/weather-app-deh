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
      <h1>City Selector</h1>
      <select
        value={Children.value}
        name="citySelector"
        id="citySelector"
        onChange={handleChange}
      >
        <option value="Cordoba">Cordoba</option>
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Bogota">Bogota</option>
        <option value="Mexico">Mexico</option>
        <option value="Madrid">Madrid</option>
        <option value="Barcelona">Barcelona</option>
        <option value="Sydney">Sydney</option>
      </select>
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
      <HourWeather />
      <WeekWeather />
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
