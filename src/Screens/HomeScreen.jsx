import { Row,Col } from "react-bootstrap"
import products from "../../products"
import Product from "../Components/Product"
const HomeScreen = () => {
  return (
    <>
        <h1>Latest Products</h1>
        <Row>
        {products.map((item)=>{
            return(
                    <Col md={3} key={item._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={item}></Product>
                    </Col>
            )   
        })}
        </Row>
    </>
  )
}

export default HomeScreen