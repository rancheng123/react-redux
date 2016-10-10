import React, { Component, PropTypes } from 'react';

class ProductList extends Component {
    constructor(){
        super()
    };

    productAdd(){
        window.location.hash='productAdd';
    }

    productDetail(){
        window.location.hash='productDetail';
    }

    render(){
        return (
            <div>
                <div>
                    <input type="button" value="添加" onClick={this.productAdd}/>
                </div>
                <ul>
                    <li>
                        <span>Car 100$</span>
                        <input type="button" value="查看详情" onClick={this.productDetail}/>
                    </li>
                </ul>
            </div>
        )
    }
};

export default ProductList;

