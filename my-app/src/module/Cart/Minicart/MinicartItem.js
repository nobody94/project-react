import React from 'react';

class CartItem extends React.Component {
  constructor(props){
    super(props);  
   
} 
 render(){
  return (
    <div className="item">
      <div className="block-image">
        <img src={this.props.imageUrl}></img>
      </div>
      <div className="detail">
      <h4 className="product-name">{this.props.name}</h4>
      <p className="price-box">
        <span className="quantity">{this.props.quantity}</span>
        <span className="price">{this.props.price}</span>
        </p>
      </div>
    </div>
  );
 }
}

export default CartItem;
