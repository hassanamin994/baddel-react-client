import { FETCH_PRODUCT, PRODUCT_ERROR, CREATE_PRODUCT } from './types';
import { browserHistory } from 'react-router';
import { API_ROOT } from '../config/index';
import axios from 'axios';

export const fetchProduct = (id) => {
    const headers = getHeaders();

    return (dispatch) => {
        axios.get(`${API_ROOT}/products/${id}`, { headers })
        .then(product => {
            dispatch({ type: FETCH_PRODUCT, payload: product.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: PRODUCT_ERROR, payload: 'Something went wrong while fetching the product ' + err });
        })
    }
    
}

export const createProduct = (product) => {
    const headers = getHeaders();

    return (dispatch) => {
        axios.post(`${API_ROOT}/products`, product, { headers })
        .then(product => {
            console.log(product);
            const newProduct = product.data;
            dispatch({ type: CREATE_PRODUCT, payload: newProduct });
            browserHistory.push(`/products/${newProduct._id}`);
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: PRODUCT_ERROR, payload: 'Something went wrong while creating the product ' + err });
        })
    }
}




function getHeaders() {

    const token = localStorage.getItem('token');
    const headers =  {authorization: token};
    
    return headers;
}