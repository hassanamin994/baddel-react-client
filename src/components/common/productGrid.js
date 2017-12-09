import React from 'react';
import ProductCard from './productCard';


class ProductGrid extends React.Component {

    renderProductsRow = (products) => {
       return (
            <div className="row-fluid" key={Math.random() * 10}>
                <ul className="thumbnails">
                    { products.map(product => {
                        return <li className="span4" key={product._id}>
                                 <ProductCard product={product} />
                                </li>
                    })}
                </ul>
            </div>
       );
    }

    render() {
        const products = this.props.products || [];
        const productsLists = this.splitUp(products, (products.length / 3) + 1);

        return (
            <div className="well well-small">
                <h3>{this.props.title}</h3>
                {this.props.children}
                <div className="row-fluid">
                    <ul className="thumbnails">
                        {productsLists.map(list => this.renderProductsRow(list))}
                    </ul>
                </div>
            </div>
        );
    }

     splitUp = (arr, n) => {
        var rest = arr.length % n, // how much to divide
            restUsed = rest, // to keep track of the division over the elements
            partLength = Math.floor(arr.length / n),
            result = [];

        for(var i = 0; i < arr.length; i += partLength) {
            var end = partLength + i,
                add = false;

            if(rest !== 0 && restUsed) { // should add one element for the division
                end++;
                restUsed--; // we've used one division element now
                add = true;
            }

            result.push(arr.slice(i, end)); // part of the array

            if(add) {
                i++; // also increment i in the case we added an extra element for division
            }
        }

        return result;
    }
}


export default ProductGrid;