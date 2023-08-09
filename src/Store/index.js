import {configureStore} from "@reduxjs/toolkit";
import UiSlice from "./ui-slice";
const store=configureStore({
    reducer:{
        Ui:UiSlice.reducer
    }
})
export default store;