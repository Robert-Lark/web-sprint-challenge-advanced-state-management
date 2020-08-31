import axios from "axios";

export const FETCH_SMURF_DATA = "FETCH_SMURF_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";

export const fetchSmurfData = () => {
	return {
		type: FETCH_SMURF_DATA,
	};
};

export const fetchDataSuccess = (data) => {
	return {
		type: FETCH_DATA_SUCCESS,
		payload: data,
	};
};

export const fetchDataFailure = (error) => {
	return {
		type: FETCH_DATA_FAILURE,
		payload: error,
	};
};

export const postSmurfSuccess = (data) => {
	return {
		type: POST_SMURF_SUCCESS,
		payload: data,
	};
};

export const APICall = () => {
	return (dispatch) => {
		dispatch(fetchSmurfData());
		axios
			.get("http://localhost:3333/smurfs")
			.then((response) => {
				const smurf = response;
				console.log(smurf);
				dispatch(fetchDataSuccess(smurf));
			})
			.catch((error) => {
				console.log("oh uh", error);
				dispatch(fetchDataFailure(error));
			});
	};
};

export const PostReq = (data) => {
	return (dispatch) => {
		dispatch({});
		axios
			.post("http://localhost:3333/smurfs")
			.then((response) => {
				const smurf = response.data;
				console.log(smurf);
				dispatch(postSmurfSuccess(smurf));
			})
			.catch((error) => {
				console.log("oh uh", error);
				dispatch(fetchDataFailure(error));
			});
	};
};
