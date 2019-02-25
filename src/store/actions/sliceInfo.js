import axios from 'axios';
import { BASE_URL }from '../../shared/constants';

import *as actionTypes from './actionTypes';

export const fetchSliceInfoStart = () =>{
    return{
        type: actionTypes.FETCH_SLICE_INFO_START
    };
};

export const fetchSliceInfoSuccess = (sliceInfo) =>{
    return{
        type: actionTypes.FETCH_SLICE_INFO_SUCESS,
        sliceInfo : sliceInfo
    };
};

export const fetchSliceInfoFail = (error) =>{
    return{
        type: actionTypes.FETCH_SLICE_INFO_FAIL,
        error: error
    };
};

export const fetchSliceInfo = ( dataUrl) =>{
    return dispatch => {
       dispatch(fetchSliceInfoStart);
       console.log(dataUrl+".json")
       axios.get(BASE_URL + dataUrl + ".json")
         .then(response => {
             console.log(response.data);
             dispatch(fetchSliceInfoSuccess(response.data));
         })
         .catch(error => {
              dispatch(fetchSliceInfoFail(error));
         });
    };
};