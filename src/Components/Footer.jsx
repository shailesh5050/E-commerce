import { Container,Row,Col } from "react-bootstrap";
const Footer = () => {
    const getYear= new Date().getFullYear();
  return (
    <>
        <Container>
            <Row bg='dark'>
                <Col className="text-center py-3">
                    &copy; {getYear} All rights reserved. Made with ❤️ by Team
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Footer