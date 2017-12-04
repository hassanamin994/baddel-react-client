import React from 'react'


class Sidebar extends React.Component {

    render() {
        return (
            <div id="sidebar">
                <div className="well well-small">
                    <ul className="nav nav-list">
                        <li><a href="products.html"><span className="icon-chevron-right"></span>Fashion</a></li>
                        <li><a href="products.html"><span className="icon-chevron-right"></span>Watches</a></li>
                        <li><a href="products.html"><span className="icon-chevron-right"></span>Fine Jewelry</a></li>
                        <li><a href="products.html"><span className="icon-chevron-right"></span>Fashion Jewelry</a></li>
                        <li><a href="products.html"><span className="icon-chevron-right"></span>Engagement & Wedding</a></li>
                        <li><a href="products.html"><span className="icon-chevron-right"></span>Men's Jewelry</a></li>
                        <li><a href="products.html"><span className="icon-chevron-right"></span>Vintage & Antique</a></li>
                        <li><a href="products.html"><span className="icon-chevron-right"></span>Loose Diamonds </a></li>
                        <li><a href="products.html"><span className="icon-chevron-right"></span>Loose Beads</a></li>
                        <li><a href="products.html"><span className="icon-chevron-right"></span>See All Jewelry & Watches</a></li>
                        <li style={{border:0}}> &nbsp;</li>
                        <li> <a className="totalInCart" href="cart.html"><strong>Total Amount  <span className="badge badge-warning pull-right" style={{'line-height':'18px'}}>$448.42</span></strong></a></li>
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