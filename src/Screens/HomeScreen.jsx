/* eslint-disable no-unused-vars */
import { Row,Col } from "react-bootstrap"
import Product from "../Components/Product"
import { useGetProductsQuery } from "../slices/productApiSlice"
import Loader from "../Components/Loader"
const HomeScreen = () => {
   const {data:products,isLoading,isError} = useGetProductsQuery()
   if(isLoading){
       return <Loader />
   }
  return (
    <>
        <h1>Latest Products</h1>
        <Row>
        {products.map((item)=>{
            return(
                    <Col md={3} key={item._id} sm={12}  lg={4} xl={3}>
                        <Product product={item}></Product>
                    </Col>
            )   
        })}
        </Row>
    </>
  )
}

export default HomeScreen