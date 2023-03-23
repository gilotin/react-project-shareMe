import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export function Home() {
    return (
        <>
            <h1>Hello to the home Page</h1>
             
            <Link to={"/login"}><Button>Login</Button></Link>
            <Link to={"/register"}><Button>Register</Button></Link>
        </>
    );
}
