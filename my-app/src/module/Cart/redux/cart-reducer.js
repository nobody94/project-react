import CartActionTypes from './cart-type';
import {addItemToCart ,removeItemFromCart} from './cart-utils';

const initialState = {
    counter: 0,
    number:0,
    cartItems : [],  
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {       
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                counter: state.counter + 1,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }   
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                counter: state.counter - 1,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }  
        case CartActionTypes.CLEAR_ITEM_FROM_CART:            
            return {
                ...state,   
                counter: state.counter - action.quantity,             
                cartItems: state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
                ) 
            };
        case CartActionTypes.CHECKOUT_SUCCESS:
            return{
                ...state,
                cartItems:[],
                counter:0
            }
        default:
            return state;
    }    
};

export default reducer;