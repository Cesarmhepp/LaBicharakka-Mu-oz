import { Navbar, Nav, Container, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import React, { useState } from 'react'
import logo from './img/4415.png'
import { BsCart2 } from 'react-icons/bs';
import ModalLogin from './ModalLogin'

const CardWidjet = () => {

    const [itemsQtyCard, setitemsQtyCard] = useState(3);

    return <>
        <Button variant="primary bg-one d-flex" className="outline-success" onClick={()=>setitemsQtyCard(itemsQtyCard+1)}>
            <a><BsCart2 className='' />{itemsQtyCard}</a>
        </Button>
    </>


}

export default CardWidjet