import React, { Component, PropTypes } from 'react';

import LeftNav from './leftNav';
import RightDetail from './rightDetail';


class Body extends Component {
    constructor(){
        super();
    };
    render(){
        return (
            <div id="body">
                <LeftNav></LeftNav>
                <RightDetail compent={this.props.compent}></RightDetail>
            </div>
        )
    }
};

export default Body;

