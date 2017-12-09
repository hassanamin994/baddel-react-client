import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, DEAUTH_USER } from './types';
import axios from 'axios';

export const API_URL = 'http://localhost:3000/api';  

export const signinUser =  (email, password) => {
    return (dispatch) => {

        // Submit email/password to server
        axios.post(`${API_URL}/auth/signin`, {email, password})
        .then( res => {
            // If request is good...
            // - update state to indicate authentication
            // - save JWT token
            // - redirect to route '/feature'
            
            dispatch({type: AUTH_USER, payload: res.data.user});
            localStorage.setItem('token', res.data.token);
            browserHistory.push('/feature');
        })
        .catch(err => {
            // If request is bad
            // - Show error to user     
            console.log('error', err)
            dispatch(authError('Bad login info!'))
        });
    }
}

export const authError = (error) => {    
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export const signOut = () => {
    localStorage.removeItem('token');
    browserHistory.push('/');
    return {
        type: DEAUTH_USER
    }
}


export const signupUser = ({ email, password }) => {
    return (dispatch) => {

        axios.post(`${API_URL}/auth/signup`, {email, password})
        .then( response => {
            dispatch({ type: AUTH_USER, payload: response.data.user });
            localStorage.setItem('token', response.data.token);
            browserHistory.push('/');
        })
        .catch(err => {
             return dispatch(authError(err.response.data.error));
        });
    };
};

export const authenticateByFacebook = (accessToken) => {
    return (dispatch) => {
        // send access token to api to register/signup, 
        // exchange facebook access token with 
        // JWT token and save in localstorage
        // then redirect to root route
        axios.post(`${API_URL}/auth/facebook`, {accessToken})
        .then(res =>  {
            localStorage.setItem('token', res.data.token)
            browserHistory.push('/');
            return dispatch({ type: AUTH_USER, payload: res.data.user });
        })
        .catch(err => dispatch(authError(err.text)) )
    }    
};