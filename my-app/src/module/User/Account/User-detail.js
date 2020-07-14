import React,{lazy,Suspense} from 'react';
import RecentOrder from '../RecentOrder/RecentOrder';
import firebase from '../../../firebase/firebaseConfig';
import {Loading} from '../../Utility/Loading/Loading';
const Information = lazy(()=> import('./User-information'));
class Detail extends React.Component{
    constructor(props){
        super(props);
        this.state = {   
            recentOrder:null,
            message: ''
         }; 
      }
    //   componentDidMount(){        
    //     firebase.auth().onAuthStateChanged(user => {
    //         const currentComponent = this;
    //         if(user) {
    //             const currentUser = firebase.auth().currentUser;   
    //             if(currentUser.uid){
    //                 firebase.database().ref('users/' + currentUser.uid).on('value', function(snapshot) {
    //                     const accountInfo = snapshot.val();
    //                   // console.log(snapshot.val());                      
    //                   if(accountInfo.shopping){
    //                     currentComponent.setState({
    //                         isOrder:true,
    //                         recentOrder:accountInfo.shopping
    //                     })
    //                   } else{
    //                       currentComponent.setState({
    //                           isOrder:false
    //                       })
    //                   }
    //                 });  
    //             }                 
    //         } 
    //     });        
    // } 
    componentWillMount(){
        firebase.auth().onAuthStateChanged(user => {
            const currentComponent = this;
            if(user) {
                const currentUser = firebase.auth().currentUser;   
                if(currentUser.uid){
                    firebase.database().ref('users/' + currentUser.uid).on('value', function(snapshot) {
                        const accountInfo = snapshot.val();
                      // console.log(snapshot.val());                      
                      if(accountInfo.shopping){
                        currentComponent.setState({
                            recentOrder:accountInfo.shopping,
                            message:''

                        })
                      } else{
                          currentComponent.setState({
                              message:'Dont have any order yet'
                          })
                      }
                    });  
                }                 
            } 
        });    
    } 
    ListItem(){     
        // console.log(this.state.recentOrder ? Object.values(this.state.recentOrder) : '');    
        return this.state.recentOrder ? Object.values(this.state.recentOrder).map((item, key)=>{
            for(var i = 0 ; i< Object.values(this.state.recentOrder).length ;i++){
                return <RecentOrder key={key} orderNum={item.orderNum} item={item.item} total={item.totalPrice}></RecentOrder>;
            }
        })
        : '';        
    }
   render(){
    return(
        <div className="user-page">
            <h3 className="title">My Account</h3>
            <Suspense fallback={<Loading></Loading>}>
                <Information></Information>    
            </Suspense> 
            <Suspense fallback={<Loading></Loading>}>
                <h4>Recent Order</h4>
                {
                    this.state.message
                    ? <p className="message">{this.state.message}</p>
                    : this.ListItem()
                } 
            </Suspense> 
        </div>
    );
   }
}
export default Detail;