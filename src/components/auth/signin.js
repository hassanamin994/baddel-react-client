import React from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions/index';

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