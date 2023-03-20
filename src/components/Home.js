import { Button } from "react-bootstrap";

export function Home() {
    return (
        <>
            <h1>Hello to the home Page</h1>
            <Button href="/login">Login</Button> 
            <Button href="/register">Register</Button> 
        </>
    );
}
