import React from 'react';
import { Link } from 'react-router';
import LoadingComponent from './common/loading';
import Signin from './auth/signin';

export default class Navbar extends React.Component {


    renderItem = (item) => {
        return (
            <li key={item.name}><Link to={'/categories/' + item.name}>{item.name}</Link></li>
        )
    }

    getDropdown = () => {
        const { auth }= this.props;
        let dropdown;
        if(!auth.authenticated) {
            dropdown = <li className="dropdown">
                            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                                <span className="icon-lock"></span> 
                                Login 
                                <b className="caret"></b>
                            </a>
                            <div className="dropdown-menu">
                                <Signin />
                            </div>
                        </li>
        } else {
            dropdown = <li className="dropdown">
                            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                                    <div className="row">
                                        {auth.user.name || auth.user.email} 
                                        <b className="caret"></b>

                                    </div>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to="/signout">Logout</Link>
                                </li>
                            </ul>
                        </li>
        }

        return dropdown;
    }

    render = () => {
        let  { items, auth } = this.props;
        let dropdown = this.getDropdown();

        if(!items) {
            return <LoadingComponent />
        }
        

        return (
            <div className="navbar">
                <div className="navbar-inner">
                <div className="container">
                    <a data-target=".nav-collapse" data-toggle="collapse" className="btn btn-navbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    </a>
                    <div className="nav-collapse">
                    <ul className="nav">
                        <li><Link to="/">Home</Link></li>
                        {auth.authenticated && 
                            <li><Link to="/products/new">Add product</Link></li>
                        }
                    </ul>
                    
                    <ul className="nav pull-right">
                        <li>
                            <form action="#" className="navbar-search" style={{marginRight: "15px;"}}>
                                <input type="text" placeholder="Search" className="search-query span2" />
                            </form>
                        </li>
                        { dropdown }
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}