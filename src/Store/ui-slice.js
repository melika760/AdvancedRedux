import { createSlice } from "@reduxjs/toolkit";
const UiSlice=createSlice({
    name:"Ui",
    initialState:{ShowCard:false},
    reducers:{
        toggle(state){
state.ShowCard=!state.ShowCard
        }
    }
})
export const UiActions=UiSlice.actions
export default UiSlice;
