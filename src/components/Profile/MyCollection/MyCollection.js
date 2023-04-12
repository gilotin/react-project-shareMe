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
    console.log(myPhotos);
    return (
        <>
            <div>
                {myPhotos.map((photo) => (
                    <Card className="my-3">
                        <Link to={`/myCollection/${photo._id}`} className="details-button">
                            <Card.Img title={photo.title} src={photo.url} />
                        </Link>
                    </Card>
                ))}{" "}
            </div>
        </>
    );
}
