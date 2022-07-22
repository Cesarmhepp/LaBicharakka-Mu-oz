import { Navbar, Nav, Container, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import React from 'react'
import logo from './img/mehenra-logo.png'
import { BsSearch } from 'react-icons/bs';
import CardWidjet from './Cart/CardWidjet'
import { Link, NavLink } from 'react-router-dom'


const NavBar = ({ categories }) => {


    return <>

        <Navbar collapseOnSelect expand="md" className='border-bottom bg-one shadow' sticky='top'>
            <Container>
                <Link to={"/"}>
                    <Navbar.Brand>
                        <img
                            alt=""
                            src={logo}
                            height="90"
                        />

                    </Navbar.Brand>

                </Link>
                <div>
                    <h3 className='anime-font mx-5'>La Bichatech</h3>
                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='anime-font'>
                        <NavLink to="/" className="nav-link"><b>Inicio</b></NavLink>
                        <NavDropdown title={"Categorias"} id="basic-nav-dropdown" style={{ textDecoration: "none" }}>
                            {categories.slice(0, 6).map(category => {
                                return (
                                    <NavDropdown.Item key={category.id}
                                        as={Link}
                                        to={`/category/${category.id}`}>
                                        {category.name}
                                    </NavDropdown.Item>)
                            })}
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to={`/categories`}><b>Ver todas</b></NavDropdown.Item>
                        </NavDropdown>
                        <NavLink to="/" className="nav-link"><b>Nosotros</b></NavLink>
                        <NavLink to="/" className="nav-link"><b>Servicios</b></NavLink>

                    </Nav>
                    <Nav className='mx-5'>
                    <CardWidjet />

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}

export default NavBar