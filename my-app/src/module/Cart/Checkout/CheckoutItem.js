import React from 'react';
import {connect} from 'react-redux';
import {decrementItem,incrementItem,clearItemFromCart} from '../redux/cart-action';
class CheckoutItem extends React.Component{
    constructor(props){
        super(props);  
      
    } 
    
    render(){
        // console.log(this.props.quantity);         
        return(
            <tr className="item">
                <td className="image">
                    <div className="image-wrapper"><img src={this.props.imageUrl}></img></div>
                </td>
                <td className="name" data-title="Product name">
                    {this.props.name}
                </td>
                <td className="quantity" data-title="Quantity">
                    <button className={`action minus ${this.props.quantity <= 1 ? 'disabled' : ''}`} onClick={() => this.props.decrementItem(this.props.item)} disabled={this.props.quantity <= 1}>-</button>
                    <span className="qty">{this.props.quantity}</span>
                    <button className="action plus" onClick={() => this.props.incrementItem(this.props.item)}>+</button>
                </td>
                <td className="price" data-title="Price">
                    {this.props.price}
                </td>
                <td className="remove" data-title="Remove product">
                    <button className="action remove" onClick={()=> this.props.clearItemFromCart(this.props.item,this.props.quantity)}>x</button>
                </td>
            </tr>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {     
        incrementItem: (item) => {dispatch(incrementItem(item))},
        decrementItem: (item) => {dispatch(decrementItem(item))},
        clearItemFromCart: (item,quantity) => {dispatch(clearItemFromCart(item,quantity))}
    }
  };
  export default connect(null,mapDispatchToProps)(CheckoutItem);