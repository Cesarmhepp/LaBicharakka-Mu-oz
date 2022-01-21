import { Button, Card, ListGroup } from 'react-bootstrap'
import Particles from "react-tsparticles";
import ItemDetail from './ItemDetail';
const Item = ({ product }) => {
    const { id, title, price, thumbnail } = product
    return (
        <>
            <Card>
                <Card.Img variant="top" src={thumbnail} style={{ marginTop: 10, objectFit: "contain", width: '100%', height: '110px', minHeight: '110px' }} />
                <Card.Body className="card bg-details" variant="custom" >
                    <Card.Title style={{ fontSize: 17, textAlign: "left" }}>{title}</Card.Title>
                    <Card.Text style={{ fontSize: 16, textAlign: "center" }}>
                        ${price}
                    </Card.Text>
                </Card.Body>
                <ItemDetail item={product}/>
            </Card>

        </>

    )
}

export default Item