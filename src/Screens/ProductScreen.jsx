/* eslint-disable no-unused-vars */
import { useState } from "react"
import { useParams,useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { Row,Col,Image,ListGroup,Button,Card } from "react-bootstrap"
import Rating from "../Components/Rating"
import { useGetProductQuery } from "../slices/productApiSlice"
import Loader from "../Components/Loader"
import Message from "../Components/Message"
import { useDispatch } from "react-redux"
import { addToCart } from "../slices/cartSlice"

const ProductScreen = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id:productId} = useParams()
    const [qty,setQty] = useState(1)
    const {data:product,isLoading,isError,error} = useGetProductQuery(productId)
    function addToCartHandler(){
        dispatch(addToCart({...product,qty}))
       // navigate(`/cart/${product._id}?qty=${qty}`)
        
    }


    if(isLoading){
        return(
            <Loader />
        )
    }
    if(isError){
        return(
            <Message variant="danger">{error?.data?.message}</Message>
        )
    }
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
                        {product.countInStock > 0 && (
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Qty
                                    </Col>
                                    <Col>
                                        <select value={qty} onChange={(e)=>setQty(e.target.value)}>
                                            {[...Array(product.countInStock).keys()].map((item)=>{
                                                return(
                                                    <option key={item+1} value={item+1}>{item+1}</option>
                                                )
                                            }
                                            )}
                                        </select>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        )    
                        }
                        <ListGroup.Item>
                            <Row>
                                   <Button className="btn-block" type="button" disabled={product.countInStock===0} onClick={addToCartHandler} >Add To Cart</Button>
                                                               
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