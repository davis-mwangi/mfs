import axios from 'axios';
import { BASE_URL }from '../../shared/constants';

import *as actionTypes from './actionTypes';

export const fetchDatasetInfoStart = () =>{
    return{
        type: actionTypes.FETCH_DATASET_INFO_START
    };
};

export const fetchDatasetInfoSuccess = (datasetInfo) =>{
    return{
        type: actionTypes.FETCH_DATASET_INFO_SUCCESS,
        datasetInfo : datasetInfo
    };
};

export const fetchDatasetInfoFail = (error) =>{
    return{
        type: actionTypes.FETCH_DATASET_INFO_FAIL,
        error: error
    };
};

export const fetchDatasetInfo = ( dataUrl) =>{
    return dispatch => {
       dispatch(fetchDatasetInfoStart);
       console.log(dataUrl+".json")
       axios.get(BASE_URL + dataUrl + ".json")
         .then(response => {
             console.log(response.data);
             dispatch(fetchDatasetInfoSuccess(response.data));
         })
         .catch(error => {
              dispatch(fetchDatasetInfoFail(error));
         });
    };
};