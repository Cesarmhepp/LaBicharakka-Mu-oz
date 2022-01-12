import { Navbar, Nav, Container, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import React, { useState } from 'react'
import logo from './img/4415.png'
import { BsSearch } from 'react-icons/bs';
import ModalLogin from './ModalLogin'

const NavBar = () => {


    return <>
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossorigin="anonymous"
        />
        <Navbar variant="dark" fixed="top" className='border-bottom'>
            <Container container-fluid classname="bg-primary">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    La Bicharraka
                </Navbar.Brand>
                <br />
                <Nav className="me-auto">
                    <Nav.Link href="#">Inicio</Nav.Link>
                    <Nav.Link href="#">Novedades</Nav.Link>
                    <NavDropdown title="Productos" id="navbarScrollingDropdown" className='text-light' >
                        <div>
                            <NavDropdown.Item href="#action3" >Poleras </NavDropdown.Item>
                            <NavDropdown.Item href="#action4" >Accesorios</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Calzado</NavDropdown.Item>
                        </div>
                    </NavDropdown>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Buscar"
                        />
                        <Button variant="outline-success bg-one text-black"><BsSearch /></Button>
                    </Form>


                </Nav>
                


                <ModalLogin/>
            </Container>
        </Navbar>
    </>
}

export default NavBar