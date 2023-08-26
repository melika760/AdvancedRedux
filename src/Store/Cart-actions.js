import { CartActions } from "./Crat-slice";
import { UiActions } from "./ui-slice";
export const FetchData=()=>{
    return async(dispatch)=>{
        const fetchingdata= async()=>{
            const response= await fetch('https://reduxad-default-rtdb.firebaseio.com/item.json')
        if(!response.ok){
            throw new Error("Fetching Data Faild")
        }
        const responseData= await response.json();
        return responseData;
        }
        try{
const cartaction= await fetchingdata();
dispatch(CartActions.replaceCart({
    items:cartaction.items || [],
    totalquantity:cartaction.totalquantity,
}))
        
        }catch(error){
            dispatch(UiActions.ShowNotif({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!'
            }))  
        }
        
    }
}
export const sendCartData=(Cart)=>{
return async(dispatch)=>{
dispatch(UiActions.ShowNotif({
    status: 'pending',
     title: 'Sending...',
     message: 'Sending cart data!'
}));
const sendRequest=async()=>{
const response= await fetch('https://reduxad-default-rtdb.firebaseio.com/item.json',{
    method:'PUT',
    body:JSON.stringify(Cart)
})
if (!response.ok){
    throw new Error("Sending Card Data Failed")
}

}
try{
    await sendRequest();
    dispatch(UiActions.ShowNotif({
        status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!'
    }))
 }catch(error){
 dispatch(UiActions.ShowNotif({
     status: 'error',
     title: 'Error!',
     message: 'Sending cart data failed!'
 }))
 }
}
}