import React from 'react'
import ProductForm from '../components/forms/product_form';
import { fetchProduct } from '../actions/products';
import { connect } from 'react-redux';
import Require_Auth from '../components/hoc/require_auth';
import LoadingComponent from '../components/common/loading';
import { browserHistory } from 'react-router';

class EditProduct extends React.Component {

    componentWillMount() {
        const id = this.props.params.id;
        this.props.fetchProduct(id);
    }

    componentWillUpdate(nextProps) {
        if(nextProps.product) {
            if(nextProps.product.user !== this.props.user._id){
                browserHistory.push('/');
            }
        }
    }

    render() {
        if(!this.props.product) {
            return <LoadingComponent />
        }
        return (
            <div> 
                <ProductForm mode='edit' product={this.props.product} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { user: state.auth.user, product: state.products.currentProduct }
}

export default connect(mapStateToProps, { fetchProduct })(
    Require_Auth(EditProduct)
);