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

                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}
