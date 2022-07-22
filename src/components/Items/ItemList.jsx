import { Col } from 'react-bootstrap'
import Item from './Item'

const ItemList = ({ products }) => {
    return (
        <>
            {products.map((product) => (
                <Col key={product.id} className="col-sm-6 col-md-4 col-lg-3 col-xl-3">
                    <Item product={product}/>
                </Col>
            ))}
        </>
    )
}

export default ItemList