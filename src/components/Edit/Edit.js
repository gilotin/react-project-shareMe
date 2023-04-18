import { Button, Form } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useParams } from "react-router-dom";
import * as photoService from "../../services/photoService"

import styles from "./Edit.module.css"

export function Edit() {
    const {photoId} = useParams();

    const { onPhotoEdit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit, changeValues } = useForm(
        {
            title: "",
            author: "",
            url: "",
            country: "",
            city: "",
            description: "",
        },
        onPhotoEdit
    );

    useEffect(() => {
        photoService.getOne(photoId)
            .then(result => {
                changeValues(result);
            });
    }, [photoId]);

    return (
        <>
            <Form method="PUT" id={styles["edit-form"]} onSubmit={onSubmit}>
                <div id={styles["edit-title"]}>
                    <h1>Edit Image</h1>
                </div>
                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={values.title}
                        onChange={changeHandler}
                        values={values.title}
                        name="title"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAuthor">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={values.author}
                        onChange={changeHandler}
                        values={values.author}
                        name="author"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formImg">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={values.url}
                        onChange={changeHandler}
                        values={values.url}
                        name="url"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCounty">
                    <Form.Label>County</Form.Label>
                    <Form.Control
                        placeholder={values.country}
                        type="text"
                        onChange={changeHandler}
                        values={values.country}
                        name="country"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={values.city}
                        onChange={changeHandler}
                        values={values.city}
                        name="city"
                    />
                </Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder={values.description}
                    style={{ height: "100px" }}
                    name="description"
                    onChange={changeHandler}
                    values={values.description}
                />{" "}
                <Button className={styles["edit-submit-btn"]} variant="primary" type="submit">Edit</Button>
                <Button className={styles["edit-submit-btn"]} variant="primary" type="submit">
                    Back
                </Button>
            </Form>
        </>
    );
}
