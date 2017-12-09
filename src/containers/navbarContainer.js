import React from 'react'
import Navbar from '../components/navbar';
import { fetchCategories } from '../actions/categories';
import { getCategoriesSelector } from '../reducers/categories';
import { connect } from 'react-redux';


class NavbarContainer extends React.Component {

    componentWillMount = () => {
        this.props.fetchCategories();
    }

    render() {
        return (
            <Navbar {... this.props } items={this.props.categories} authenticated={this.props.authenticated} />
        ); 
    }
}

function mapStateToProps(state) {
    return {categories: getCategoriesSelector(state), auth: state.auth};
}

export default connect(mapStateToProps, {fetchCategories})(NavbarContainer);