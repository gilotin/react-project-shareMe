import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import * as photoService from "../../services/photoService";

export function DetailPage() {
    const { photoId } = useParams();
    const [photoDetails, setPhotoDetails] = useState({});

    const previousPage = useNavigate();

    useEffect(() => {
        photoService.getOne(photoId).then((result) => {
            setPhotoDetails(result);
        });
    }, [photoId]);

    return (
        <div>
            <div>
                {" "}
                <h1>This is details page</h1>
                <h2>{photoDetails.title}</h2>
                <h3>{photoDetails.author}</h3>
                <h3>{photoDetails.description}</h3>
                <h3>{photoDetails.location?.city}</h3>
                <h3>{photoDetails.location?.country}</h3>
                <img src={photoDetails.url} alt={photoDetails.title} />
            </div>
            <button onClick={() => previousPage(-1)} type="button">
                BACK
            </button>
        </div>
    );
}
