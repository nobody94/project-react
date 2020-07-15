import React from 'react';
import Input from '../../Utility/Input/Input';
import './Contact.css';
import firebase from '../../../firebase/firebaseConfig';
import {connect} from 'react-redux';
import {Loading} from '../../Utility/Loading/Loading';

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {      
       email:"",
       name:"",
       message:"",
       success:false,
       notEmail:false,
       isEmail:false,
       isName:false,
       loading:false,
       messageRequest:false
    }; 
    this.sendMessage = this.sendMessage.bind(this);
    this.closeBtn = this.closeBtn.bind(this);
  }  
//   componentDidMount(){
//     if(this.props.isLogin){
//         firebase.auth().onAuthStateChanged(user => {
//             if(user) {
//                 const currentUser =  firebase.auth().currentUser;
//                 this.setState({
//                     email:currentUser.email ,
//                     isEmail:true ,
//                     isName:true,
//                     name:currentUser.displayName                 
//                 })               
//             } else{
//               this.setState({
//                 isEmail:false,
//                 isName:false
//               })
//             }
//         });  
//     }             
// }  
componentWillMount(){
  if(this.props.isLogin){
    firebase.auth().onAuthStateChanged(user => {
        if(user) {
            const currentUser =  firebase.auth().currentUser;
            this.setState({
                email:currentUser.email ,
                isEmail:true ,
                isName:true,
                name:currentUser.displayName                 
            })               
        } else{
          this.setState({
            isEmail:false,
            isName:false
          })
        }
    });  
}      
}
  onChangeHandle = (e) =>{     
    this.setState(
      {       
        ...this.state, 
        [e.target.name]: e.target.value        
      }
    )  
    // console.log(this.state);  
  }
 
  sendMessage(e){ 
    e.preventDefault();
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const test = pattern.test(this.state.email);    
    if(test){
      this.setState({
        notEmail:false
      })
      if (this.state.message.length>0){
        this.setState({
          loading:true,
          messageRequest:false
        })
        const data = {
          name:this.state.name,
          email:this.state.email,
          message:this.state.message
        }
        setTimeout(()=>{         
          firebase.database().ref().child('contact/').push(data);  
          this.setState({
            success:true,            
            loading:false
          })
        },1000);     
      } else{
        this.setState({
          messageRequest:true
        })
      }

    } else {
      this.setState({
        notEmail:true,       
      })
    }
    this.setState({ 
      email:"",
      name:"",
      message:""
    })
      
    // console.log(this.state); 
  }
  closeBtn(){
    this.setState({      
      success:false
    })
  }
  render(){    
    return (
      <div className="container">
        <div className="contact-page">
          <div className="contact-message">
            <h2>Send a message</h2>
            {
              this.state.isEmail
              ? <p>Email: {this.state.email}</p>
              : <Input name="name" type="text" value={this.state.name} onChange={this.onChangeHandle} label="Name" required></Input>
            }
            {
              this.state.isName
              ? <p>Name: {this.state.name}</p>
              : <Input name="email" type="email" value={this.state.email} onChange={this.onChangeHandle} label="Email" required></Input>
            }            
            {this.state.notEmail ? <p className="message error">The email address must be in xxx@yyy.zzz format. Please try again</p> : null}
            <textarea name="message" value={this.state.message} onChange={this.onChangeHandle} placeholder="Your Message" rows="7"></textarea>
            {this.state.messageRequest ? <p className="message error">Please leave your message</p> : null}
            <div className="btn-actions">
              <button className="action submit" onClick={this.sendMessage}>Send message</button>
            </div>
            {
              this.state.loading
              ? <Loading></Loading>
              : null
            }
            {
              this.state.success 
              ? <div className="popup">
                  <div className="content-popup">
                    <p>Sending message success</p>
                    <button className="action close" onClick={this.closeBtn}>close</button>
                  </div>
                </div>
              : null
            }   
          </div>
          <div className="contact-info">
            <h2>Our Info</h2>
            <ul className="info">
              <li><strong>Add:</strong> 301 The Greenhouse London, E2 8DY UK</li>
              <li><strong>Mail:</strong> support@domain.com</li>
              <li><strong>Phone:</strong> 820-885-3321</li>
            </ul>
          </div>        
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return{    
   isLogin: state.userReducer.isSignIn
  }    
}
export default connect(mapStateToProps)(Contact);
