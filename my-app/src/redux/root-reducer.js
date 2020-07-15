import { combineReducers } from 'redux';
import homeData from '../module/Pages/Home/redux/home-data';
import shopData from '../module/Shop/redux/shop-data';
import cartReducer from '../module/Cart/redux/cart-reducer';
import userReducer from '../module/User/redux/user-reducer';
const rootReducer = combineReducers({
    homeData,
    shopData,
    cartReducer,
    userReducer
})
export default rootReducer;