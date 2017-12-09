import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/products';
import ProductsGrid from '../components/common/productGrid';

class CategoryContainer extends React.Component {

    componentWillMount() {
        this.props.fetchProducts(1, {category: this.props.params.id});
    }

    render() {
        return (
            <div>
                <ProductsGrid products={this.props.products.products} />
            </div>
        );
    }
}

const mapState = (state) => {
    return {products: state.products};
}

export default connect(mapState, actions)(CategoryContainer);