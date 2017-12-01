import React from 'react'
import ProductForm from '../components/forms/product_form';
import RequireAuth from '../components/hoc/require_auth';
import { connect } from 'react-redux';
import { createProduct } from '../actions/products';


class NewProduct extends React.Component {


    createProduct = (values) => {
        console.log('on form submit', values)
        this.props.createProduct(values);
    }

    render() {
       return (
         <ProductForm onFormSubmit={this.createProduct}/>  
       );
    }
}


export default connect(null, { createProduct })(RequireAuth(NewProduct));