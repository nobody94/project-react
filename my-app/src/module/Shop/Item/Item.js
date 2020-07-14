import React,{useState} from 'react';
import { connect } from 'react-redux';
import {addToCart} from '../../Cart/redux/cart-action';
import {Redirect} from 'react-router-dom';
import {Loading} from '../../Utility/Loading/Loading';

function Item(props){  
  const [isAddCart,isAddCartHandle] = useState(false);
  const [loading,loadingHandle] = useState(false);
  const [isCheckout,isCheckoutHandle] = useState(false);
  
  const addCartHandle = (data) => {
    // console.log(data);
    loadingHandle(true);
    setTimeout(()=>{
      loadingHandle(false);
      isAddCartHandle(true)    
      props.addToCart(data);
    },1000);
  }
  
  const closeBtn = () => {
    isAddCartHandle(false)  
  }
  
  const goCheckout = () => {
    loadingHandle(true);
    setTimeout(()=>{
      loadingHandle(false);
      isCheckoutHandle(true);
    },1000)    
  }
  
  return(
    <div className="item">
      <div className="image-wrapper">
        <img src={props.imageUrl}></img>
        <button className="action add" onClick={()=>addCartHandle(props.product)}>Add to cart</button>
      </div>
      <div className="content">
        <h4 className="product-name">{props.name}</h4>
        <p className="price">{props.price}</p>
      </div>
      {
          isAddCart 
          ? <div className="popup add-cart">
              <div className="content-popup">
                <p>You been add <strong>{props.name}</strong> to cart</p>
                <div className="prd-image">
                <img src={props.imageUrl}></img>
                </div>
                <p>Your cart has {props.counter} {props.counter >= 2 ? 'items' : 'item'}</p>
                <div className="actions">
                  <button className="action" onClick={closeBtn}>Continue Shopping</button>
                  <span className="action" onClick={goCheckout}>Go to checkout</span> 
                  {
                      isCheckout ?
                      <Redirect to='/checkout'></Redirect>
                      :null
                    } 
                </div>
              </div>
            </div>
          : null
        }
        {
          loading
          ? <Loading></Loading>
          : null
        }
    </div>
  )
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
export default connect(mapStateToProps,mapDispatchToProps)(Item);
