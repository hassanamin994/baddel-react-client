import superagent from 'superagent';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, DEAUTH_USER } from './types';

const API_URL = 'http://localhost:3000/api';  

export const signinUser =  (email, password) => {
    return (dispatch) => {

        // Submit email/password to server
        superagent.post(`${API_URL}/auth/signin`)
            .send({email, password})
        .end((err, res) => {
            if(err) {
                // If request is bad
                // - Show error to user     
                console.log('error', err)
                dispatch(authError('Bad login info!'))
                return;
            }
            // If request is good...
            // - update state to indicate authentication
            // - save JWT token
            // - redirect to route '/feature'
            
            dispatch({type: AUTH_USER});
            localStorage.setItem('token', res.body.token);
            browserHistory.push('/feature');
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
    return {
        type: DEAUTH_USER
    }
}


export const signupUser = ({ email, password }) => {
    return (dispatch) => {
        superagent.post(`${API_URL}/auth/signup`)
        .send({email, password})
        .end((err, response) => {
            console.log(response);
            if (err) {
                return dispatch(authError(response.body.error));
            }

            dispatch({type: AUTH_USER});
            localStorage.setItem('token', response.body.token);
            browserHistory.push('/');
        });
    };
};

export const authenticateByFacebook = (accessToken) => {
    return (dispatch) => {
        // send access token to api to register/signup, 
        // exchange facebook access token with 
        // JWT token and save in localstorage
        // then redirect to root route
        superagent.post(`${API_URL}/auth/facebook`)
        .send({accessToken})
        .end((err, res) => {
            if(err) {
                return dispatch(authError(res.text));
            }

            localStorage.setItem('token', res.body.token)
            browserHistory.push('/');
            return dispatch({type: AUTH_USER});
        })
    }    
};