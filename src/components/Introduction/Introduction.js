import { Button,Col, Container, Row } from "react-bootstrap";
import "./Introduction.css";

export default function Introduction() {
    return(
        <div className="introduction p3 p-lg-5 mt-5">
            <Container fluid>
                <Row className="justify-content-md-center">
        
                    <Col xs={12} md={8}>
                        <h1 className="pl-2 text-center ">
                            Welcome to my Dinamic Form {" "}
                            <span className="pt-2 pb-4">that you will do everything that you want</span>
                        </h1>
                        <h4 className="d-flex container-actions mt-5">
                            Hi, I am Andrea Méndez, I am 45 years old. I am student of Front end, I like much it 
                       </h4>

                        <div className="d-flex container-action mt-5">
                            <div className="container-buttons">
                                <Button
                                className="p-3"
                                onClick={() => console.log("click button1")}
                                > Get in touch </Button>
                             </div>

                            <div className="btn-start-create">
                                <a href="#dynamic-form">Start to Create</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
    
}
