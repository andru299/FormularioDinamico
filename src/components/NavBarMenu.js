import { Container, Navbar } from "react-bootstrap";

export default function NavBarMenu(){
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href ="#!">
                        Dynamic <b>form</b>
                    </Navbar.Brand>
                    <Navbar.Toggle>
                    </Navbar.Toggle>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as:{""}
                            <a href="https://www.gmail.com" target="-blank" rel="noreferrer"> Andrea Méndez</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}