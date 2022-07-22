import { Button, Card, ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Item = ({ product }) => {
    const { id, title, price, thumbnail, attributes } = product
    const navigate = useNavigate()

    const GoToItemDetail = () => {

        navigate(`/product/${id}`)
    }
    return (
        <>
            <Card className='shadow p-2'>
                <Card.Img variant="top" src={thumbnail} style={{ marginTop: 10, objectFit: "contain", width: '100%', height: '110px', minHeight: '110px' }} />
                <Card.Body className="card bg-card" variant="custom" style={{maxHeight:110}} >
                    <Card.Title style={{ fontSize: 17, textAlign: "left" }}>{title.substr(0,40)}</Card.Title>
                </Card.Body>
                <Card.Header className='mb-1'>Detalles</Card.Header>
                <ListGroup style={{maxHeight:100}}>
                    <ListGroup.Item className='mb-1'>${price}</ListGroup.Item>
                    <ListGroup.Item className='mb-1'>Marca {attributes[0].value_name.substr(0,10)}</ListGroup.Item>
                </ListGroup>
                <Button variant="warning" onClick={() => GoToItemDetail()}>Ver caracteristicas</Button>
            </Card>

        </>

    )
}

export default Item