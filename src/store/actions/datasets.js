import axios from 'axios';
import { BASE_URL }from '../../shared/constants';

import *as actionTypes from './actionTypes';

export const fetchDatasetStart = () =>{
    return{
        type: actionTypes.FETCH_DATASET_START
    };
};

export const fetchDatasetSuccess = (datasets) =>{
    return{
        type: actionTypes.FETCH_DATASET_SUCCESS,
        datasets :datasets
    };
};

export const fetchDatasetFail = (error) =>{
    return{
        type: actionTypes.FETCH_DATASET_FAIL,
        error: error
    };
};

export const fetchDatasets = () =>{
    return dispatch => {
       dispatch(fetchDatasetStart());
       axios.get(BASE_URL + "/data.json")
         .then(response => {
             //console.log(response);
             dispatch(fetchDatasetSuccess(response.data._embedded.datasets));
         })
         .catch(error => {
              dispatch(fetchDatasetFail(error));
         });
    };
};