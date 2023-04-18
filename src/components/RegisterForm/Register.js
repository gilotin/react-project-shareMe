import React, { useState, useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";

export function Register() {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm(
        {
            email: "",
            userName: "",
            password: "",
            repeatPassword: "",
        },
        onRegisterSubmit
    );
    

    return (
        <div className="modal show" style={{ display: "block", position: "initial" }}>
            <Modal.Dialog>
                    <Modal.Title>Register</Modal.Title>
                <Modal.Body>
                    <Form noValidate method="POST" onSubmit={onSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    name="email"
                                    type="text"
                                    value={values.email}
                                    onChange={changeHandler}
                                    placeholder="Email"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    invalid email.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    name="userName"
                                    type="text"
                                    value={values.userName}
                                    onChange={changeHandler}
                                    placeholder="Username"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name="password"
                                type="password"
                                onChange={changeHandler}
                                value={values.password}
                                placeholder="Password"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="repeatPassword">
                            <Form.Label>Repeat password</Form.Label>
                            <Form.Control
                                name="repeatPassword"
                                type="password"
                                onChange={changeHandler}
                                value={values.repeatPassword}
                                placeholder="Repeat password"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                </Modal.Body>
                <Card.Footer className="text-center text-muted text-inline">
                    <Form.Text>
                        Are you registered already? <Link to="/login">Login</Link>
                    </Form.Text>
                </Card.Footer>
            </Modal.Dialog>
        </div>
    );
}
