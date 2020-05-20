import React from 'react';
import Order from './Order-detail';
import './RecentOrder.css';

class RecentOreder extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isClick :false
        }
        this.viewMore = this.viewMore.bind(this);
    }  
    viewMore(){
        this.setState({
            isClick: !this.state.isClick
        })
    }
    render(){ 
        const order =  this.props.item.map((item)=>{      
            for(var i =0 ; i< this.props.item.length ;i++){         
              return  <Order key={item.id} name={item.name} price={item.price} quantity={item.quantity} imageUrl={item.imageUrl}></Order>
            }  
          }); 
        return(
            <div className="recent-order">
                <p className="order-view" onClick={this.viewMore}>Order: <strong>{this.props.orderNum}</strong></p>
                {
                    this.state.isClick
                    ? <div className="order">
                        <div className="order-detail">
                        {order}
                        </div>
                        <p className="total">Total: <strong>{this.props.total}</strong></p> 
                    </div>
                    : null
                }
                
            </div>
        )
    }
}

export default RecentOreder;
