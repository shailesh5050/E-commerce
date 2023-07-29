import {createSlice} from '@reduxjs/toolkit'
import { updateCart } from '../utils/cartUtils';
// const initialState = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : {cartItems:[]};
 const initialState = {cartItems:[]};
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const item = action.payload;
            const existItem = state.cartItems.find((x)=>x._id === item._id);            
            if (existItem) {
                // If the item already exists in the cart, replace it with the updated item
                state.cartItems= state.cartItems.map((x) => x._id === existItem._id ? item : x);
            } else {
                // If the item does not exist in the cart, add it to the end of the array
                state.cartItems= [...state.cartItems, item];
            }

            return updateCart(state);
        
        },
        removeFromCart:(state,action)=>{
            return  {...state,cartItems:state.cartItems.filter((x)=>x._id !== action.payload)}
           


        }
    }
})
export const {addToCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;