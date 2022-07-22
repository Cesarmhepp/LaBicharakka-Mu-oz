import { Button } from 'react-bootstrap'
import React, { useContext } from 'react'
import { CartContext } from '../../components/Context/CartContext'
import {Link} from 'react-router-dom'

const CardWidjet = () => {


    const { CartItemsQnt } = useContext(CartContext);
    return <>
        <Link to={"/cart"}>
            <Button variant="warning">
                <a style={{ marginLeft: 3 }}>{CartItemsQnt()}</a>
            </Button>
        </Link>

    </>


}

export default CardWidjet