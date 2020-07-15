import React from 'react';
import {connect} from 'react-redux';
import Item from './CheckoutItem';
import Payment from './CheckoutPayment';
import {Link} from 'react-router-dom';
import './Checkout.css';
import {Currency} from '../../Utility/Currency/Currency';

function Checkout(props){  
  const removeHandle = () => {
    props.checkoutSuccess()
  }
  const totalPrice = props.counter > 0 ? props.items.map((item)=>item.price*item.quantity).reduce((a,b)=>a+b) : null;
  return (
    <div className="container">
      <div className="checkout-item">
      {
        props.counter > 0 
        ?  <div className="with-item">
          <table>
            <thead>
              <tr>
                <th className="image">Product image</th>  
                <th className="name">Product name</th>  
                <th className="quantity">Quantity</th>  
                <th className="price">Price</th>  
                <th className="remove">Remove</th>  
              </tr>
            </thead> 
            <tbody>
            {
              props.items.map((item,key)=><Item key={key} name={item.name} imageUrl={item.imageUrl} price={item.price} quantity={item.quantity} item={item}/>)
            }
            </tbody>
          </table> 
          <div className="total">
            <span className="label">Total:</span> <span className="total-price">{Currency} 
              {totalPrice}
            </span>
          </div>
          <div className="btn-actions remove">
          <button className="action remove" onClick={removeHandle}>Clear all item from cart</button>
          </div>          
          <Payment total={totalPrice}></Payment>         
        </div>
         : <div className="no-item"><p>Your cart is empty</p><Link className="action go home" to="/">Continue shopping</Link></div> 
      }
      </div> 
    </div>
  );
}
function mapStateToProps(state){
  return{    
    items:state.cartReducer.cartItems,
    counter:state.cartReducer.counter
  }    
}
const mapDispatchToProps = dispatch => {
  return {     
    checkoutSuccess: () => dispatch({type:'CHECKOUT_SUCCESS'})      
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(Checkout);
