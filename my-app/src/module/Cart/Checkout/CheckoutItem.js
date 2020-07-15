import React from 'react';
import {connect} from 'react-redux';
import {decrementItem,incrementItem,clearItemFromCart} from '../redux/cart-action';

function CheckoutItem(props){
  
    return(
        <tr className="item">
            <td className="image">
                <div className="image-wrapper"><img src={props.imageUrl}></img></div>
            </td>
            <td className="name" data-title="Product name">
                {props.name}
            </td>
            <td className="quantity" data-title="Quantity">
                <button className={`action minus ${props.quantity <= 1 ? 'disabled' : ''}`} onClick={() => props.decrementItem(props.item)} disabled={props.quantity <= 1}>-</button>
                <span className="qty">{props.quantity}</span>
                <button className="action plus" onClick={() => props.incrementItem(props.item)}>+</button>
            </td>
            <td className="price" data-title="Price">
                {props.price}
            </td>
            <td className="remove" data-title="Remove product">
                <button className="action remove" onClick={()=> props.clearItemFromCart(props.item,props.quantity)}>x</button>
            </td>
        </tr>
    );
}
const mapDispatchToProps = dispatch => {
    return {     
        incrementItem: (item) => {dispatch(incrementItem(item))},
        decrementItem: (item) => {dispatch(decrementItem(item))},
        clearItemFromCart: (item,quantity) => {dispatch(clearItemFromCart(item,quantity))}
    }
  };
  export default connect(null,mapDispatchToProps)(CheckoutItem);