import React from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions/index';


class Signup extends React.Component {

    renderField = (label, type, field) => {
        return (
            <fieldset className="form-group">
                <label >{label}: </label>
                <input {...field} type={type} className="form-control"/>
                {field.touched && field.error && <div className="alert alert-danger">{field.error}</div>}
            </fieldset>
        )
    }

    handleFormSubmit = ({email, password}) => {
        this.props.signupUser({email, password});
    }

    showAlert = (message) => {
        return (
            <div className="alert alert-danger">{message}</div>
        )
    }
    render() {
        const { 
            handleSubmit, 
            fields: {email, password, passwordConfirm }
        } = this.props;
        return (
            <form onSubmit={ handleSubmit(this.handleFormSubmit) }>
                {this.renderField('Email', 'text', email)}
                {this.renderField('Password', 'password', password)}
                {this.renderField('Confirm password', 'password', passwordConfirm)}
                {this.props.errorMessage && this.showAlert(this.props.errorMessage)}
                <input type="submit" className="btn btn-success" value="Sign up!"/>
            </form>
        )
    }
}


function validate(formProps) {
    const errors = {};

    // validate existance of fields
    Object.keys(formProps).forEach(key => {
        if(!formProps[key]){
            errors[key] = `${key} is required`;
        }
    });

    if(formProps.password !== formProps.passwordConfirm) {
        errors.passwordConfirm = 'Password must match!';
    }
    return errors;
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error
    }
}

export default reduxForm({
    form: 'signup',
    fields: ['email', 'password', 'passwordConfirm'],
    validate: validate
}, mapStateToProps, actions)(Signup);