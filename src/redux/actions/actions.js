import { DELETE_CITY, ADD_CITY, SELECTED_CITY } from "./types";

export function addCity(city) {
  return {
    type: ADD_CITY,
    payload: city,
  };
}

export function deleteCity(id) {
  return {
    type: DELETE_CITY,
    payload: id,
  };
}

export const selectedCity = (city) => async (dispatch) => {
  const APIKEY = "b08d19a14cd7ae896b7e4b1c1c5aa351";
  console.log("en action city");
  console.log(city);
  // const res = await fetch(
  //   `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`
  // );
  // const res = await fetch(
  //   `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`
  // );3163858

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=${APIKEY}`
  );
  console.log(res);
  const data = await res.json();
  console.log(data);
  return dispatch({
    type: SELECTED_CITY,
    payload: data,
  });
};
