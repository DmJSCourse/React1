import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Products from './components/products';

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            state: 'initial'
        };
    }

    render() {
        return (
            <div>
                <Header />
                <div className="main-content">
                    <Products />
                </div>
            </div>
        );
    }
}