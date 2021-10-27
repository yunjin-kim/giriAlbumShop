import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import CartPage from './pages/CartPage';
import MusicPage from './pages/MusicPage';
import MusiucListPage from './pages/MusiucListPage';
import OrderPage from './pages/OrderPage';
import PayPage from './pages/PayPage';

function App() {
  console.log("App")


  return (
    <>  
      <NavBar />
      <Route path="/" component={MusiucListPage} exact={true} />
      <Route path="/:url" component={MusicPage} />
      <Route path="/cart" component={CartPage} />
      <Route path="/order" component={OrderPage} />
      <Route path="/pay" component={PayPage} />
    </>
  );
}

export default App;
