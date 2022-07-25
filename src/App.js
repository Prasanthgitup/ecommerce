import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Login from "./component/login.component";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Switch>
        <Route exact path="/" component={<Home/>} /> 
        <Route exact path="/products" component={<Products/>} />
      </Switch> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/product" element={<Product />}></Route>
      </Routes>
    </div>
  );
}

export default App;
