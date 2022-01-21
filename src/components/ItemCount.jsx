import { Button, Modal } from 'react-bootstrap'
import { React, useState, useEffect } from 'react'

import '../App.css';
const ItemCount = () => {
    const [stock, setStock] = useState(10)
    const [itemsQty, setItemsQty] = useState(1);


    useEffect(() => {
        console.log("Cambie el item de cantidad", "Ahora tengo", itemsQty);
        console.log("cambie en la fecha ", new Date())
        return () => {
            console.clear()
            console.log("Se desmonto el componente")

        }
    }, [itemsQty])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    return <>
        <Button variant="primary" onClick={handleShow} className="bg-one mb-5">
            <a>Contador</a>
        </Button>
        <Modal show={show} onHide={handleClose} >

            <Modal.Header closeButton className='bg-one' >

                <Modal.Title>Contador</Modal.Title>
            </Modal.Header>
            <Modal.Body className='bg-one'>
                <h3 className='d-flex align-items-center justify-content-center'>
                    Stock disponible: {stock}
                </h3>
                <div className='d-flex align-items-center justify-content-center'>
                    <Button onClick={() => stock > itemsQty ? setItemsQty(itemsQty + 1) : null} variant="primary" className='bg-one m-2'> + </Button>
                    <h1>
                        {itemsQty}
                    </h1>
                    <Button onClick={() => itemsQty > 1 ? setItemsQty(itemsQty - 1) : null} variant="primary" className='bg-one m-2'> - </Button>

                </div>
            </Modal.Body>
            <Modal.Footer className='bg-one'>
                <Button variant="secondary" className='bg-one' onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" className='bg-one' onClick={handleClose}>
                    Iniciar
                </Button>
            </Modal.Footer>
        </Modal>

    </>
}

export default ItemCount