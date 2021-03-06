import { AUTH_USER, DEAUTH_USER, AUTH_ERROR } from '../actions/types';

export default function (state = {}, action) {
    switch(action.type) {
        case AUTH_USER:
            return { ...state, authenticated: true,  error: '', user: action.payload };
        case DEAUTH_USER:
            return { ...state, authenticated: false,  error: '', user: {} };
        case AUTH_ERROR: 
            return { ...state, error: action.payload };
    }
    return state;
}