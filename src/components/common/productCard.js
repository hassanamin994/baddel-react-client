import React from 'react';
import { Link } from 'react-router';

class ProductCard extends React.Component {

    render() {
        const product = this.props.product;
        console.log(product)
        
        if(!product.images || product.images.length == 0 ) {
            product.images[0] = '/assets/img/a.jpg';
        }

        return (
            <div>
                <div className="thumbnail">
                    <Link to={'/products/' + product._id }><img src={product.images[0]} alt=""/></Link>
                    <div className="caption cntr">
                        <p><strong>{product.title || product.name || '' }</strong></p>
                        <p>{product.price || ''}</p>
                        <h4><Link className="shopBtn" to={'/products/' +product._id} > View Product </Link></h4>
                        <div className="actionList">
                            <h6>{product.trade_with && product.trade_with.length > 0 && 'Trade with'}</h6>
                            {product.trade_with.map(item => <p>{item}</p> )}
                        </div> 
                        <br className="clr" />
                    </div>
                </div>
            </div>
        );
    }
}


export default ProductCard;