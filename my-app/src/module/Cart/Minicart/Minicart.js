import React from 'react';
import cartIcon from '../../../asset/shopping-bag.svg';
import { Redirect } from "react-router-dom";
import Item from './MinicartItem';
import {connect} from 'react-redux';
import './Minicart.css';
import {Loading} from '../../Utility/Loading/Loading';
class Minicart extends React.Component {
    constructor(props){
      super(props);
      this.state = {
         minicartIsOn : false,
         loading:false,
         isCheckout:false
      }    
      this.minicartClick = this.minicartClick.bind(this);
      this.goCheckout = this.goCheckout.bind(this);
      this.setWrapperRef = this.setWrapperRef.bind(this);
      this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    minicartClick(){
      this.setState({
        minicartIsOn : !this.state.minicartIsOn
      })
    }
    goCheckout(){     
      this.setState({
        loading:true,
        minicartIsOn:false
      })
      setTimeout(()=>{
        this.setState({
          loading:false,
          isCheckout:true
        })          
      },1000)     
    }
    addedItem(){
      const data = this.props.items;   
      return data.map((item)=>{
        for(var i =0 ; i< this.props.counter;i++){ 
          return (
            <Item key={item.id} 
          name={item.name} 
          imageUrl={item.imageUrl} 
          price={item.price} 
          quantity={item.quantity}></Item>
          )
        }          
      });  
    }
    setWrapperRef(node) {
      this.wrapperRef = node;
    }
    handleClickOutside(event) {
      if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        // alert('You clicked outside of me!');
        this.setState({
          minicartIsOn:false
        })
      }
    }
    componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
    }
  
    componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
     render(){ 
      return (
        <div className="minicart" ref={this.setWrapperRef}>
            <span className="minicart-icon" onClick={this.minicartClick}>
            <img src={cartIcon} alt="minicart"></img><span className="minicart-number">{this.props.counter}</span>
            </span>
            <div className={`minicart-content ${this.state.minicartIsOn ?  "active" : ""}`}>  
              <span className="minicart-close" onClick={this.minicartClick}></span>            
              {
                this.props.counter > 0 
                ? <div className="content">
                    <div className="item-wrapper">
                      {this.addedItem()}
                    </div>
                    <span onClick={this.goCheckout} className="action checkout">go to Checkout</span> 
                    {
                      this.state.isCheckout ?
                      <Redirect to='/checkout'></Redirect>
                      :null
                    } 
                  </div> 
                : <p className="message">You had no item in your shopping cart</p>
              }             
            </div> 
            {
                    this.state.loading
                    ? <Loading></Loading>
                    : null
                }
        </div> 
      );
     } 
  }
  function mapStateToProps(state){
    return{
      counter:state.cartReducer.counter,
      items:state.cartReducer.cartItems
    }    
  }
  export default connect(mapStateToProps)(Minicart);
  