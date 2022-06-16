import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import slidrA from "./imeges/slidrA.jpg";
import slidrb from "./imeges/slidrb.jpg";
import slidrc from "./imeges/slidrc.jpg";
import {
  NavDropdown,
  Navbar,
  Nav,
  Carousel,
  Form,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import React from "react";

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Navbar expand="lg" className="Navbar">
        <Container>
          <Navbar.Brand href="#home">Fast food</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Pizza</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  {" "}
                  meat burger
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  meat shawarma
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            height={"600px"}
            src={slidrA}
            alt="First slide"
          />
          {/* <Carousel.Caption> */}
          {/* <h3>First slide label</h3> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          {/* </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            height={"600px"}
            src={slidrb}
            alt="Second slide"
          />
          {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            height={"600px"}
            src={slidrc}
            alt="Third slide"
          />
          {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      <div className="form">
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                plaintext
                readOnly
                defaultValue="email@example.com"
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
        </Form>
      </div>
      <footer className="page-footer font-small blue pt-4 footer1">
        <div className="container-fluid text-center text-md-left">
          <div className="row footer1">
            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Contact Us</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Email address : arooh7546@gmail.com</a>
                </li>
                <li>
                  <a href="#!">Phone Number : 00218925345580</a>
                </li>

                <li>
                  <a href="#!">Address :sabha-libya</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled">
                <li>
                  <i class="fa-brands fa-instagram-square"></i>
                </li>
                <li>
                  <a href="#!">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
