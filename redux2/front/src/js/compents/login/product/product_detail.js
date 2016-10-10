
import React, { Component, PropTypes } from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import TransitionGroup         from 'react-addons-transition-group';



require('../../../../scss/detail.scss');


class ProductDetail extends Component {
    constructor(){
        super()

        //相当于getInitialState
        this.state = {
            items: ['hello', 'world', 'click', 'me']
        };
    };

    /*
    这里不能写getInitialState，会报错
    getInitialState() {
        return {a:1};
    };*/

    handleAdd() {
        var newItems = this.state.items.concat([prompt('Enter some text')]);
        this.setState({items: newItems});
    }
    handleRemove(i) {
        var newItems = this.state.items;
        newItems.splice(i, 1);
        this.setState({items: newItems});
    }

    render(){

        var items = this.state.items.map(function(item, i) {
            return (
                <div key={item} className="red"
                     onClick={this.handleRemove.bind(this, i)}>
                    {item}
                </div>
            );
        }.bind(this));


        return (
            <div>
                <div>
                    Car
                </div>
                <div>
                    100
                </div>
                <div>
                    Detail
                </div>

                <ReactCSSTransitionGroup transitionName="example"
                                         transitionEnterTimeout={500}
                                         transitionLeaveTimeout={300}>
                    {items}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
};

export default ProductDetail;

