import { FETCH_CATEGORIES, FETCH_ERROR } from './types';
import { API_ROOT } from '../config/index';
import axios from 'axios';

export const fetchCategories = () => {
    const token = localStorage.getItem('token');
    const headers =  {authorization: token};
    return (dispatch) => {

        axios.get(`${API_ROOT}/categories`, { headers })
        .then(categories => {
            console.log(categories);
            dispatch({type: FETCH_CATEGORIES, payload: categories});
        })
        .catch(err => {
            dispatch({type: FETCH_ERROR, payload: err});
        })

    };
}