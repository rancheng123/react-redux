import React, { Component, PropTypes } from 'react';
import { Provider , connect } from 'react-redux';
import { bindActionCreators } from 'redux';





class orderSearch extends Component {
    constructor(){
        super();
    };

    componentWillMount(){
    };
    render() {
        var that = this;
        return (
            <div>
                <input type="text" value="姓名" id=""/>
                <input type="text" value="状态" id=""/>
                <input type="button" value="搜索" id=""/>
            </div>
        )
    }
};


export default connect(function(state) {
    return {
        user: state.user,
        orderList: state.orderList
    };
})(orderSearch);












