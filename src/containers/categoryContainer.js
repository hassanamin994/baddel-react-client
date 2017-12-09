import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/products';
import ProductsGrid from '../components/common/productGrid';
import { getCategory } from '../reducers/categories';

class CategoryContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {id: props.params.id, page: 1}
        props.fetchProducts(1, {category: props.params.id});
    }

    componentWillReceiveProps(nextProps) {
        const { id } = nextProps.params;
        
        if(id !== this.state.id) {
            this.setState({id: id});
            this.props.fetchProducts(this.state.page, {category: id});

        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.category && this.props.category.name}</h1>
                <ProductsGrid products={this.props.products.products} />
            </div>
        );
    }
}

const mapState = (state, ownProps) => {
    return {products: state.products, category: getCategory(state, ownProps)};
} 

export default connect(mapState, actions)(CategoryContainer);