import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { Link } from "react-router-dom";

import * as photoService from "../../services/photoService";

export function DetailPage() {
    const user = useContext(AuthContext);
    const { onDeleteHandler } = useContext(AuthContext);

    const { photoId } = useParams();
    const [photoDetails, setPhotoDetails] = useState({});
    const [show, setShow] = useState(false);
    const previousPage = useNavigate();

    useEffect(() => {
        photoService.getOne(photoId).then((result) => {
            setPhotoDetails(result);
        });
    }, [photoId]);

    function handleClose() {
        setShow(false);
    }
    function handleShow() {
        setShow(true);
    }

    return (
        <div>
            <div>
                {" "}
                <h1>This is details page</h1>
                <h2>{photoDetails.title}</h2>
                <h3>{photoDetails.author}</h3>
                <h3>{photoDetails.description}</h3>
                <h3>{photoDetails.city}</h3>
                <h3>{photoDetails.country}</h3>
                <img src={photoDetails.url} alt={photoDetails.title} />
            </div>

            {user?.userId === photoDetails._ownerId ? (
                <div className="buttons">
                    <Button variant="primary" onClick={() => previousPage(-1)} className="buttons">
                        Back
                    </Button>
                    <Link to={`/${photoId}/edit`}>
                        <Button variant="primary">Edit</Button>
                    </Link>

                    <Button variant="primary" onClick={handleShow}>
                        Delete
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header>
                            <Modal.Title>Alert</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are you sure you want to delete this photo?</Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="secondary" onClick={() => onDeleteHandler(photoId)}>
                                Delete
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            ) : (
                <div>
                    <Button variant="primary" onClick={() => previousPage(-1)} className="buttons">
                        Back
                    </Button>
                </div>
            )}
        </div>
    );
}
