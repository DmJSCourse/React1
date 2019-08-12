import React, { Component } from 'react';
import data from '../products.json';
import ProductList from './productList'

export default class Products extends Component {

    constructor() {
        super();

        this.state = {
            products: []
        };
    }

    componentDidMount() {
        this.setState(() => ({ products: data }));
    }

    render() {
        return (
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">                    
                    <div className="col-sm-12">
                        <ProductList products={this.state.products} />
                    </div>
                </div>
            </div>
        );
    }
}