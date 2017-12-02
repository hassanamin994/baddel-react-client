import { FETCH_PRODUCT, PRODUCT_ERROR, CREATE_PRODUC, FETCH_PRODUCTS } from './types';
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
            const newProduct = product.data;
            dispatch({ type: CREATE_PRODUCT, payload: newProduct });
            browserHistory.push(`/products/${newProduct._id}`);
        })
        .catch(err => {
            console.log(err);
            dispatch(productError('Something went wrong while creating the product ' + err ));
        })
    }
}

export const editProduct = (id, values) => {
    const headers = getHeaders();

    return (dispatch) => {
        axios.patch(`${API_ROOT}/products/${id}`, values, { headers } )
        .then(product => {
            const newProduct = product.data;
            dispatch({ type: CREATE_PRODUCT, payload: newProduct });
            browserHistory.push(`/products/${id}`);            
        })
        .catch(err => {
            console.log(err);
            dispatch(productError('Something went wrong while updating the product ' + err ))
        })
    }
}

export const fetchProducts = (page) => {
    return (dispatch) => {
        const params = { page };
        axios.get(`${API_ROOT}/products`, { params })
        .then(products => {

            dispatch({
                type: FETCH_PRODUCTS,
                payload: products.data
            });
        })
        .catch(err => {
            dispatch(productError('Error while fetching products'))
            console.log(err)
        });
    }
} 


const productError = (err) => {
    return {
        type: PRODUCT_ERROR,
        payload: err
    };
}

function getHeaders() {

    const token = localStorage.getItem('token');
    const headers =  {authorization: token};
    
    return headers;
}