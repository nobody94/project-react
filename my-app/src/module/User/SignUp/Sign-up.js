import React from 'react';
import Input from '../../Utility/Input/Input';
import firebase from '../../../firebase/firebaseConfig';
import {Loading} from '../../Utility/Loading/Loading';
class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       name:"",
       password:"",
       email:"",
       confirmPassword:"",
       message:false,
       isMatch:false,
       notEmail:false,
       emailIsExist:false,
       loading:false
    };   
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.createUser = this.createUser.bind(this);
    this.closeBtn = this.closeBtn.bind(this);    
  }
  onChangeHandle = (e) =>{  
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    )   
  }

  createUser(e) {
    e.preventDefault();
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const test = pattern.test(this.state.email);
    const currentComponent = this;
    if(test){     
      if(this.state.confirmPassword !== this.state.password){
        this.setState({
         isMatch:true,
         name:"",
         password:"",
         email:"",
         confirmPassword:"",
        })
      }else{  
        currentComponent.setState({
          loading:true
        })
        setTimeout(()=>{
          currentComponent.setState({
            loading:false
          })
          firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)  
          .then(function(user){
            if(user) {
              console.log('username: '+currentComponent.state.name);
              user.user.updateProfile({
                displayName: currentComponent.state.name,
             });
              currentComponent.setState({           
                 name:"",
                 password:"",
                 email:"",
                 confirmPassword:"",
              })
            }        
            currentComponent.setState({           
              message:true,
            })
          })    
          .catch(function(error) {
            var errorCode = error.code;
            console.log(errorCode);    
            currentComponent.setState({           
              name:"",
              password:"",
              email:"",
              confirmPassword:"",
           })     
            if(errorCode == "auth/email-already-in-use"){
               currentComponent.setState({
                message:false,
                emailIsExist:true
              })
            } 
          }); 
          firebase.auth().onAuthStateChanged(user => {
              if(user) { 
                const currentUser =  firebase.auth().currentUser; 
                console.log(currentUser.uid); 
                const data = {
                  id:currentUser.uid,
                  email:currentUser.email,                
                }
                firebase.database().ref('users/' + currentUser.uid).set(data);
              }          
          });
        },1000);       
      } 
      this.setState({
        notEmail:false,
      }); 
    }else{
      this.setState({
        notEmail:true,
        name:"",
        password:"",
        email:"",
        confirmPassword:"",
      });
    }
  }
 
  closeBtn(){
    this.setState({      
      message:false
    })
  }
  render(){ 
    return (
      <form className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <p>Sign up with your email and password</p>
        <Input name="name" type="text" value={this.state.name} onChange={this.onChangeHandle} label="User name" required></Input>
        <Input name="email" type="email" value={this.state.email} onChange={this.onChangeHandle} label="Email" required></Input>
        {this.state.notEmail ? <p className="message error">The email address must be in xxx@yyy.zzz format. Please try again</p> : null}
        {this.state.emailIsExist ? <p className="message error">This email is already sign up. Please sign in or create other account</p>:null}
        <Input name="password" type="password" value={this.state.password} onChange={this.onChangeHandle} label="Password" required></Input>       
        <Input name="confirmPassword" type="password" value={this.state.confirmPassword} onChange={this.onChangeHandle} label="Confirm password" required></Input>   
        {this.state.isMatch ? <p className="message error">Password dont match please try again</p>:null}      
        <div className="btn-actions">
          <button className="action sign-up" onClick={this.createUser}>Sign up</button>
        </div>      
        {
          this.state.message 
          ? <div className="popup">
              <div className="content-popup">
                <p>Create account success</p>
                <button className="action close" onClick={this.closeBtn}>close</button>
              </div>
            </div>
          :null
        }  
        {
          this.state.loading
          ? <Loading></Loading>
          : null
        }
      </form>
    );
  } 
}

export default SignUp