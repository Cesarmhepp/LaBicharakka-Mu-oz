import { Image, Row, Col, Table } from 'react-bootstrap'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import Cart from './Cart'
const ItemDetail = ({ item }) => {
	const { id, title, price, description, attributes, available_quantity, condition, thumbnail, seller_address, pictures } = item;
	const [itemsQty, setItemsQty] = useState(0);

	const onAdd = ({ quantityToAdd }) => {
		return (
			<Link to={"/cart"}><Cart quantityToAdd={quantityToAdd} /></Link>
		)


	}

	console.log("mostrando items", item)
	return (
		<>
			<Row style={{ marginLeft: 100, marginRight: 100 }}>
				<Col xs={1}>
					{pictures.slice(0, 4).map(picture => { return (<Image src={picture.secure_url} style={{ objectFit: "contain", width: '80%' }} />) })}
				</Col>
				<Col xs={3}>
					{pictures.length > 0 ? <Image src={pictures[0].secure_url} style={{ objectFit: "contain", width: '100%' }} /> : null}

				</Col>
				<Col xs={8} style={{ textAlign: "left" }} >
					<h3 style={{ textAlign: "left" }}>{title}</h3>
					<Table size="sm" responsive  >
						<tbody>
							<tr>
								<td>Precio</td>
								<td>${price}</td>
							</tr>
							<tr>
								<td>Stock</td>
								<td>{available_quantity}</td>
							</tr>
						</tbody>
					</Table>

					<ItemCount stock={available_quantity} itemsQty={itemsQty} setItemsQty={setItemsQty} onAdd={onAdd} />


					<Col xs={12} style={{ textAlign: "left", marginTop: 50 }}>
						<h5>Caracteristicas</h5>
						<Table size="sm" responsive>
							<tbody>
								{attributes.slice(0, 9).map(attribute => {
									return (
										<>
											<tr>
												<td>{attribute.name}</td>
												<td>{attribute.value_name}</td>
											</tr>
										</>
									)
								})}
							</tbody>
						</Table>

					</Col>

				</Col>


				<Col style={{ textAlign: "left", marginBottom: 50 }}>
					<h3>Descripción</h3>
					{description}
				</Col>

			</Row>




		</>
	);

}

export default ItemDetail