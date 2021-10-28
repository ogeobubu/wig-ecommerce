import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

function App() {
  const user = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/products/:category"
          component={user ? ProductList : Login}
        />
        <Route
          exact
          path="/products/:category"
          component={user ? ProductList : Login}
        />
        <Route exact path="/product/:id" component={user ? Product : Login} />
        <Route exact path="/cart" component={user ? Cart : Login} />
        <Route exact path="/login" component={user ? Home : Login} />
        <Route exact path="/create" component={user ? Home : Register} />
      </Switch>
    </Router>
  );
}

export default App;
