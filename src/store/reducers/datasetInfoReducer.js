import * as actionTypes from '../actions/actionTypes';

const initialState = {
    datasetInfo: [],
    slices:[],
    concepts:[],
    loading: false
}

const fetchDatasetInfoStart = (state,action) => {
    return{
        ...state,
        loading: true
    };
};

const fetchDatasetInfoSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        datasetInfo: action.datasetInfo,
        concepts: action.datasetInfo._embedded.concepts,
        slices: action.datasetInfo._embedded.slices
    };
};

const fetchDatasetInfoFail = (state,action) =>{
    return {
        ...state,
        loading:false
    };
};

const reducer = (state= initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_DATASET_INFO_START: return fetchDatasetInfoStart(state, action);
        case actionTypes.FETCH_DATASET_INFO_SUCCESS: return fetchDatasetInfoSuccess(state, action);
        case actionTypes.FETCH_DATASET_INFO_FAIL: return fetchDatasetInfoFail(state, action);
        default: return state;
    }
};
export default reducer;