import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

export function Navigation() {
    return (
        <header>
            <Navbar bg="Success" variant="dark">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Navbar</Navbar.Brand>
                    </LinkContainer>
                    <Nav className="me-auto">
                        <LinkContainer to={"/"}>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={"/search"}>
                            <Nav.Link>Search</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={"/catalog"}>
                            <Nav.Link>Catalog</Nav.Link>
                        </LinkContainer>
                        <div className="entry-nav">
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Profile"
                                menuVariant="dark"
                            >
                                <LinkContainer to={"/profile"}>
                                    <NavDropdown.Item>My Profile</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to={"/profile/create"}>
                                    <NavDropdown.Item>Create</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to={"/logout"}>
                                    <NavDropdown.Item>Logout</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}
