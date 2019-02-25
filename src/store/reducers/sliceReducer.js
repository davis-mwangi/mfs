import * as actionTypes from '../actions/actionTypes';

const initialState = {
    sliceInfo: [],
    loading: false
}

const fetchSliceInfoStart = (state,action) => {
    return{
        ...state,
        loading: true
    };
};

const fetchSliceInfoSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        sliceInfo: action.sliceInfo,
    };
};

const fetchSliceInfoFail = (state,action) =>{
    return {
        ...state,
        loading:false
    };
};

const reducer = (state= initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_SLICE_INFO_START: return fetchSliceInfoStart(state, action);
        case actionTypes.FETCH_SLICE_INFO_SUCESS: return fetchSliceInfoSuccess(state, action);
        case actionTypes.FETCH_SLICE_INFO_FAIL: return fetchSliceInfoFail(state, action);
        default: return state;
    }
};
export default reducer