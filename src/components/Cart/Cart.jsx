import { Table, Button, Row, Col, Container, Image } from 'react-bootstrap'
import React, { useContext } from 'react'
import { CartContext } from '../../components/Context/CartContext'
import SadImg from '../../components/img/sad-emoji.png'
import { Link } from 'react-router-dom'



const Cart = ({ quantityToAdd }) => {

    const { cartItems, CartItemsQnt, RemoveItem, totalPay } = useContext(CartContext);
    console.log(cartItems);


    return (


        <Container>
            <div>
                <Row>
                    <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                        {
                            CartItemsQnt() !== 0 ?
                                <Table striped bordered hover responsive size="sm">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th style={{ textAlign: 'center', justifyContent: 'center' }}>Producto</th>
                                            <th>Cantidad</th>
                                            <th>Precio unitario</th>
                                            <th>Precio total</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ textAlign: 'left' }}>

                                        {
                                            cartItems.map((item, index) => (
                                                <>
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td><Image src={item.pictures[0].secure_url} style={{ width: '3%', marginRight: 15 }} />{item.title.match(/^(\S+)\s(.*)/).slice(2)}</td>
                                                        <td style={{ textAlign: 'center', justifyContent: 'center' }}>{item.qty}</td>
                                                        <td style={{ textAlign: 'center', justifyContent: 'center' }}>{item.price}</td>
                                                        <td style={{ textAlign: 'center', justifyContent: 'center' }}>{item.qty * item.price}</td>
                                                        <td style={{ textAlign: 'center', justifyContent: 'center' }}><Button variant="warning" onClick={() => RemoveItem(item)}>X</Button></td>
                                                    </tr>
                                                </>
                                            ))
                                        }
                                        <tr>
                                            <td></td>
                                            <td></td>

                                            <td style={{ textAlign: 'center', justifyContent: 'center' }}>Total a pagar</td>
                                            <td style={{ textAlign: 'center', justifyContent: 'center' }}>
                                                {
                                                    totalPay()
                                                }
                                            </td>
                                            <td style={{ textAlign: 'center', justifyContent: 'center' }}><Button variant="success">Pagar</Button></td>
                                        </tr>


                                    </tbody>
                                </Table>
                                : <div>
                                    <Container>
                                        <Row>
                                            <Col xs={12}>
                                                <Image src={SadImg} style={{ width: '20%', marginRight: 15, marginBottom: 30, marginTop: 20 }} />
                                            </Col>
                                            <Col xs={12} style={{ marginBottom: 20 }}>
                                                <h3>Nada en el carrito... aun.</h3>
                                            </Col>
                                            <Col xs={12} style={{ marginBottom: 20 }}>
                                                <Link to="/"><Button variant='warning'>Ir a comprar =D!</Button></Link>
                                            </Col>
                                        </Row>
                                    </Container>

                                </div>


                        }


                    </Col>
                </Row>

            </div>
        </Container>

    )

}

export default Cart