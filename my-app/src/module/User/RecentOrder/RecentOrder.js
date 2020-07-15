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
        return(
            <div className="recent-order">
                <p className="order-view" onClick={this.viewMore}>Order: <strong>{this.props.orderNum}</strong></p>
                {
                    this.state.isClick
                    ? <div className="order">
                        <div className="order-detail">
                        {
                            this.props.item.map((item, key)=><Order key={key} name={item.name} price={item.price} quantity={item.quantity} imageUrl={item.imageUrl}></Order>)
                        }
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
