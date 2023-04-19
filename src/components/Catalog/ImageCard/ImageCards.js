import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./ImageCards.module.css";

export function ImageCards(photo) {
    return (
        <div className={styles["image-card"]}>
            <Card>
                <Link to={`/catalog/${photo._id}`} className="details-button">
                    <Card.Img title={photo.title} src={photo.url} />
                </Link>
            </Card>
        </div>
    );
}
