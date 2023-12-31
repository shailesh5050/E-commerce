import { Nav,Navbar,Container } from 'react-bootstrap'
import {FaShoppingCart,FaUser} from 'react-icons/fa'
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import {useSelector}  from 'react-redux'
const Header = () => {
    const {cartItems} = useSelector(state => state.cart)
  return (
   <header>
        <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                <Navbar.Brand><img src={logo} alt="proshop"  />Proshop</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <LinkContainer to='/cart'>
                        <Nav.Link><FaShoppingCart/> Cart {
                            cartItems.length > 0 && (
                                <span className='badge bg-success'>{cartItems.reduce((a,c)=>parseInt(a) + parseInt(c.qty),0)}</span>
                            )

                        }</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/login'>
                        <Nav.Link><FaUser/> Sign In</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
   </header>
  )
}

export default Header