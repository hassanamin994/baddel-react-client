import _ from 'lodash';
import { FETCH_CATEGORIES, FETCH_ERROR } from '../actions/types';

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_CATEGORIES:
            const categories = _.keyBy(action.payload, 'name');
            return {...state, ...categories };
    }
    
    return state;
};