import React from 'react'
import ProductForm from '../components/forms/product_form';
import RequireAuth from '../components/hoc/require_auth';

class NewProduct extends React.Component {

    render() {
       return (
         <ProductForm mode="new" />  
       );
    }
}


export default (NewProduct);