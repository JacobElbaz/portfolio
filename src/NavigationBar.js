import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from './logo.jpg'

function NavigationBar() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand>
                    <img
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top rounded"
                        alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;