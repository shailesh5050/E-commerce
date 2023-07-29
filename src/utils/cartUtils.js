export const updateCart =(state)=>{
     //calculate total price
     state.totalPrice = state.cartItems.reduce((acc,item)=>acc+item.price*item.qty,0);
     //calculate tax price
     state.taxPrice = state.totalPrice * 0.15; 
     //calculate shipping price
     state.shippingPrice = state.totalPrice > 100 ? 0 : 10;
     //calculate total price
     state.totalPrice = Number(state.totalPrice + state.taxPrice + state.shippingPrice);

        localStorage.setItem('cartItems',JSON.stringify(state.cartItems));

        return state;
}