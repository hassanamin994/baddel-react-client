import { FETCH_PRODUCT, FETCH_ERROR } from './types';
import { API_ROOT } from '../config/index';
import axios from 'axios';

export const fetchProduct = (id) => {
    const token = localStorage.getItem('token');
    const headers =  {authorization: token};
    
    return (dispatch) => {
        axios.get(`${API_ROOT}/products/${id}`, { headers })
        .then(product => {
            dispatch({ type: FETCH_PRODUCT, payload: product.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_ERROR, payload: err });
        })
    }
    
}