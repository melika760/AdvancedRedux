import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';


function App() {
  const ShowCrat=useSelector(state=>state.Ui.ShowCard)
  return (
    <Layout>
     {ShowCrat && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
