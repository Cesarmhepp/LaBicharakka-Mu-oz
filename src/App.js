import logo from './components/img/4415.png';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Particles from "react-tsparticles";

function App() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };




  return (
    <div className="App">
      <Particles className='particles'
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
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
      
      <NavBar className="bg-one" />
      <Footer mensaje="Hola Soy el footer de los 80" />

    </div>
  );
}

export default App;
