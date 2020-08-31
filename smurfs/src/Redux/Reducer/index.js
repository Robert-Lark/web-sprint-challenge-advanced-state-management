import {
	FETCH_DATA_FAILURE,
	FETCH_DATA_SUCCESS,
	FETCH_SMURF_DATA,
	POST_SMURF_SUCCESS,
} from "../Actions/index";

export const initialState = {
    loading: false,
    data: null,
    error: '',
};

const Reducer = (state = initialState, action) => {
	switch (action.type) {
        case FETCH_SMURF_DATA:
            return {
                ...state,
                loading: true,
            }
            case FETCH_DATA_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    data: action.payload,
                    error: "",
                }
                case FETCH_DATA_FAILURE: 
                return {
                    ...state,
                    loading: false,
                    data: [],
                    error: action.payload,
                }
                case POST_SMURF_SUCCESS:
                    return {
                        ...state,
                        loading: false,
                        data: [...data, action.payload]
                    }
		default:
			return state;
    }
};

export default Reducer
