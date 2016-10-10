
import { combineReducers, createStore } from 'redux';

import { popagation }  from './widget/reducer_popagation';

import { user,orderList }  from './reducer_order';
import { products }  from './reducer_product';

//合并reducers
const reducers = combineReducers({
    popagation,
    user,
    orderList,
    products
});


export default reducers;








