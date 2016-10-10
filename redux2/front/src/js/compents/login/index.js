import React, { Component, PropTypes } from 'react';
import { Router, Route, Link ,hashHistory} from 'react-router'
import Render from 'react-dom';



import Head from './head';
import Body from './body';
import Foot from './foot';

require('../../../scss/reset.scss');
require('../../../scss/index.scss');


class Index extends Component {
    constructor(){
        super()
    };
    render(){
        return (
            <div>
                <Head></Head>
                <Body compent={this.props.children}></Body>
                <Foot></Foot>
                <div id="you"></div>
            </div>
        )
    }
};


export default Index;

