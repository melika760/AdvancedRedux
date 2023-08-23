import { createSlice } from "@reduxjs/toolkit";
const CartSlice=createSlice({
    name:"Cart",
    initialState:{
        items:[],
        totalquantity:0,
        changed:false
    },
    reducers:{
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
          },
        addItem(state,action){
            const NewItem=action.payload;
            const existingItem=state.items.find((item)=>item.id===NewItem.id);
            state.totalquantity++;
            state.changed=true
            if(!existingItem){
                state.items.push({
title:NewItem.title,
id:NewItem.id,
price:NewItem.price,
quantity:1,
totalprice:NewItem.price

                })
            }
            else{
                existingItem.quantity++;
                existingItem.totalprice=existingItem.totalprice+NewItem.price
            }
        },
        RemoveItem(state,action){
            const id=action.payload;
            state.totalquantity--;
            state.changed=true
            const existingItem=state.items.find(item=>item.id===id);
            if(existingItem.quantity===1){
                state.items=state.items.filter(item=>item.id !==id)
            }
            else{
                existingItem.quantity--;
                existingItem.totalprice=existingItem.totalprice-existingItem.price;
            }
        }
    }
})
export const CartActions=CartSlice.actions;
export default CartSlice;