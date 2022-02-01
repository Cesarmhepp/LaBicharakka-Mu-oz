import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import { BsCart2 } from 'react-icons/bs';

const CardWidjet = () => {

    const [itemsQtyCard, setitemsQtyCard] = useState();

    return <>
        <Button variant="warning" onClick={()=>setitemsQtyCard(itemsQtyCard+1)}>
            <a><BsCart2 className='' /></a>
        </Button>
    </>


}

export default CardWidjet