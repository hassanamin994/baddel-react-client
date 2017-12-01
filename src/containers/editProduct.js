import React from 'react'
import ProductForm from '../components/forms/product_form';
import { fetchProduct, editProduct } from '../actions/products';
import { connect } from 'react-redux';
import Require_Auth from '../components/hoc/require_auth';
import LoadingComponent from '../components/common/loading';
import { browserHistory } from 'react-router';

class EditProduct extends React.Component {

    constructor(props) {
        super(props)
        const id = props.params.id;
        this.state = {productId: id};
        props.fetchProduct(id);
    }

    componentWillUpdate(nextProps) {
        if(nextProps.product) {
            if(nextProps.product.user !== this.props.user._id){
                browserHistory.push('/');
            }
        }
    }

    onFormSubmit = ( values ) => {
        this.props.editProduct(this.state.productId, values);
    }

    render() {
        if(!this.props.product) {
            return <LoadingComponent />
        }
        return (
            <div> 
                <ProductForm 
                    product={this.props.product} 
                    onFormSubmit={this.onFormSubmit}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { user: state.auth.user, product: state.products.currentProduct }
}

export default connect(mapStateToProps, { fetchProduct, editProduct })(
    Require_Auth(EditProduct)
);