import { Button } from 'react-bootstrap'
import { React, useEffect } from 'react'
import { Link } from 'react-router-dom'

import '../App.css';
const ItemCount = ({ stock, itemsQty, setItemsQty, onAdd }) => {



    useEffect(() => {
        console.log("Cambie el item de cantidad", "Ahora tengo", itemsQty);
        console.log("cambie en la fecha ", new Date())
        return () => {
            console.clear()
            console.log("Se desmonto el componente")

        }
    }, [itemsQty])



    return <>

        <Button style={{ marginRight: 10 }} variant="warning" onClick={() => itemsQty > 0 ? setItemsQty(itemsQty - 1) : null}> - </Button>
        <Link to={"/cart"}><Button variant='warning' onClick={() => onAdd(itemsQty)}>Añadir {itemsQty} </Button> </Link>
        <Button style={{ marginLeft: 10 }} variant="warning" onClick={() => itemsQty < stock ? setItemsQty(itemsQty + 1) : null}> + </Button>


    </>
}

export default ItemCount