import products from "../../products"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { Row,Col,Image,ListGroup,Button,Card } from "react-bootstrap"
import Rating from "../Components/Rating"
const ProductScreen = () => {
    const {id:productId} = useParams()
    const product = products.find((item)=>item._id===productId)
    console.log(product)
  return (
    <div>
        <Link className="btn btn-light my-3" to="/">Go Back</Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid></Image>
            </Col>
            <Col md={3}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                    </ListGroup.Item>

                    <ListGroup.Item>
                        Price: ${product.price}
                    </ListGroup.Item>

                    <ListGroup.Item>
                        Description: {product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Price:
                                </Col>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>                               
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Status:
                                </Col>
                                <Col>
                                    <strong>{product.countInStock >0 ? 'In Stock' : 'Out Of Stack'}</strong>
                                </Col>                               
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                   <Button className="btn-block" type="button" disabled={product.countInStock===0}>Add To Cart</Button>
                                                               
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>

    </div>
  )
}

export default ProductScreen