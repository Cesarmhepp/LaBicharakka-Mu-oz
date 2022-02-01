import logo from './components/img/4415.png';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import NoPage from './components/NoPage'
import Layout from './components/Layout'
import ItemDetailContainer from './components/Items/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import Categories from './components/Category/Categories';
import Category from './components/Category/Category';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/product/:id" element={<ItemDetailContainer/>} />
          <Route path="/*" exact element={<NoPage />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/category/:id" element={<Category/>}/>
          <Route path="/categories" element={<Categories/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
