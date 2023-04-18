import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";

import "./login.css";

export function Login() {
    const { onLoginSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({ email: "", password: "" }, onLoginSubmit);

    return (
        <div className="modal-show" style={{ display: "block", position: "initial" }}>
            <Modal.Body>
                <Form id="login-form" method="POST" onSubmit={onSubmit}>
                    <div id="login-title">
                        <h1>Login</h1>
                    </div>
                    <Form.Group className="mb-3" controlId="loginEmail">
                        <Form.Label>Email address</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={values.email}
                                onChange={changeHandler}
                            />
                            <Form.Control.Feedback type="invalid">
                                invalid email.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="loginPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={changeHandler}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Modal.Body>
            <Card.Footer className="text-center text-muted text-inline">
                <Form.Text>
                    Are you registered already? <Link to={"/register"}>Register</Link>
                </Form.Text>
            </Card.Footer>
        </div>
    );
}
