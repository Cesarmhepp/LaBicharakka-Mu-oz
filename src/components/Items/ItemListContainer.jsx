import { Container, Row } from 'react-bootstrap'
import ItemList from './ItemList'


const ItemListContainer = ({ products }) => {
    return (
        <Container>
            <Row className='g-4 mt-1 align-content-center'>
                <ItemList products={products} />
            </Row>
        </Container>
    )
}

export default ItemListContainer