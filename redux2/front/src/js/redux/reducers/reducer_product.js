


export const products = (state=['product1','product2'],action) => {
    switch(action.type){
        case 'ADD_PRODUCT':

            var newState = [1,2,3];
            newState.push(1);
            return newState;

            /*return Object.assign({},state,{

            })*/
        case 'GET_PRODUCTLIST':
            var newState = [1,2,3];
            return newState;

        default:
            return state;
    }
};








