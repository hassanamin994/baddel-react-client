import React from 'react';
import FacebookLogin from 'react-facebook-login';
import * as actions from '../../actions/index';
import { connect } from 'react-redux';


 
class FacebookAuth extends React.Component {
    render() {
        return  <FacebookLogin
                    appId="308382066232253"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={this.responseFacebook} />
    }
    
    responseFacebook = (response) => {
        this.props.authenticateByFacebook(response.accessToken);
    }
}

export default connect(null, actions)(FacebookAuth);