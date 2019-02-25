import * as actionTypes from '../actions/actionTypes';



const initialState = {
    loading:false,
    success:null,
    sliceData: [],

}
const querySliceStart = (state, action)=>{
    return {
        ...state,
        ...{loading:true
           }
    };
};

const querySliceSuccess = (state, action)=>{

    return {
        ...state,
        ...{
            loading: false,
            users: action.sliceData,
            success: action.status
           
        }
        
    };
};

 const querySliceFail = (state,action) =>{
     return {
         ...state,
         ...{loading: false}
         
     };
 };


 
 const reducer = (state = initialState, action) =>{
     switch(action.type){
        case actionTypes.QUERY_SLICE_START: return querySliceStart(state, action);
        case actionTypes.QUERY_SLICE_SUCCESS: return querySliceSuccess(state, action);
        case actionTypes.QUERY_SLICE_FAIL: return querySliceFail(state,action);
        default: return state;
     }
 }
 export default reducer;