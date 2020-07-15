import React from 'react';
import {Link} from 'react-router-dom';
import './CheckoutSuccess.css';
import {connect} from 'react-redux';


class CheckoutSuccess extends React.Component {
  constructor(props){
    super(props);
    
  }
  componentDidMount(){
    this.props.checkoutSuccess();    
  }
  render(){
    return (    
      <div className="container">
        <div className="checkout-success">
        <h3>Thank you for shopping with us</h3>
        <p>Your order # is: <strong>{this.props.location.state.codeOrder}</strong>. <br></br> We'll email you an order confirmation with details and tracking info.</p>
        <Link to="/" className="action go home">Continue shopping</Link>
        </div>    
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {     
      checkoutSuccess: () => dispatch({type:'CHECKOUT_SUCCESS'})      
  }
};
export default connect(null,mapDispatchToProps)(CheckoutSuccess);
