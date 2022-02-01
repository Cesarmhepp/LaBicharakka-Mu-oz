import { Button } from 'react-bootstrap'
import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import '../../App.css';
const ItemCount = ({ stock, itemsQty, setItemsQty, onAdd }) => {

    const [show, setShow] = useState(false)

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
        <Button
            variant='warning'
            onClick={() => {
                onAdd(itemsQty)
                setShow(true)
            }}>Añadir {itemsQty}
        </Button>
        <Button style={{ marginLeft: 10 }} variant="warning" onClick={() => itemsQty < stock ? setItemsQty(itemsQty + 1) : null}> + </Button>
        {
            show ? <Link to={"/cart"}><Button style={{ marginLeft: 10 }} variant='primary' onClick={() => onAdd(itemsQty)}>Finalizar</Button> </Link> : null
        }


    </>
}

export default ItemCount