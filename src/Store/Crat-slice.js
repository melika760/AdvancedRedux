import { createSlice } from "@reduxjs/toolkit";
const CartSlice=createSlice({
    name:"Cart",
    initialState:{
        items:[],
        totalquantity:0,
    },
    reducers:{
        addItem(state,action){
            const NewItem=action.payload;
            const existingItem=state.items.find((item)=>item.id===NewItem.id);
            state.totalquantity++;
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
                existingItem.totalprice=existingItem.price+NewItem.price
            }
        },
        RemoveItem(state,action){
            const id=action.payload;
            state.totalquantity--;
            const existingItem=state.items.find(item=>item.id===id);
            if(existingItem.quantity===1){
                state.items=state.items.filter(item=>item.id !==id)
            }
            else{
                existingItem.quantity--;
            }
        }
    }
})
export const CartActions=CartSlice.actions;
export default CartSlice;