import { Navbar, Nav, Container, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import React, { useState } from 'react'
import logo from './img/logo2.png'
import { BsSearch } from 'react-icons/bs';
import ModalLogin from './ModalLogin'
import CardWidjet from './CardWidjet'

import Particles from "react-tsparticles";

const NavBar = () => {

    return <>
        
        <Navbar className='border-bottom bg-details' sticky='top'>
       
            <Container container-fluid>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="300"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#">Inicio</Nav.Link>
                    <Nav.Link href="#">Novedades</Nav.Link>
                    <NavDropdown title="Productos" id="nav-dropdown" >
                        
                            <NavDropdown.Item href="#action3" >Poleras </NavDropdown.Item>
                            <NavDropdown.Item href="#action4" >Accesorios</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Calzado</NavDropdown.Item>
                        
                    </NavDropdown>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Buscar"
                            className="me-2"
                            aria-label="Buscar"
                        />
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