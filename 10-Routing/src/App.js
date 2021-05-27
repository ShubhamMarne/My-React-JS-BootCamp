import {Redirect, Route, Switch } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import ProductDetails from './components/ProductsDetails';
import Products from './Products';
import Welcome from './Welcome';

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <MainHeader/>
      <Switch>
      <Route path="/" exact>
        <Redirect to="/welcome"/>
      </Route>

      <Route path="/welcome" exact>
        <Welcome/>
      </Route>

      <Route path="/products" exact>
        <Products/>
      </Route>

      <Route path="/products/:productName" exact>
        <ProductDetails/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
