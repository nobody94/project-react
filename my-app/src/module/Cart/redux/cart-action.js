import CartActionTypes from './cart-type';

export const addToCart = item =>{
    return{
        type: CartActionTypes.ADD_ITEM,
        payload:item 
    }
}
export const decrementItem = item =>{
    return{
        type: CartActionTypes.REMOVE_ITEM,
        payload:item 
    }
}
export const incrementItem = item =>{
    return{
        type: CartActionTypes.ADD_ITEM,
        payload:item 
    }
}
export const clearItemFromCart = (item,quantity) => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item,
    quantity:quantity
});