import { FETCH_CATEGORIES, FETCH_ERROR } from './types';
import { API_ROOT } from '../config/index';
import axios from 'axios';

export const fetchCategories = () => {
    const token = localStorage.getItem('token');
    const headers =  {authorization: token};
    return (dispatch) => {

        axios.get(`${API_ROOT}/categories`, { headers })
        .then(response => {
            console.log(response);
            dispatch({type: FETCH_CATEGORIES, payload: response.data});
        })
        .catch(err => {
            dispatch({type: FETCH_ERROR, payload: err});
        })

    };
}