import axios from "axios";
import {
  FILTER_BY_TEMPERAMENT,
  GET_DOGS,
  GET_DOGS_BY_ID,
  GET_DOGS_BY_NAME,
  GET_TEMPERAMENTS,
  ORDER_BY_NAME,
  ORDER_BY_WEIGHT,
} from "./actions-types";

export const getDogs = () => {
  return async function (dispatch) {
    const res = await axios.get("/dogs");
    return dispatch({
      type: GET_DOGS,
      payload: res.data,
    });
  };
};

export const getTemperaments = () => {
  return async function (dispatch) {
    const res = await axios.get("/temperaments");
    return dispatch({
      type: GET_TEMPERAMENTS,
      payload: res.data,
    });
  };
};

export const filterByTemperament = (payload) => {
  return {
    type: FILTER_BY_TEMPERAMENT,
    payload,
  };
};

export const getDogsByName = (payload) => {
  return async function (dispatch) {
    const res = await axios.get(`/dogs?name=${payload}`);
    return dispatch({
      type: GET_DOGS_BY_NAME,
      payload: res.data,
    });
  };
};

export const orderByName = (payload) => {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
};

export const orderByWeight = (payload) => {
  return {
    type: ORDER_BY_WEIGHT,
    payload,
  };
};

export const getDogsById = (id) => {
  return async function (dispatch) {
    const res = await axios.get(`/dogs/${id}`);
    return dispatch({
      type: GET_DOGS_BY_ID,
      payload: res.data,
    });
  };
};

export const postDog = (payload) => {
  return async function () {
    const res = await axios.post("/dogs", payload);
    return res;
  };
};
