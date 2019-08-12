import React from 'react';
import ProductCard from './productCard'

const getProducts = (products) => {
    return (
        <div className="card-deck">
            {
                products.map(product => <ProductCard key={product.id} product={product} />)
            }
        </div>
    );
};

const ProductList = (props) => (
    <div>
        {getProducts(props.products)}
    </div>
);

export default ProductList;