import React from 'react';
import Carousel from './common/carousel';
import Sidebar from './sidebar';
import Slider from './common/slider';
import ProductCard from './common/productCard';
import ProductGrid from './common/productGrid';

class Home extends React.Component {

    render() {
        console.log(this.props.products)
        return (
            <div>
                Home
                <div className="row">
                    <div className="span3">
                        <Sidebar />
                    </div>
                    <div className="span9">
                        <Carousel />
                        <Slider /> 
                        <ProductGrid products={this.props.products} />
                    </div>
                </div>
                
            </div>
        )
    }
}


export default Home;