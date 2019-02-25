import * as actionTypes from '../actions/actionTypes';

const initialState = {
    datasets: [],
    loading: false
}

const fetchDatasetsStart = (state,action) => {
    return{
        ...state,
        loading: true
    };
};

const fetchDatasetsSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        datasets: action.datasets
    };
};

const fetchDatasetsFail = (state,action) =>{
    return {
        ...state,
        loading:false
    };
};

const reducer = (state= initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_DATASET_START: return fetchDatasetsStart(state, action);
        case actionTypes.FETCH_DATASET_SUCCESS: return fetchDatasetsSuccess(state, action);
        case actionTypes.FETCH_DATASET_FAIL: return fetchDatasetsFail(state, action);
        default: return state;
    }
};
export default reducer;