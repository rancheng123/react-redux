//react
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link ,hashHistory} from 'react-router';


//redux
import {createStore ,applyMiddleware ,compose} from 'redux';
//redux与react链接插件
import { Provider , connect } from 'react-redux';
//中间件1  action creator 和 网络请求结合起来( 让action生成器 支持返回函数，并且提供dispatch等参数 )
import thunk from 'redux-thunk';
// 中间件2   一个很便捷的 middleware，用来打印 action 日志
import createLogger from 'redux-logger';
//redux 开发工具
import DevTools from './redux/devTools/devTools'
//reducers
import reducers from './redux/reducers/index';



//compents
                    //注意点   后面不能写.js后缀
import Index from './compents/login/index';
import Login from './compents/unlogin/login';
import ProductList from   './compents/login/product/product_list';
import ProductAdd  from   './compents/login/product/product_add';
import ProductDetail from './compents/login/product/product_detail';
import orderList from './compents/login/order/order_list';






const ReduxStore = createStore(
    reducers,
    //从右到左来组合多个函数,见http://cn.redux.js.org/docs/api/compose.html
    compose(
        //应用中间件
        applyMiddleware(
            thunk,
            createLogger()
        ),
        DevTools.instrument()
    )
);

render((
    <Provider store={ReduxStore}>
        <div>
            <Router history={hashHistory}>
                <Route path="/" component={Login}></Route>
                <Route path="/login" component={Login}></Route>

                <Route path="/index" component={Index}>
                    <Route path="/productList" component={ProductList} />
                    <Route path="/productAdd" component={ProductAdd} />
                    <Route path="/productDetail" component={ProductDetail} />

                    <Route path="/orderList" component={orderList} />
                </Route>
            </Router>
            <DevTools />
        </div>
    </Provider>
), document.getElementById('app'));



