
export const user = (state='rancheng',action) => {
    switch(action.type){
        case 'CHANGE_USER':
            return action.user;
        default:
            return state;
    }
};


const orderList_initState = {
    //来显示进度条
    isFetching: false,
    //是否过期
    didInvalidate: false,
    //数据最后更新时间
    lastUpdated: new Date().getDate(),

    data: []
};

var count = 0;


//异步order
export const orderList = (state=orderList_initState,action) => {
    switch(action.type){
        case 'REQUEST_ORDER_START':

            var newState =  Object.assign({}, state, {
                //来显示进度条
                isFetching: true
            });
            return newState;
        case 'REQUEST_ORDER_SUCCESS':


            if(count){
                action.data = [{
                    "text": "order1"
                },{
                    "text": "order2"
                },{
                    "text": "order3"
                }]
            }else{
                action.data = [{
                    "text": "order4"
                },{
                    "text": "order5"
                },{
                    "text": "order6"
                }]
            }
            count = !count;


            var newState =  Object.assign({}, state, {
                //来显示进度条
                isFetching: false,
                //是否过期
                didInvalidate: false,
                //数据最后更新时间
                lastUpdated: new Date().getDate(),

                data: action.data
            });
            return newState;

        case 'REQUEST_ORDER_FAILD':

            var newState =  Object.assign({}, state, {
                //来显示进度条
                isFetching: false
            });
            return newState;

        default:
            return state;
    }
};








