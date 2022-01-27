import logo from './components/img/4415.png';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import NoPage from './components/NoPage'
import Layout from './components/Layout'
import ItemDetailContainer from './components/ItemDetailContainer'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/product/:id" element={<ItemDetailContainer/>} />
          <Route path="/*" exact element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
