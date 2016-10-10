import React, { Component, PropTypes } from 'react';
import { Provider , connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetch from 'isomorphic-fetch';

import * as TodoActionCreators from '../../../redux/actions/OrderActions';

//分页
import Popagation from '../../../widget/popagation';

//分页
import OrderSearch from './order_search';





class orderList extends Component {
    constructor(){
        super();
    };

    componentWillMount(){
        this.getOrderList({
            pageNum:1,
            pageSize: 10
        })
    };

    getOrderList(opts){
        const {dispatch} = this.props;
        let action = TodoActionCreators.getOrderList(opts);
        dispatch(action);
    };

    addOrder(){

        fetch('./data/order/order_add.json')
            .then(response => response.json())
            .then(data => {
                if(data.status == 200){

                    this.getOrderList({
                        pageNum:1,
                        pageSize: 10
                    })
                }
            });
    };

    render() {
        var that = this;

        // 通过调用 connect() 注入:
        const { dispatch, user, orderList, popagation} = this.props;


        let boundActionCreators = bindActionCreators(TodoActionCreators, dispatch);

        if(orderList.data && orderList.data.length){
            var ordersHTML = orderList.data.map(function(ele,i){
                return (
                    <div key={i}>{ele.text}</div>
                )
            });
        };

        //分页配置
        const popagationConfig = {
            callback: function(){

                that.getOrderList({
                    pageNum:popagation.pageNum,
                    pageSize: popagation.pageSize
                })
            }
        };

        return (
            <div>

                <OrderSearch></OrderSearch>

                <div>{ordersHTML}</div>

                <Popagation config={popagationConfig}></Popagation>

                <input type="button" value="添加" onClick={this.addOrder.bind(this)}/>
            </div>
        )
    }
};

//将react组件与 redux连接起来111244446777888
export default connect(function(state  /*全局state*/) {

    //return  给当前组件  添加属性（根据需要，从全局state中选）
    //将redux的 state 变成 react组件的属性(同时，redux 的dispatch等方法也被注入到组件里面)
    return {
        user: state.user,
        orderList: state.orderList,
        popagation: state.popagation
    };
})(orderList);
//export default orderList;











