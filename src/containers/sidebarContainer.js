import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/categories';
import Sidebar from '../components/sidebar';

class SidebarContainer extends React.Component {

    render() {
        return (
            <Sidebar categories={this.props.categories} />
        );
    }
}

const mapState = (state) => {
    return {categories: state.categories};
}

export default connect(mapState, actions)(SidebarContainer);