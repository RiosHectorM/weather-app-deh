import { DELETE_CITY, ADD_CITY, SELECTED_CITY } from "../actions/types";

const initialState = {
  selectedCity: {},
  compareCities: []
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_CITY:
      return {
        ...state,
        cities: [...state.cities, payload],
      };
    case DELETE_CITY:
      const filtered = state.cities.filter((city) => city.id !== payload);
      return {
        ...state,
        cities: filtered,
      };
    case SELECTED_CITY:
      return {
        ...state,
        selectedCity: payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
