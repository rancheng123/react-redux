
const popagation_initState = {
    pageNum: 1,
    pageSize: 10,
    totalNum: 100
};

//异步order
export const popagation = (state=popagation_initState,action) => {
    switch(action.type){
        case 'CHANGE_PAGESIZE':

            var newState =  Object.assign({}, state, {
                pageSize: action.pageSize
            });
            return newState;
        case 'CHANGE_PAGENUM':

            var newState =  Object.assign({}, state, {
                pageNum: action.pageNum
            });
            return newState;

        default:
            return state;
    }
};


