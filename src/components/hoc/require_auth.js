import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
    class Authentication extends React.Component {
        render() {
            console.log('rendering')
            return (
                <ComposedComponent {...this.props} />
            )
        }

        componentWillMount() {
            if(!this.props.authenticated) {
                browserHistory.push('/signin');
            }
        }    
        componentWillUpdate(nextPorps) {
            if(!nextPorps.authenticated) {
                browserHistory.push('/signin');
            }
        }
    }

    function mapStateToProps(state) {
        return { authenticated: state.auth.authenticated } ;
    }

    return connect(mapStateToProps)(Authentication);
}