import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function Home() {
    return (
        <>
            <h1>Hello to the home Page</h1>
            <LinkContainer to={"/login"}>
                {" "}
                <Button>Login</Button>
            </LinkContainer>
            <LinkContainer to={"/register"}>
                <Button>Register</Button>
            </LinkContainer>
        </>
    );
}
