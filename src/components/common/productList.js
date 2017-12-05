import React from 'react';
import LoadingComponent from './loading';
import { Link } from 'react-router';


class ProductList extends React.Component {
    

    renderProductItem = (product) => {
        const productId = product._id || product.id;

        return (
            <div key={product.name}> 
                <div className="row-fluid">	  
                    <div className="span2">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className="span6">
                        <h5>{product.name}</h5>
                        <p>{product.description}</p>
                    </div>
                    <div className="span4 alignR">
                    <form className="form-horizontal qtyFrm">
                        <h3> Trade with</h3>
                        {product.trade_with.map(item => <p>{item}</p> )}
                        <br />
                        <div className="btn-group">
                            <Link to={"/products/" + (productId)} className="shopBtn">VIEW</Link>
                        </div>
                    </form>
                    </div>
                </div>
                <hr className="soften" />
            </div>
        );
    }

    render() {
        const products = this.props.products;

        if(!products) {
            return <LoadingComponent />
        }else if(products.length === 0 ) {
            return <div> No products are available </div>
        }

        return (
            <div className="well well-small">
                {products.map(product => this.renderProductItem(product))}
            </div>

        );
    }
}


export default ProductList;