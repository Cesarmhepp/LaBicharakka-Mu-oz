import { Button } from 'react-bootstrap'
import React, { useContext, useState } from 'react'
import { BsCart2 } from 'react-icons/bs';
import { CartContext } from '../../components/Context/CartContext'

const CardWidjet = () => {


    const { AddItem, isInCart, cartItems } = useContext(CartContext);
    return <>
        <Button variant="warning">
            <a><BsCart2 /></a>
            <a style={{ marginLeft: 2 }}>{cartItems.length}</a>
        </Button>
    </>


}

export default CardWidjet