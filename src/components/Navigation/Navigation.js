import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function Navigation() {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <header>
            <Navbar bg="Success" variant="dark">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>ShareMe</Navbar.Brand>
                    </LinkContainer>
                    <Nav className="me-auto">
                        <LinkContainer to={"/"}>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        {/* <LinkContainer to={"/search"}>
                            <Nav.Link>Search</Nav.Link>
                        </LinkContainer> */}
                        <LinkContainer to={"/catalog"}>
                            <Nav.Link>Catalog</Nav.Link>
                        </LinkContainer>
                        {!isAuthenticated ? (
                            <>
                                <LinkContainer to={"/register"}>
                                    <Nav.Link>Register</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to={"/login"}>
                                    <Nav.Link>Login</Nav.Link>
                                </LinkContainer>
                            </>
                        ) : (
                            <>
                                <LinkContainer to={"/profile"}>
                                    <Nav.Link>Profile</Nav.Link>
                                </LinkContainer>
                            </>
                        )}

                        {/* <div className="entry-nav">
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Profile"
                                menuVariant="dark"
                            >
                                <LinkContainer to={"/profile"}>
                                    <NavDropdown.Item>My Profile</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to={"/profile/createImage"}>
                                    <NavDropdown.Item>Create</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to={"/logout"}>
                                    <NavDropdown.Item>Logout</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                        </div> */}
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}
