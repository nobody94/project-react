import React from 'react';
import { Link } from "react-router-dom";
import firebase from '../../../firebase/firebaseConfig';
import {connect} from 'react-redux';
import './Navigation.css';
import MediaQuery from 'react-responsive';
import {Loading} from '../../Utility/Loading/Loading';
class Navigation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            myAccount:'',
            loading:false
        }; 
        this.logoutAccount = this.logoutAccount.bind(this);
    }
    componentDidMount(){
      firebase.auth().onAuthStateChanged(user => {
          const currentComponent = this;
          if(user) {
              const currentUser =  firebase.auth().currentUser;               
              currentComponent.setState({
                myAccount:currentUser.uid
              })                 
          } 
      });        
  }  
    logoutAccount(e){
        e.preventDefault();
        this.setState({
            loading:true
        })
        setTimeout(()=>{
            this.setState({
                loading:false
            })
            firebase.auth().signOut().then(function() { 
                console.log('logout success');
            }).catch(function(error) {
                console.log(error);
            });
            window.location = `/logout`;  
        },1000)       
    }  
    render(){  
        const isOn =  this.props.mobileNav ? 'active' : '';   
        return (
            <nav className={`nav-section ${isOn}`}>
                 <MediaQuery maxDeviceWidth={767}>
                    <span className="close-mobile-menu" onClick={this.props.closeBtn}>Menu</span>
                </MediaQuery>               
                <ul className="navigation">          
                    <li><Link to="/shop">Shop</Link></li>   
                    <li><Link to="/contact">Contact</Link></li>
                    <li>
                        {
                            this.props.isSignIn 
                            ? <span><span><Link to={`/user/${this.state.myAccount}`}>My Account</Link></span><span onClick={this.logoutAccount} className="logout">Logout</span></span>
                            : <Link to="/sign-in">Sign in</Link>
                        }
                    </li> 
                </ul>
                {
                    this.state.loading
                    ? <Loading></Loading>
                    : null
                }
            </nav>       
        );
    }
  }
  function mapStateToProps(state){
    return{    
      isSignIn: state.userReducer.isSignIn
    }    
  }
  export default connect(mapStateToProps)(Navigation);
  