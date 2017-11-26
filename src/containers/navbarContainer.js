import React from 'react'
import Navbar from '../components/navbar';
import { fetchCategories } from '../actions/categories';
import { connect } from 'react-redux';


class NavbarContainer extends React.Component {

    componentWillMount = () => {
        this.props.fetchCategories();
    }

    render() {
        return (
            <Navbar {... this.props } items={this.props.categories} />
        ); 
    }
}

function mapStateToProps(state) {
    return {categories: state.categories};
}

export default connect(mapStateToProps, {fetchCategories})(NavbarContainer);