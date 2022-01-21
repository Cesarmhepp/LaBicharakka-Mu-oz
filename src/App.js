import logo from './components/img/4415.png';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { useState, useEffect } from 'react';
import ItemCount from './components/ItemCount'
import getProductsFromCategory from './services/Products';
import ItemListContainer from './components/ItemListContainer'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    let mounted = true;
    setLoading(true);
    getProductsFromCategory("MLC", "MLC1055").then(items => {
      if (mounted) {
        console.log(items.results)
        setProducts(items.results)
        setTimeout(() => {
          setLoading(false)
        }, 3000);
      }
    })
    return () => mounted = false;
  }, [])

  return (
    <div className="App">
      <NavBar />
      <div>
        <ItemListContainer products={products} />
        <ItemCount className='text-center align-items-center justify-content-center' />
        <Footer mensaje="Hola Soy el footer de los 80" />
      </div>


    </div>
  );
}

export default App;
