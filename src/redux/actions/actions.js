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

  // const res = await fetch(
  //   `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`
  // );
  // const res = await fetch(
  //   `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`
  // );3163858

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=${APIKEY}`
  );
  console.log(res);
  const data = await res.json();
  console.log(data);
  return dispatch({
    type: SELECTED_CITY,
    payload: data,
  });
};
