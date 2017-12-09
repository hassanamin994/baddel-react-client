import React from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions/index';
import FacebookAuth from './facebook_auth';


class Signin extends React.Component {
    
    handleFormSubmit = ({email, password}) => {
        console.log(email, password);
        this.props.signinUser(email, password)
    }

    renderAlert = () => {
        const errorMessage = this.props.errorMessage ;
        if(!errorMessage) return;
        return (
            <div className="alert alert-danger">
                {errorMessage ? errorMessage : ''}
            </div>
        )
    }

    render = () => {
        const { handleSubmit, fields: { email, password }} = this.props;
        return (
            <div className="container-fluid" >
                <div className="row-fluid">
                    <form onSubmit={handleSubmit(this.handleFormSubmit)} >
                        <fieldset className="form-group">
                            <label>Email</label>
                            <input {...email} className="form-control"/>
                        </fieldset>

                        <fieldset className="form-group">
                            <label>password</label>
                            <input {...password} className="form-control"/>
                        </fieldset>
                        {this.renderAlert()}
                        <input type="submit" value="Sign In"/>
                    </form>
                </div>
                <div className="row-fluid">
                    <FacebookAuth />
                </div>
            </div>                 
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);