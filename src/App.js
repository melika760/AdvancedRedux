import { Fragment,useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector,useDispatch } from 'react-redux';
import Notification from './components/UI/Notification';
import { sendCartData } from './Store/Cart-actions';

let isinitial=true
function App() {
  const ShowCrat=useSelector(state=>state.Ui.ShowCard);
  const Notif=useSelector(state=>state.Ui.notification);
  const cart= useSelector(state=>state.Cart)
  const dispatch=useDispatch()
  useEffect(()=>
  {if(isinitial){
    isinitial=false;
    return;
  }
  if(cart.changed){dispatch(sendCartData(cart))}

  },[cart,dispatch])
  return (
    <Fragment>
      {Notif && <Notification status={Notif.status} title={Notif.title} message={Notif.message}/>}
    <Layout>
     {ShowCrat && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
