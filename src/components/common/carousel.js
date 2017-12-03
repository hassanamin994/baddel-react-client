import React from 'react'


class Carousel extends React.Component {

    render() {
        return (
            <div className="well np">
                <div id="myCarousel" className="carousel slide homCar">
                    <div className="carousel-inner">
                        <div className="item">
                            <img style={{width:'100%'}} src="/assets/img/bootstrap_free-ecommerce.png" alt="bootstrap ecommerce templates" />
                            <div className="carousel-caption">
                                    <h4>Bootstrap shopping cart</h4>
                                    <p><span>Very clean simple to use</span></p>
                            </div>
                        </div>
                        <div className="item">
                            <img style={{width:'100%'}} src="/assets/img/carousel1.png" alt="bootstrap ecommerce templates" />
                            <div className="carousel-caption">
                                    <h4>Bootstrap Ecommerce template</h4>
                                    <p><span>Highly Google seo friendly</span></p>
                            </div>
                        </div>
                        <div className="item active">
                            <img style={{width:'100%'}} src="/assets/img/carousel3.png" alt="bootstrap ecommerce templates" />
                            <div className="carousel-caption">
                                    <h4>Twitter Bootstrap cart</h4>
                                    <p><span>Very easy to integrate and expand.</span></p>
                            </div>
                        </div>
                        <div className="item">
                            <img style={{width:'100%'}} src="/assets/img/bootstrap-templates.png" alt="bootstrap templates" />
                            <div className="carousel-caption">
                                    <h4>Bootstrap templates integration</h4>
                                    <p><span>Compitable to many more opensource cart</span></p>
                            </div>
                        </div>
                    </div>
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">&lsaquo;</a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">&rsaquo;</a>
                </div>
            </div>
        );
    }
}


export default Carousel;