import { createSlice } from "@reduxjs/toolkit";
const UiSlice=createSlice({
    name:"Ui",
    initialState:{ShowCard:false, notification:null},
    reducers:{
        toggle(state){
state.ShowCard=!state.ShowCard
        },
        ShowNotif(state,action){
state.notification={
status:action.payload.status,
title:action.payload.title,
message:action.payload.message
}
        }
    }
})
export const UiActions=UiSlice.actions
export default UiSlice;
