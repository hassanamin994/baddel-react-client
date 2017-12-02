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
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">WebSiteName</Link>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        {items.map(item => this.renderItem(item))}
                    </ul>
                </div>
            </nav>
        );
    }
}