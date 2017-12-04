import React from 'react'


class Carousel extends React.Component {

    constructor(props) {
        super(props);

        // set random id for carousel to avoid conflicts
        const carouselId = "carousel" + parseInt(Math.random() * 1000);
        this.state = {carouselId: carouselId};
    }

    renderItems = () => {
        const images = this.props.images;

        if(!images || images.length < 1) {
            return ;
        }

        return this.props.images.map((img, index) => {
            return (
                <div className={index == 0 ? 'item active': 'item' } key={img.txt || Math.random() * 100}>
                    <img style={{width:'100%'}} src={img.src} />
                    { img.text &&
                     <div className="carousel-caption">
                            <h4>{img.text}</h4>
                            {/*<p><span>Highly Google seo friendly</span></p>*/}
                    </div> }
                </div>
            );
        })
    }

    render() {
        return (
                <div id={this.state.carouselId} className="carousel slide homCar">
                    <div className="carousel-inner">
                      {this.renderItems()}
                    </div>
                    <a className="left carousel-control" href={"#" + this.state.carouselId} data-slide="prev">&lsaquo;</a>
                    <a className="right carousel-control" href={"#" + this.state.carouselId} data-slide="next">&rsaquo;</a>
                </div>
        );
    }
}


export default Carousel;