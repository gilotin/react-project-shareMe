import { useEffect, useState } from "react";
import * as photoService from "../../../services/photoService";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export function MyCollection() {
    const [myPhotos, setMyPhotos] = useState([]);

    const user = useContext(AuthContext);
    const id = user.userId;

    useEffect(() => {
        photoService.getByOwnerId(id).then((result) => {
            setMyPhotos(result);
        });
    }, [id]);

    return (
        <div>
            {myPhotos.length === 0 ? (
                <div>
                    {" "}
                    <h1>Catalog is empty</h1>{" "}
                </div>
            ) : (
                <div>
                    {myPhotos.map((photo) => (
                        <Card key={photo._id} className="my-3">
                            <Link to={`/myCollection/${photo._id}`} className="details-button">
                                <Card.Img title={photo.title} src={photo.url} />
                            </Link>
                        </Card>
                    ))}{" "}
                </div>
            )}
        </div>
    );
}
