import userTypes from './user-types';

const initialState = {
  isSignIn:false,
};

const reducer = ( state = initialState, action ) =>{
    switch ( action.type ) {
        case userTypes.ISSIGNIN:
            return{
                isSignIn:true
            }
        case userTypes.ISLOGOUT:
            return{
                isSignIn:false
            }
        default:
            return state;
    }    
}

export default reducer;