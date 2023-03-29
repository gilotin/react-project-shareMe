import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./imageCards.css";

export function ImageCards(photo) {
    return (
        <div className="image-card">
            <Card className="my-3">
                <Link to={`/catalog/${photo._id}`} className="details-button">
                    <Card.Img title={photo.title} src={photo.url} />
                </Link>
            </Card>
        </div>
    );
}
