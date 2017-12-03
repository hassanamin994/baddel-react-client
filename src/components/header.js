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
            <div>
                <div className="navbar navbar-inverse navbar-fixed-top">
                    <div className="topNav">
                        <div className="container">
                            <div className="alignR">
                                <div className="pull-left socialNw">
                                    <a href="#"><span className="icon-twitter"></span></a>
                                    <a href="#"><span className="icon-facebook"></span></a>
                                    <a href="#"><span className="icon-youtube"></span></a>
                                    <a href="#"><span className="icon-tumblr"></span></a>
                                </div>
                                <a className="active" href="index.html"> <span className="icon-home"></span> Home</a> 
                                <a href="#"><span className="icon-user"></span> My Account</a> 
                                <Link to="/register"><span className="icon-edit"></span> Free Register </Link> 
                                <a href="contact.html"><span className="icon-envelope"></span> Contact us</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header">
                    <div className="row">
                        <div className="span4">
                            <h1>
                                <a className="logo" href="index.html"><span>Twitter Bootstrap ecommerce template</span> 
                                    <img src="/assets/img/logo-bootstrap-shoping-cart.png" alt="bootstrap sexy shop" />
                                </a>
                            </h1>
                        </div>
                        <div className="span4">
                            <div className="offerNoteWrapper">
                                <h1 className="dotmark">
                                    <i className="icon-cut"></i>
                                    Twitter Bootstrap shopping cart HTML template is available @ $14
                                </h1>
                            </div>
                        </div>
                        <div className="span4 alignR">
                            <p><br /> <strong> Support (24/7) :  0800 1234 678 </strong><br /><br /></p>
                            <span className="btn btn-mini">[ 2 ] <span className="icon-shopping-cart"></span></span>
                            <span className="btn btn-warning btn-mini">$</span>
                            <span className="btn btn-mini">&pound;</span>
                            <span className="btn btn-mini">&euro;</span>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);