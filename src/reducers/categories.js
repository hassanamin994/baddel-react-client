import _ from 'lodash';
import { createSelector } from 'reselect';
import { FETCH_CATEGORIES, FETCH_ERROR } from '../actions/types';

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_CATEGORIES:
            // const categories = _.keyBy(action.payload, 'name');
            // return {...state, ...categories };
            return action.payload;
    }
    
    return state;
};

export const getCategoriesSelector = createSelector(
    state => state.categories,
    categories => categories
);
