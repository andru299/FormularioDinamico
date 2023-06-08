import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";
import ImgCourse1 from "../../assets/img/hbo.jpeg";
import ImgCourse2 from "../../assets/img/netflix.jpeg";
import ImgCourse3 from "../../assets/img/prime.jpeg";
import CardService from "./CardService/CardService";

export default function Services() {
    const servicesArray=[
        {
            title:"wordpress course",
            subtitle:"Learn all about this great CMS",
            image:ImgCourse1,
            footer:"go to the course",
            link:"#!",
        },
        {
            title:"react course",
            subtitle:"Learn all about this great CMS",
            image:ImgCourse2,
            footer:"go to the course",
            link:"#!",
        },
        {
            title:"prestashop",
            subtitle:"Learn all about this great CMS",
            image:ImgCourse3,
            footer:"go to the course",
            link:"#!",
        }
        
    ];
    
    return(
        <div className="services p-4 mt-5">
            <Container fluid>
                <Col xs={12} md={8}>
                    <h2 className="text-center">Services</h2>
                    <h4 className="pb-3 text-center">
                        Check some of my service that I did
                    </h4>
                    <Row xs={1} md={3} className="g-4 mt-4">
                        {servicesArray.map((service, index)=>(
                        <CardService service={service}key={index}/>
                        ))}
                    </Row>

                </Col>
            </Container>
        </div>

    );
    
};
