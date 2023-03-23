import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

const CreateImage = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [creator, setCreator] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleCreatorChange = (event) => {
        setCreator(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Title: ${title}\nDescription: ${description}\nCreator: ${creator}`);
        // Add your upload logic here
    };

    return (
        <Card className="my-3" onClick={() => console.log("Hello Eli")}>
            <Card.Img
                variant="top"
                src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            />
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter title"
                            value={title}
                            onChange={handleTitleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter description"
                            value={description}
                            onChange={handleDescriptionChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formCreator">
                        <Form.Label>Creator</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter creator"
                            value={creator}
                            onChange={handleCreatorChange}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Upload
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default CreateImage;
