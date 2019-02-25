import axios from 'axios';
import * as actionTypes  from './actionTypes';

export const querySliceStart = ()=>{
  return{
      type: actionTypes.QUERY_SLICE_START
  };
};


export const querySliceSuccess = (sliceData,status)=>{
    return{
        type: actionTypes.QUERY_SLICE_SUCCESS,
        sliceData: sliceData,
        status:status
   
    }
}    
export const querySliceFail = (error) =>{
    return {
        type: actionTypes.QUERY_SLICE_FAIL,
        error: error
    }
}

export const querySlice= (formData)=>{
    return dispatch =>{
        dispatch(querySliceStart());       
        axios.post('https://reqres.in/api/users', formData)
           .then(response =>{
               console.log(response.status);
               dispatch( querySliceSuccess(response.data, response.status));
                                      
           })
           .catch(error =>{
               dispatch(querySliceFail(error));
           });
           
    
    };
};

