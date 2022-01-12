import logo from './components/img/4415.png';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Particles from "react-tsparticles";
import Title from './components/Title';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'

function App() {
  const [name, setName] = useState("Eren")
  const [itemsQty, setItemsQty] = useState(0);


  useEffect(() => {
    console.log("Cambie el item de cantidad","Ahora tengo",itemsQty);
    console.log("cambie en la fecha ",new Date())
    return () => {
      console.clear()
      console.log("Se desmonto el componente")
     
    }
  },[itemsQty])




  return (
    <div className="App">
      <Particles className='particles'
        id="tsparticles"
        options={{
          fpsLimit: 60,
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 0.5,
              straight: false,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            }
          },
          detectRetina: true,
        }}
      />
      <header className="App-header">
        
        <img src={logo} className="App-logo hover-zoom" alt="logo" />
        La Bicharraka
        <a>Contemplad a la reina de los lagartos</a>
      </header>
      
      <NavBar />
      


      <div>
        <Button onClick={() => setName("Mika")} variant="primary">Cambiar nombre</Button>
        <h1>
          {name}
        </h1>
      </div>
      <div>
        <Button onClick={() => setItemsQty(itemsQty + 1)} variant="primary">+</Button>
        <Button onClick={() => setItemsQty(itemsQty - 1)} variant="primary">-</Button>
        <h1>
          {itemsQty}
        </h1>
      </div>

      <Footer mensaje="Hola Soy el footer de los 80" />

    </div>
  );
}

export default App;
