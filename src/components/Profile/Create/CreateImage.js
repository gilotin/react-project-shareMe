import { useForm } from "../../../hooks/useForm";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

import { Button, Form } from "react-bootstrap";

import "./CreateImage.css";

export function CreateImage() {
    const { onCreatePhotoSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm(
        {
            title: "",
            author: "",
            url: "",
            country: "",
            city: "",
            description: "",
        },
        onCreatePhotoSubmit
    );

    return (
        <>
            <Form method="POST" id="create-form" onSubmit={onSubmit}>
                <div id="form-title">
                    <h1>Create Image</h1>
                </div>
                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Add Title"
                        onChange={changeHandler}
                        values={values.title}
                        name="title"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAuthor">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Add Author"
                        onChange={changeHandler}
                        values={values.author}
                        name="author"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formImg">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Paste url"
                        onChange={changeHandler}
                        values={values.url}
                        name="url"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCounty">
                    <Form.Label>County</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Add County"
                        onChange={changeHandler}
                        values={values.country}
                        name="country"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Add City"
                        onChange={changeHandler}
                        values={values.city}
                        name="city"
                    />
                </Form.Group>

                <Form.Control
                    as="textarea"
                    placeholder="Description"
                    style={{ height: "100px" }}
                    name="description"
                    onChange={changeHandler}
                    values={values.description}
                />

                <Button id="from-submit-btn" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}
