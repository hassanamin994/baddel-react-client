import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends React.Component{

    renderAuthRoutes = () => {
        if (!this.props.authenticated) {
            return [
                <li className="nav-item" key={1}>
                    <Link to="/signin">Sign In</Link>
                </li>,
                <li className="nav-item" key={2}>
                    <Link to="/signup">Register</Link>
                </li>
            ]
        }

        return (
            <li className="nav-item">
                <Link to="/signout">Sign Out</Link>
                <Link to="/products/new">Add Product</Link>
            </li>
        )
    }
    render() {
        return (
            <nav className="navbar navbar-light" >
                <ul className="nav navbar-nav">
                    {this.renderAuthRoutes()}
                </ul>
            </nav>
        )
        ;
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);