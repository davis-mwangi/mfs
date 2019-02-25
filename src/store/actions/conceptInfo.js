import axios from 'axios';
import { BASE_URL }from '../../shared/constants';

import *as actionTypes from './actionTypes';

export const fetchConceptInfoStart = () =>{
    return{
        type: actionTypes.FETCH_CONCEPT_INFO_START
    };
};

export const fetchConceptInfoSuccess = (conceptInfo) =>{
    return{
        type: actionTypes.FETCH_CONCEPT_INFO_SUCCESS,
        conceptInfo : conceptInfo
    };
};

export const fetchConceptInfoFail = (error) =>{
    return{
        type: actionTypes.FETCH_CONCEPT_INFO_FAIL,
        error: error
    };
};

export const fetchConceptInfo = ( dataUrl) =>{
    return dispatch => {
       dispatch(fetchConceptInfoStart);
       console.log(dataUrl+".json")
       axios.get(BASE_URL + dataUrl + ".json")
         .then(response => {
             console.log(response.data);
             dispatch(fetchConceptInfoSuccess(response.data));
         })
         .catch(error => {
              dispatch(fetchConceptInfoFail(error));
         });
    };
};