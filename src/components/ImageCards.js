import { Card, Container, Row, Col } from "react-bootstrap";

export function ImageCards(props) {
    return (
        <Container>
            <Row>
                {/* {props.images.map((image) => ( */}
                <Col md={4}>
                    <Card className="my-3" onClick={()=> console.log('Hello Eli')}>
                        <Card.Img variant="top" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" />
                        <Card.Body>
                            <Card.Title>Title</Card.Title>
                            <Card.Text>description</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                {/* ))} */}
            </Row>

            <Row>
                {/* {props.images.map((image) => ( */}
                <Col md={4}>
                    <Card className="my-3" onClick={()=> console.log('Hello Eli')}>
                        <Card.Img variant="top" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" />
                        <Card.Body>
                            <Card.Title>Title</Card.Title>
                            <Card.Text>description</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                {/* ))} */}
            </Row>

            <Row>
                {/* {props.images.map((image) => ( */}
                <Col md={4}>
                    <Card className="my-3" onClick={()=> console.log('Hello Eli')}>
                        <Card.Img variant="top" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" />
                        <Card.Body>
                            <Card.Title>Title</Card.Title>
                            <Card.Text>description</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                {/* ))} */}
            </Row>
        </Container>
        
    );
}
