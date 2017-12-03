import React from 'react'


class Slider extends React.Component {

    render() {
        return (
            <div className="well well-small">
                <h3>New Products </h3>
                <hr className="soften"/>
                <div className="row-fluid">
                    <div id="newProductCar" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="item active">
                                <ul className="thumbnails">
                                    <li className="span3">
                                        <div className="thumbnail">
                                            <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search"></span> QUICK VIEW</a>
                                            <a href="#" className="tag"></a>
                                            <a href="product_details.html"><img src="/assets/img/bootstrap-ring.png" alt="bootstrap-ring" /></a>
                                        </div>
                                    </li>
                                    <li className="span3">
                                        <div className="thumbnail">
                                        <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search"></span> QUICK VIEW</a>
                                        <a href="#" className="tag"></a>
                                        <a  href="product_details.html"><img src="/assets/img/i.jpg" alt="" /></a>
                                        </div>
                                    </li>
                                    <li className="span3">
                                        <div className="thumbnail">
                                        <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search"></span> QUICK VIEW</a>
                                        <a href="#" className="tag"></a>
                                        <a  href="product_details.html"><img src="/assets/img/g.jpg" alt="" /></a>
                                        </div>
                                    </li>
                                    <li className="span3">
                                        <div className="thumbnail">
                                        <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search"></span> QUICK VIEW</a>
                                        <a  href="product_details.html"><img src="/assets/img/s.png" alt="" /></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="item">
                                <ul className="thumbnails">
                                    <li className="span3">
                                        <div className="thumbnail">
                                        <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search"></span> QUICK VIEW</a>
                                        <a  href="product_details.html"><img src="/assets/img/i.jpg" alt="" /></a>
                                        </div>
                                    </li>
                                    <li className="span3">
                                        <div className="thumbnail">
                                        <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search"></span> QUICK VIEW</a>
                                        <a  href="product_details.html"><img src="/assets/img/f.jpg" alt="" /></a>
                                        </div>
                                    </li>
                                    <li className="span3">
                                        <div className="thumbnail">
                                        <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search"></span> QUICK VIEW</a>
                                        <a  href="product_details.html"><img src="/assets/img/h.jpg" alt="" /></a>
                                        </div>
                                    </li>
                                    <li className="span3">
                                        <div className="thumbnail">
                                        <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search"></span> QUICK VIEW</a>
                                        <a  href="product_details.html"><img src="/assets/img/j.jpg" alt="" /></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                            <a className="left carousel-control" href="#newProductCar" data-slide="prev">&lsaquo;</a>
                            <a className="right carousel-control" href="#newProductCar" data-slide="next">&rsaquo;</a>
                        </div>
                    </div>
            </div>
        );
    }
}


export default Slider;