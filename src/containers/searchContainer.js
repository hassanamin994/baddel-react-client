import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/products';
import ProductGrid from '../components/common/productGrid';

class SearchContainer extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
        const { title } = props.location.query;
        this.state = {page: 1, searchTerm: title}
        props.fetchProducts(1, {title: this.state.searchTerm});
    }

    componentWillReceiveProps(nextProps) {
        const { title } = nextProps.location.query;
        
        if(title !== this.state.searchTerm) {
            this.setState({searchTerm: title});
            this.props.fetchProducts(this.state.page, {title});

        }
    }

    render() {
        return (
            <ProductGrid products={this.props.products.products} />
        );
    }
}

const mapState = (state) => {
    return {products: state.products};
}

export default connect(mapState, actions)(SearchContainer);