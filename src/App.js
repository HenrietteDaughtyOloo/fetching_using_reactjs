import logo from './logo.svg';
import './App.css';
import{Routes, Route, BrowserRouter, Link,} from 'react-router-dom';
import'./App.css';
import Login from './Login';
import Form from './AppendProduct'
import Products from './Products';
import ProductDetails from './ProductDetails';
import AddProduct from './AddProduct';

function App() {
      return (
    <div>
      <BrowserRouter>
      <nav className='navbar'>
        <Link className='links'to="/Login">Home</Link>
        <Link className='links' to="/Form">Details</Link>

        <Link className='links' to="/add-product">Append</Link>
      </nav>
  
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Form" element={<Products />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/add-product" element={<AddProduct />} />

        </Routes>
      </BrowserRouter>
    </div>
  );

  
}

export default App;
