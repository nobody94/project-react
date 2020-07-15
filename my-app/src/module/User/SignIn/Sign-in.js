import React from 'react';
import Input from '../../Utility/Input/Input';
import firebase from '../../../firebase/firebaseConfig';
import {Loading} from '../../Utility/Loading/Loading';
class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       password:"",
       email:"",
       notEmail:false,
       emailNotExist:false,
       wrongPassword:false,
       loading:false
    };   
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.loginAccount = this.loginAccount.bind(this);
    // this.signInWithGoogle = this.signInWithGoogle.bind(this);
  }  
  onChangeHandle = (e) =>{  
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    )    
  }
 
  loginAccount(e){
    e.preventDefault();
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const test = pattern.test(this.state.email);
    const currentComponent = this;
    if(test){     
      this.setState({
        notEmail:false,      
      });
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(()=>{
        firebase.auth().onAuthStateChanged(user => {
          if(user) {
            currentComponent.setState({
             loading:true
            })
            setTimeout(()=>{
              currentComponent.setState({
                password:"",
                email:"",
                loading:false
              })
              const currentUser =  firebase.auth().currentUser;
              const userId = currentUser.uid;
              // console.log(currentUser);
              window.location = `/user/${userId}`;  
            },1000)            
          }
         
        });        
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          // alert('Wrong password.');
          // this.setState({wrongPassword:true})
          currentComponent.setState({wrongPassword:true})
        } else{
          currentComponent.setState({wrongPassword:false})
        }
        if(errorCode === "auth/user-not-found"){
          // alert('User not found.');
          // alert(errorMessage);
          currentComponent.setState({emailNotExist:true})
        } else {
          currentComponent.setState({emailNotExist:false})
        }
        console.log(error);
      }); 
    }else{
      this.setState({
        notEmail:true,
        emailNotExist:false,
        wrongPassword:false
      })
    }
  }
  signInWithGoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log('User>>Goole>>>>', user);
      const userId = user.uid;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
  render(){
    
    return (
      <form className="sign-in">
        <h2 className="title">I already have an account</h2>
        <p>Sign in with your email and password</p>        
        <Input name="email" type="email" value={this.state.email} onChange={this.onChangeHandle} label="Email" required></Input>
        {this.state.notEmail ? <p className="message error">The email address must be in xxx@yyy.zzz format. Please try again</p> : null}
        {this.state.emailNotExist ? <p className="message error">Can not found this account. Please create one or try again</p>:null}        
        <Input name="password" type="password" value={this.state.password} onChange={this.onChangeHandle} label="Password" required></Input>
        {this.state.wrongPassword ? <p className="message error">Wrong password. Please try again</p>:null}
        <div className="btn-actions">
          <button className="action login" onClick={(e)=>this.loginAccount(e)}>Sign in</button>
          <button className="action google-login" onClick={this.signInWithGoogle}>Sign in with google</button>
        </div>
        {
          this.state.loading
          ? <Loading></Loading>
          : null
        }
      </form>
    );
  }  
}

export default SignIn;
