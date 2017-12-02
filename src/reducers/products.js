import { FETCH_PRODUCT, FETCH_PRODUCTS, CREATE_PRODUCT, PRODUCT_ERROR } from '../actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_PRODUCT:
            return { ...state, error: '', currentProduct: action.payload };
        case CREATE_PRODUCT: 
            return { ...state, error: '', currentProduct: action.paload };
        case PRODUCT_ERROR: 
            return { ...state, error: action.payload };
        case FETCH_PRODUCTS:
            return { ...state, error: '', products: action.payload };
            
    }

    return state;
}