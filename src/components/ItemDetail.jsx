import { Button, Modal, Image, Row, Col, Table } from 'react-bootstrap'
import { useState } from 'react';

const ItemDetail = ({ item }) => {
	const { id, title, price, attributes, available_quantity, condition, thumbnail, seller_address } = item;
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button onClick={handleShow} variant="warning">
				Detalles
			</Button>

			<Modal show={show} onHide={handleClose} size='lg'>
				<div className='bg-details'>
					<Modal.Header closeButton>
						<Modal.Title>Detalles</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Row>
							<Col xs={1}>
								<Image src={thumbnail} style={{ objectFit: "contain", width: '100%', height: '100px' }} />
							</Col>
							<Col xs={4}>
								<Image src={thumbnail} style={{ objectFit: "contain", width: '100%' }} />
							</Col>
							<Col xs={7} >
								<h3 style={{ textAlign: "center" }}>{title}</h3>
								<Table striped bordered hover size="sm" responsive className='bg-one' >
									<tbody>
										<tr>
											<td>Marca</td>
											<td>{attributes[0].value_name}</td>
										</tr>
										<tr>
											<td>Modelo</td>
											<td>{attributes[1].value_name}</td>

										</tr>
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
								<Table striped bordered hover responsive className='bg-one'>
									<tbody>
										<tr>
											<th>
												Caractericas
											</th>
										</tr>
										<tr>
											<td>
												Condicion
											</td>
											<td>
											{condition}
											</td>
										</tr>
										<tr>
											<td>
												Procesador
											</td>
											<td>
											{attributes[2].value_name}
											</td>
										</tr>
										<tr>
											<td>
												Direccion
											</td>
											<td>
											{seller_address.country.name}
											<br/>
											{seller_address.state.name}
											<br/>
											{seller_address.city.name}
											</td>
										</tr>
									</tbody>
								</Table>

							</Col>
						</Row>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="warning" onClick={handleClose}>
							Cerrar
						</Button>
						<Button variant="custom" className='bg-one' onClick={handleClose}>
							Añadir
						</Button>
					</Modal.Footer>
				</div>

			</Modal>
		</>
	);

}

export default ItemDetail