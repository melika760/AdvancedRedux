import {configureStore} from "@reduxjs/toolkit";
import UiSlice from "./ui-slice";
import CartSlice from "./Crat-slice";
const store=configureStore({
    reducer:{
        Ui:UiSlice.reducer,
        Cart:CartSlice.reducer
    }
})
export default store;