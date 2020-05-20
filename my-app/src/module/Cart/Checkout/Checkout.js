import React from 'react';
import {connect} from 'react-redux';
import Item from './CheckoutItem';
import Payment from './CheckoutPayment';
import {Link} from 'react-router-dom';
import './Checkout.css';
import {Currency} from '../../Utility/Currency/Currency';
class Checkout extends React.Component {
  constructor(props){
    super(props);  
   
} 
addedItem(){
  const data = this.props.items; 
  // for(var i =0 ; i< this.props.counter;i++){         
  //     console.log(data[i]);
  //     console.log(data[i].quantity);
  // }  
    return data.map((item)=>{      
      for(var i =0 ; i< this.props.counter;i++){         
        return <Item key={item.key} name={item.name} imageUrl={item.imageUrl} price={item.price} quantity={item.quantity} item={item}></Item>
      }  
    });
}
totalPrice(){
  let price,quantity,total; 
  let totalPrice = 0;
  total =  this.props.items.map((item)=>{
    for(var i = 0 ; i< this.props.counter;i++){         
      price = item.price;
      quantity = item.quantity;
      return price*quantity;
    }    
  });
  for(var i =0; i< total.length; i++){    
    // console.log(total[i]);
    totalPrice += total[i];
  }
  // console.log(total);
  // console.log(totalPrice);
  return totalPrice;
}
 render(){ 
  return (
    <div className="container">
      <div className="checkout-item">
      {
        this.props.counter > 0 
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
            {this.addedItem()}           
            </tbody>
          </table> 
          <div className="total">
            <span className="label">Total:</span> <span className="total-price">{Currency} {this.totalPrice()}</span>
          </div>
          <div className="btn-actions remove">
          <button className="action remove" onClick={()=> this.props.checkoutSuccess()}>Clear all item from cart</button>
          </div>          
          <Payment total={this.totalPrice()}></Payment>         
        </div>
         : <div className="no-item"><p>Your cart is empty</p><Link className="action go home" to="/">Continue shopping</Link></div> 
      }
      </div> 
    </div>
  );
 }
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
