import { FETCH_PRODUCT, FETCH_ERROR } from '../actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_PRODUCT:
            return { ...state, currentProduct: action.payload };
            
    }

    return state;
}