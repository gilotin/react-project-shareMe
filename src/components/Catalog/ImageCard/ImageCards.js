import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export function ImageCards(photo) {

    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Card className="my-3">
                        <Link to={`/catalog/${photo._id}`} className="details-button">
                            <Card.Img title={photo.title} variant="top" src={photo.url} />
                           
                        </Link>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
