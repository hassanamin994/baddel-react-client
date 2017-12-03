import React from 'react';
import { Link } from 'react-router';
import LoadingComponent from './common/loading';


export default class Navbar extends React.Component {


    renderItem = (item) => {
        return (
            <li key={item.name}><Link to={'/categories/' + item.name}>{item.name}</Link></li>
        )
    }

    render = () => {
        var items = this.props.items;
        if(!items) {
            console.log('loading')
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
                        <li className="active"><a href="index.html">Home	</a></li>
                        <li className=""><a href="list-view.html">List View</a></li>
                        <li className=""><a href="grid-view.html">Grid View</a></li>
                        <li className=""><a href="three-col.html">Three Column</a></li>
                        <li className=""><a href="four-col.html">Four Column</a></li>
                    </ul>
                    <form action="#" className="navbar-search pull-left">
                        <input type="text" placeholder="Search" className="search-query span2" />
                    </form>
                    <ul className="nav pull-right">
                        <li className="dropdown">
                            <a data-toggle="dropdown" className="dropdown-toggle" href="#"><span className="icon-lock"></span> Login <b className="caret"></b></a>
                            <div className="dropdown-menu">
                            <form className="form-horizontal loginFrm">
                                <div className="control-group">
                                <input type="text" className="span2" id="inputEmail" placeholder="Email" />
                                </div>
                                <div className="control-group">
                                <input type="password" className="span2" id="inputPassword" placeholder="Password" />
                                </div>
                                <div className="control-group">
                                <label className="checkbox">
                                <input type="checkbox" /> Remember me
                                </label>
                                <button type="submit" className="shopBtn btn-block">Sign in</button>
                                </div>
                            </form>
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}