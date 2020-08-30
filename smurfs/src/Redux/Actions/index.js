import axios from 'axios';

export const FETCH_SMURF_DATA = "FETCH_SMURF_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE ="FETCH_DATA_FAILURE";

export const fetchSmurfData = () => {
    return {
        type: FETCH_SMURF_DATA,
    }
}

export const fetchDataSuccess = (data) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data,
    }
}

export const fetchDataFailure = (error) => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error
,    }
}