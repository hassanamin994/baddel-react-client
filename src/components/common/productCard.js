import React from 'react';


class ProductCard extends React.Component {

    render() {
        return (
            <div>
                <div className="thumbnail">
                    <a href="product_details.html" className="overlay"></a>
                    <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search"></span> QUICK VIEW</a>
                    <a href="product_details.html"><img src="assets/img/a.jpg" alt=""/></a>
                    <div className="caption cntr">
                        <p>Manicure & Pedicure</p>
                        <p><strong> $22.00</strong></p>
                        <h4><a className="shopBtn" href="#" title="add to cart"> Add to cart </a></h4>
                        <div className="actionList">
                            <a className="pull-left" href="#">Add to Wish List </a> 
                            <a className="pull-left" href="#"> Add to Compare </a>
                        </div> 
                        <br className="clr" />
                    </div>
                </div>
            </div>
        );
    }
}


export default ProductCard;