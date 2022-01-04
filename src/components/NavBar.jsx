import { Navbar, Nav, Container, Form, FormControl, Button, NavDropdown, Modal,Row, Col } from 'react-bootstrap'
import { React, useState } from 'react'
import logo from './img/4415.png'
import { BsSearch } from 'react-icons/bs';

const NavBar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)



    return <>
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossorigin="anonymous"
        />
        <Navbar variant="dark" fixed="top" className='border-bottom'>
            <Container className='bg-one'>
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
                    <NavDropdown title="Productos" id="navbarScrollingDropdown" >
                        <div className='bg-one'>
                            <NavDropdown.Item href="#action3" >Poleras </NavDropdown.Item>
                            <NavDropdown.Item href="#action4" >Accesorios</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Calzado</NavDropdown.Item>
                        </div>
                    </NavDropdown>
                </Nav>
                <br />
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Buscar"
                    />
                    <Button variant="outline-success bg-one text-black"><BsSearch /></Button>
                </Form>
                <Button variant="primary bg-one" onClick={handleShow}>
                    Login
                </Button>

                <Modal show={show} onHide={handleClose} >
                    <Modal.Header closeButton className='form2' >
                        <Modal.Title>Iniciar Sesion</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='bg-one'>
                        <Form>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Form.Label column sm="2">
                                    Correo
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    Contraseña
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="password" placeholder="Password" />
                                </Col>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer className='form2'>
                        <Button variant="secondary bg-one" onClick={handleClose}>
                            Cerrar
                        </Button>
                        <Button variant="primary bg-one" onClick={handleClose}>
                            Iniciar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </Navbar>
    </>
}

export default NavBar