import * as actionTypes from '../actions/actionTypes';

const initialState = {
    conceptInfo: [],
    loading: false
}

const fetchConceptInfoStart = (state,action) => {
    return{
        ...state,
        loading: true
    };
};

const fetchConceptInfoSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        conceptInfo: action.conceptInfo,
    };
};

const fetchConceptInfoFail = (state,action) =>{
    return {
        ...state,
        loading:false
    };
};

const reducer = (state= initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_CONCEPT_INFO_START: return fetchConceptInfoStart(state, action);
        case actionTypes.FETCH_CONCEPT_INFO_SUCCESS: return fetchConceptInfoSuccess(state, action);
        case actionTypes.FETCH_CONCEPT_INFO_FAIL: return fetchConceptInfoFail(state, action);
        default: return state;
    }
};
export default reducer;