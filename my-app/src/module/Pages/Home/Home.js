import React from 'react';
import './Home.css';
import {connect} from 'react-redux';
import Item from './HomeItem';

function Home(props) { 
  return (
    <div className="container">
      <div className="home-banner">         
        {
          props.data.map(
            (item)=><Item 
                      key={item.id} 
                      imageUrl={item.imageUrl} 
                      title={item.title} 
                      linkUrl={item.linkUrl} 
                      size={item.size}/>
          )
        }
      </div>
    </div>
  );
}

function mapStateToProps(state){
  return{
    data : state.homeData
  }
}
export default connect(mapStateToProps)(Home);
