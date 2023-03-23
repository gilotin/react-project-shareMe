import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export function ImageCards(photo) {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Card className="my-3">
                        <Card.Img variant="top" src={photo.url} />
                        <Card.Body>
                            <Card.Title>{photo.title}</Card.Title>
                            <Card.Text>{photo.description}</Card.Text>
                            <Link to={`/catalog/${photo._id}`} className="details-button">
                                Details
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
