import React from 'react';
import Carousel from './common/carousel'; 
import LoadingComponent from './common/loading';


class ProductDetails extends React.Component {

    render() {
        console.log(this.props)
        const product = this.props.product;
        if(!product) {
            return <LoadingComponent />
        }
        // const product = {
        //     "_id": "5a1e0b522057e742a3b0ca17"
        //     ,
        //     "updatedAt": {
        //         "$date": "2017-11-29T18:22:03.170Z"
        //     },
        //     "createdAt": {
        //         "$date": "2017-11-29T01:20:18.943Z"
        //     },
        //     "title": "aaaatest211111",
        //     "location": "test2",
        //     "user": {
        //         "$oid": "5a170f24ab21642f635247fd"
        //     },
        //     "category": {
        //         "$oid": "5a183f48f6b9b241de5540fb"
        //     },
        //     "trade_with": [
        //         "product 1",
        //         "product 2"
        //     ],
        //     "images": [
        //         {src: '/assets/img/a.jpg'},
        //         {src: '/assets/img/a.jpg'},
        //         {src: '/assets/img/a.jpg'},
        //         {src: '/assets/img/a.jpg'},
        //     ],
        //     "description": "This is some dummy product description",
        //     "__v": 0
        // }
        return (
         	<div className="well well-small">
                <div className="row-fluid">
                    <div className="span5">
                        <Carousel images={product.images} />
                    </div>
                    <div className="span7">
                        <h3>{product.title}</h3>
                        <hr className="soft"/>
                        
                        
                        <h4>To be traded with:</h4>
                        {product.trade_with.map(item => <p>{item}</p>)}
                    </div>
                </div>
            <hr className="softn clr"/>
            
            <ul id="productDetail" className="nav nav-tabs">
				<li className="active"><a href="#home" data-toggle="tab">Product Details</a></li>
				<li className=""><a href="#profile" data-toggle="tab">Related Products </a></li>
			</ul>

            <div id="myTabContent" className="tab-content tabWrapper">
				<div className="tab-pane fade active in" id="home">
						<h4>Product Information</h4>
                        <p>{product.description}</p>
				</div>

				<div className="tab-pane fade" id="profile">
					<div className="row-fluid">	  
					<div className="span2">
						<img src="/assets/img/d.jpg" alt="" />
					</div>
					<div className="span6">
						<h5>Product Name </h5>
						<p>
						Nowadays the lingerie industry is one of the most successful business spheres.
						We always stay in touch with the latest fashion tendencies - 
						that is why our goods are so popular..
						</p>
					</div>
					<div className="span4 alignR">
					<form className="form-horizontal qtyFrm">
					<h3> $140.00</h3>
					<label className="checkbox">
						<input type="checkbox" />  Adds product to compair
					</label><br />
					<div className="btn-group">
						<a href="product_details.html" className="defaultBtn"><span className=" icon-shopping-cart"></span> Add to cart</a>
						<a href="product_details.html" className="shopBtn">VIEW</a>
					</div>
						</form>
					</div>
				</div>
				<hr className="soft" />
				
				</div>
              
			</div>

            </div>
        );
    }
}


export default ProductDetails;