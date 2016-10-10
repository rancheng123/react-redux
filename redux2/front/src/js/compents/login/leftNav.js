import React, { Component, PropTypes } from 'react';
import { Router, Route, Link ,hashHistory} from 'react-router';

//引入了样式
require('../../../scss/leftNav.scss');

class LeftNav extends Component {
    constructor(){
        super()
    };
    render(){
        return (
            <div className="leftNav">
                <ul>
                    <li><Link to="/productList">ProductList</Link></li>
                    <li><Link to="/orderList">Order</Link></li>
                </ul>
            </div>
        )
    }
};

export default LeftNav;

