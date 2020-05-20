import React from 'react';
import { Link } from "react-router-dom";
import Minicart from '../Cart/Minicart/Minicart';
import logo from '../../asset/logo.png';
import './Header.css';
import MediaQuery from 'react-responsive';
import Navigation from './Navigation/Navigation';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {          
          mobileNav:false
        }; 
        this.navMobileHandle = this.navMobileHandle.bind(this);
    }
  
    navMobileHandle(){
      this.setState({
        mobileNav: !this.state.mobileNav
      })
    }
   
    render(){
      const isOn = this.state.mobileNav ? 'active' : '';
        return (
            <header className="header">
                <div className="container">
                <MediaQuery maxDeviceWidth={767}>
                  <span className={`nav-mobile ${isOn}`} onClick={this.navMobileHandle}><span></span><span></span><span></span></span>
                </MediaQuery>
                  <div className="logo">
                    <Link to="/"><img src={logo} alt="logo"></img></Link>
                  </div>
                  <div className="header-content">
                    <Navigation mobileNav={this.state.mobileNav} closeBtn={this.navMobileHandle}></Navigation>
                    <Minicart></Minicart>
                  </div>
                </div> 
          </header>          
        );
    }
  }
 
  export default Header;
  