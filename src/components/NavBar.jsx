import '../styles/NavBar.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (

      <Navbar expand="lg" fixed='top'>
        <Container>
            <Navbar.Brand>
                <Link
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""}>
                    MAGGIE BRILL
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle className="toggler" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""}>
                        Cinematography
                    </Link>
                    <Link
                        to="/directing"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""}>
                        Directing
                    </Link>
                    <Link
                        to="/about"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""}>
                        About
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

    )
}

export default NavBar