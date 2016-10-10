export function getProductList(msg){
    return {
        type: 'getProductList',
        msg
    }
}

export function removeProduct(msg){
    return {
        type: 'removeProduct',
        msg
    }
}

export function getOrderList(msg){
    return {
        type: 'getOrderList',
        msg
    }
}
