import {
  FILTER_BY_TEMPERAMENT,
  GET_DOGS,
  GET_DOGS_BY_ID,
  GET_DOGS_BY_NAME,
  GET_TEMPERAMENTS,
  ORDER_BY_NAME,
  ORDER_BY_WEIGHT,
} from "./actions-types";

const initialState = {
  dogs: [],
  temperaments: [],
  allDogs: [],
  dogDetail: [],
  dogsDb: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      action.payload.forEach((dog) => {
        if (!dog.temperaments[0]) {
          dog.temperaments[0] = "Unknown";
        }
      });
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
      };

    case GET_TEMPERAMENTS:
      const temperaments = action.payload.filter((temp) => temp.name !== "");
      return {
        ...state,
        temperaments: temperaments,
      };

    case FILTER_BY_TEMPERAMENT:
      const allDogs = state.allDogs;
      const dogsFilter = [];
      if (action.payload === "All") {
        return {
          ...state,
          dogs: allDogs,
        };
      } else {
        allDogs.forEach((dog) => {
          if (dog.temperaments.includes(action.payload)) {
            dogsFilter.push(dog);
          }
        });
        return {
          ...state,
          dogs: dogsFilter,
        };
      }

    case GET_DOGS_BY_NAME:
      return {
        ...state,
        dogs: action.payload,
      };

    case ORDER_BY_NAME:
      const dogsOrder =
        action.payload === "A-Z"
          ? state.allDogs.sort((a, b) => {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              return 0;
            })
          : state.allDogs.sort((a, b) => {
              if (a.name > b.name) return -1;
              if (a.name < b.name) return 1;
              return 0;
            });
      return {
        ...state,
        dogs: dogsOrder,
      };

    case ORDER_BY_WEIGHT:
      const orderedWeight =
        action.payload === "Min-Max"
          ? state.allDogs.sort((a, b) => {
              if (a.weight > b.weight) return 1;
              if (a.weight < b.weight) return -1;
              return 0;
            })
          : state.allDogs.sort((a, b) => {
              if (a.weight > b.weight) return -1;
              if (a.weight < b.weight) return 1;
              return 0;
            });
      return {
        ...state,
        dogs: orderedWeight,
      };

    case GET_DOGS_BY_ID:
      let details = action.payload;
      if (!details[0].temperaments[0]) {
        details[0].temperaments[0] = "Unknown";
      }
      return {
        ...state,
        dogDetail: details,
      };

    default:
      return state;
  }
};

export default rootReducer;
