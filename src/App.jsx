import Header from './Components/Header';
import Footer from './Components/Footer';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Header></Header>
      <Container className='py-3'>
        <Outlet />
      </Container>
      <Footer></Footer>
    </>
  )
}

export default App