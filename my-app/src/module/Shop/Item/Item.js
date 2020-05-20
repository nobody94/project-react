import React from 'react';
import { connect } from 'react-redux';
import {addToCart} from '../../Cart/redux/cart-action';
import {Redirect} from 'react-router-dom';
import {Loading} from '../../Utility/Loading/Loading';
class CategoryItem extends React.Component {
  constructor(props){
    super(props);  
    this.state={
      isAddCart:false,
      loading:false,
      isCheckout:false
    };
   this.addCartHandle = this.addCartHandle.bind(this);
   this.closeBtn = this.closeBtn.bind(this); 
   this.goCheckout = this.goCheckout.bind(this);
  } 
  goCheckout(){
    this.setState({
      loading:true
    })
    setTimeout(()=>{
      this.setState({
        loading:false,
        isCheckout:true
      })  
    },1000)     
  }
  addCartHandle(){
    this.setState({
      loading:true
    })
    setTimeout(()=>{
      this.setState({
        isAddCart:true, 
        loading:false    
      });
      this.props.addToCart(this.props.product);
    },1000);
  }
  closeBtn(){
    this.setState({
      isAddCart:false
    })
  }
  render(){    
    return (
      <div className="item">
        <div className="image-wrapper">
            <img src={this.props.imageUrl}></img>
            <button className="action add" onClick={this.addCartHandle}>Add to cart</button>
        </div>
        <div className="content">
          <h4 className="product-name">{this.props.name}</h4>
          <p className="price">{this.props.price}</p>
        </div>
        {
          this.state.isAddCart 
          ? <div className="popup add-cart">
              <div className="content-popup">
                <p>You been add <strong>{this.props.name}</strong> to cart</p>
                <div className="prd-image">
                <img src={this.props.imageUrl}></img>
                </div>
                <p>Your cart has {this.props.counter} {this.props.counter >= 2 ? 'items' : 'item'}</p>
                <div className="actions">
                  <button className="action" onClick={this.closeBtn}>Continue Shopping</button>
                  <span className="action" onClick={this.goCheckout}>Go to checkout</span> 
                  {
                      this.state.isCheckout ?
                      <Redirect to='/checkout'></Redirect>
                      :null
                    } 
                </div>
              </div>
            </div>
          : null
        }
        {
          this.state.loading
          ? <Loading></Loading>
          : null
        }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {     
      addToCart: (item) => {dispatch(addToCart(item))}
  }
};
function mapStateToProps(state){
  return{
    counter:state.cartReducer.counter
  }    
}
export default connect(mapStateToProps,mapDispatchToProps)(CategoryItem);
