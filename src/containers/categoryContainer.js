import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/products';
import ProductsGrid from '../components/common/productGrid';
import { getCategory } from '../reducers/categories';

class CategoryContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {category_id: props.params.id, page: 1, searchTerm: ''}
        props.fetchProducts(1, {category: props.params.id});
    }

    componentWillReceiveProps(nextProps) {
        const category_id = nextProps.params.id;
        
        if(category_id !== this.state.category_id) {
            this.setState({category_id});
            this.props.fetchProducts(this.state.page, {category: category_id});

        }
    }

    handleSearchChange = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    handleSearchClick = (e) => {
        e.preventDefault();
        this.props.fetchProducts(1, { category: this.state.category_id, title: this.state.searchTerm });
    }
    
    render() {
        const title = this.props.category ? this.props.category.name : '';

        return (
            <div>
                    
                <ProductsGrid title={title} products={this.props.products.products} >
                    <form onSubmit={this.handleSearchClick} className="input-append">
                        <input
                                type="text" 
                                className="span8" 
                                placeholder="Search for..."
                                value={this.state.searchTerm}
                                onChange={this.handleSearchChange} />
                        <button 
                            className="btn btn-warning" 
                            type="button"
                            
                            >
                            Go!
                            </button>
                    </form>
                </ProductsGrid>
            </div>
        );
    }
}

const mapState = (state, ownProps) => {
    return {products: state.products, category: getCategory(state, ownProps)};
} 

export default connect(mapState, actions)(CategoryContainer);