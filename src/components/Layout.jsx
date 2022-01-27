import { useState } from "react"
import Footer from './Footer';
import NavBar from './NavBar';
import { Outlet } from "react-router-dom";

const Layout = () => {
    const [loading, setLoading] = useState(false);
   

    return (
        <div className="App">
            <NavBar />
            
            <Outlet/>
            <Footer mensaje="Hola Soy el footer de los 80" />
            
        </div>
    )

}

export default Layout