import React from 'react'
import { Link } from 'react-router';

class Sidebar extends React.Component {

    render() {

        const { categories } = this.props;
        console.log('categories sidebar ', categories)
        return (
            <div id="sidebar">
                <div className="well well-small">
                    <ul className="nav nav-list">
                        {categories.map(category =>  {
                            return <li>
                                    <Link to={'/categories/' + category.id} >
                                        <span className="icon-chevron-right"></span>{category.name}
                                    </Link>
                                </li>
                        })}
                        
                        <li style={{border:0}}> &nbsp;</li>
                    </ul>
                </div>

                <div className="well well-small alert alert-warning cntr">
                    <h2>50% Discount</h2>
                    <p> 
                        only valid for online order. <br /><br /><a className="defaultBtn" href="#">Click here </a>
                    </p>
                </div>
                <div className="well well-small" ><a href="#"><img src="/assets/img/paypal.jpg" alt="payment method paypal" /></a></div>
                
                <a className="shopBtn btn-block" href="#">Upcoming products <br /><small>Click to view</small></a>
                <br />
                <br />
                <ul className="nav nav-list promowrapper">
                <li>
                <div className="thumbnail">
                    <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search"></span> QUICK VIEW</a>
                    <img src="/assets/img/bootstrap-ecommerce-templates.png" alt="bootstrap ecommerce templates" />
                    <div className="caption">
                    <h4><a className="defaultBtn" href="product_details.html">VIEW</a> <span className="pull-right">$22.00</span></h4>
                    </div>
                </div>
                </li>
                <li style={{border:0}}> &nbsp;</li>
                <li>
                <div className="thumbnail">
                    <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search"></span> QUICK VIEW</a>
                    <img src="/assets/img/shopping-cart-template.png" alt="shopping cart template" />
                    <div className="caption">
                    <h4><a className="defaultBtn" href="product_details.html">VIEW</a> <span className="pull-right">$22.00</span></h4>
                    </div>
                </div>
                </li>
                <li style={{border:0}}> &nbsp;</li>
                <li>
                <div className="thumbnail">
                    <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search"></span> QUICK VIEW</a>
                    <img src="/assets/img/bootstrap-template.png" alt="bootstrap template" />
                    <div className="caption">
                    <h4><a className="defaultBtn" href="product_details.html">VIEW</a> <span className="pull-right">$22.00</span></h4>
                    </div>
                </div>
                </li>
            </ul>

        </div>
        );
    }
}


export default Sidebar;