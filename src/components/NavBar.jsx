import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserFriends } from 'react-icons/fa';
import "../assets/styles/css/navbar.css"
const NavBar = () => {
  return (
    <Navbar expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src="/images/musketeer.png"
            alt="The Musketeers"
            style={{ width: "40px", height: "40px", marginRight: "10px" }}
          />
          <span>The Musketeers</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#us">Us</Nav.Link>
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar