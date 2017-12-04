import React from 'react';
import Carousel from './common/carousel';
import Sidebar from './sidebar';
import Slider from './common/slider';
import ProductCard from './common/productCard';
import ProductGrid from './common/productGrid';

class Home extends React.Component {

    render() {
        return (
            <div>
                <Carousel />
                <Slider /> 
                <ProductGrid products={this.props.products} />
            </div>
        )
    }
}


export default Home;