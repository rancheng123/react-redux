import React, { Component, PropTypes } from 'react';

class RightDetail extends Component {
    constructor(){
        super()
    };
    render(){
        return (
            <div>
                {this.props.compent}
            </div>
        )
    }
};

export default RightDetail;

