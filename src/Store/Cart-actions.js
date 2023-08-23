import { UiActions } from "./ui-slice";
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