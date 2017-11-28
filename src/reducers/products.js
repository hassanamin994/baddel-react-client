import { FETCH_PRODUCT, CREATE_PRODUCT, PRODUCT_ERROR } from '../actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_PRODUCT:
            return { ...state, currentProduct: action.payload };
        case CREATE_PRODUCT: 
            return { ...state, currentProduct: action.paload}
        case PRODUCT_ERROR: 
            return { ...state, error: action.payload}
            
    }

    return state;
}