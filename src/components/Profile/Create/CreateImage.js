import { Button, Form } from "react-bootstrap";

import "./CreateImage.css";

export function CreateImage() {
    return (
        <>
            <Form method="POST" id="create-form">
                <div id="form-title"><h1>Create Image</h1></div>
                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Add Title" name="title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAuthor">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" placeholder="Add Author" name="author" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formImg">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text" placeholder="Paste url" name="url" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCounty">
                    <Form.Label>County</Form.Label>
                    <Form.Control type="text" placeholder="Add County" name="Country" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Add City" name="city" />
                </Form.Group>

                <Form.Control as="textarea" placeholder="Description" style={{ height: "100px" }} />

                <Button id="from-submit-btn" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}
