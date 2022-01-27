import { Navbar, Nav, Container, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import React, { useState } from 'react'
import logo from './img/logo2.png'
import { BsSearch } from 'react-icons/bs';
import ModalLogin from './ModalLogin'
import CardWidjet from './CardWidjet'
import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {

    const [search, setOnSearch]=useState(false)

    const onSearchChange=(event)=>{
        event.preventDefault();
        console.log(event.target.value)
        let query=event.target.value



      // if(query.length>6){

       // }
    }

    return <>

        <Navbar className='border-bottom bg-details' sticky='top'>

            <Container container-fluid>

                <Link to={"/"}>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="300"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                </Link>

                <Nav className="me-auto">
                    <NavLink to="/" className="nav-link">Inicio</NavLink>
                    <NavLink to={"/categories"} className="nav-link" activeClassName="active">Categorias</NavLink>
                    <NavDropdown title="Productos" id="nav-dropdown" >
                        <NavDropdown.Item href="#action3" >Poleras </NavDropdown.Item>
                        <NavDropdown.Item href="#action4" >Accesorios</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Calzado</NavDropdown.Item>

                    </NavDropdown>
                    <Form className="d-flex" style={{position:"relative"}}>
                        <FormControl
                            type="search"
                            onChange={onSearchChange}
                            placeholder="Buscar"
                            className="me-2"
                            aria-label="Buscar"
                        />
                        <div style={{position:"absolute", left:0, top:0, wditrh:200, height:300}}></div>
                        <Button variant="warning"><BsSearch /></Button>
                    </Form>


                </Nav>


                <CardWidjet />
                <ModalLogin />
            </Container>
        </Navbar>
    </>
}

export default NavBar