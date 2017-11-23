import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class Signout extends React.Component {

    componentWillMount = () => {
        this.props.signOut();
    }

    render() {
        return <div> Sorry to see you go...</div>
    }
}



export default connect(null, actions)(Signout)