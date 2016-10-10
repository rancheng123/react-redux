
/*
     会有非常多的action

        解决办法：
            1. type 定义成常量，防止重复
            2. action 集中放置，方便管理
*/


//action creator 和 网络请求结合起来( 让action生成器 支持返回函数，并且提供dispatch等参数 )
import thunk from 'redux-thunk';

//让所有浏览器支持fetch （fetch 是 新一代的ajax）
import fetch from 'isomorphic-fetch';



const GET_ORDERLIST = 'GET_ORDERLIST';
//action生成器
export function getOrderList(opts){

    /*//1.  返回action对象（同步）
        return {
            type: GET_ORDERLIST,
            pageNum: 1,
            pageSize: 10,
            msg
        };
*/
    //2. 返回函数( 异步，使用redux-thunk插件后，可以返回函数 )
        return function(dispatch/*dispatch是redux-thunk插件提供的*/,getState){

            //开始请求
            dispatch({
                type: 'REQUEST_ORDER_START'
            });

            var url = './data/order/orderList.json';
            return fetch(url)
                .then(response => response.json())
                .then(data => {

                    //请求成功(将数据通过action传给state)
                    dispatch({
                        type: 'REQUEST_ORDER_SUCCESS',
                        data: data.data
                    });
                });
        };
};


















