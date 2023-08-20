import React from "react";
import classnames from "classnames";
import "./style.css";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";

// core components
import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

export default function RegisterPage() {
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [abhaidfocus, setAbhaidfocus] = React.useState(false);
  const [abhaidfocus1, setAbhaidfocus1] = React.useState(false);
  const [AgeFocus, setAgeFocus] = React.useState(false);
  const [specializationFocus, setSpecializationfocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  }, []);
  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6(
      "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    );
  };

  const [fullName, setfullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [usernameLogin, setUsernameLogin] = React.useState("");
  const [specialization, setSpecialization] = React.useState("");
  return (
    <>
      <div className="wrapper">
        <div className="page-header">
          <div className="page-header-image" />
          <div className="content">
            <Container>
              <Row className="loginalign">
                <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                  <div
                    className="square square-7"
                    id="square7"
                    style={{ transform: squares7and8 }}
                  />
                  <div
                    className="square square-8"
                    id="square8"
                    style={{ transform: squares7and8 }}
                  />
                  <Card className="card-register">
                    <CardHeader className="alignment">
                      <CardImg
                        alt="..."
                        src={require("assets/img/square-purple-1.png")}
                      />
                      <CardTitle tag="h4" className="title">
                        {" "}
                        Register
                      </CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form className="form">
                        <InputGroup
                          className={classnames({
                            "input-group-focus": fullNameFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Full Name"
                            type="text"
                            value={fullName}
                            onChange={(e) => setfullName(e.target.value)}
                            onFocus={(e) => setFullNameFocus(true)}
                            onBlur={(e) => setFullNameFocus(false)}
                          />
                        </InputGroup>

                        <InputGroup
                          className={classnames({
                            "input-group-focus": AgeFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-mobile" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Phone"
                            type="number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            onFocus={(e) => setAgeFocus(true)}
                            onBlur={(e) => setAgeFocus(false)}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": abhaidfocus1,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-world" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            onFocus={(e) => setAbhaidfocus1(true)}
                            onBlur={(e) => setAbhaidfocus1(false)}
                          />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": specializationFocus,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-sound-wave" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="specialization"
                              type="text"
                              value={specialization}
                              onChange={(e) =>
                                setSpecialization(e.target.value)
                              }
                              onFocus={(e) => setSpecializationfocus(true)}
                              onBlur={(e) => setSpecializationfocus(false)}
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": fullNameFocus,
                            })}
                          >
                            <FormGroup check className="form-check-radio">
                              <Label check>
                                <Input
                                  checked={gender == "Male"}
                                  onClick={(e) => setGender("Male")}
                                  name="exampleRadios"
                                  type="radio"
                                />
                                <span className="form-check-sign" />
                                Male
                              </Label>
                            </FormGroup>
                            <FormGroup check className="form-check-radio">
                              <Label check>
                                <Input
                                  checked={gender == "Female"}
                                  onClick={(e) => setGender("Female")}
                                  name="exampleRadios"
                                  type="radio"
                                />
                                <span className="form-check-sign" />
                                Female
                              </Label>
                            </FormGroup>
                            <FormGroup check className="form-check-radio">
                              <Label check>
                                <Input
                                  checked={gender == "Others"}
                                  onClick={(e) => setGender("Others")}
                                  name="exampleRadios"
                                  type="radio"
                                />
                                <span className="form-check-sign" />
                                Others
                              </Label>
                            </FormGroup>
                          </InputGroup>
                          <FormGroup check className="text-left">
                            <Label check>
                              <Input type="checkbox" />
                              <span className="form-check-sign" />I agree to the{" "}
                              <a
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                terms and conditions
                              </a>
                              .
                            </Label>
                          </FormGroup>
                        
                      </Form>
                    </CardBody>
                    <CardFooter>
                      <Button className="btn-round" color="primary" size="lg">
                        Get Started
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                  <div
                    className="square square-7"
                    id="square7"
                    style={{ transform: squares7and8 }}
                  />
                  <div
                    className="square square-8"
                    id="square8"
                    style={{ transform: squares7and8 }}
                  />
                  <Card className="card-register">
                    <CardHeader className="alignmentlogin">
                      <CardImg
                        className="loginbg"
                        alt="..."
                        src={require("assets/img/square-purple-1.png")}
                      />
                      <CardTitle tag="h4" className="titlelogin">
                        Login
                      </CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form className="form">
                        <InputGroup
                          className={classnames({
                            "input-group-focus": abhaidfocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-world" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="username"
                            type="text"
                            value={usernameLogin}
                            onChange={(e) => setUsernameLogin(e.target.value)}
                            onFocus={(e) => setAbhaidfocus(true)}
                            onBlur={(e) => setAbhaidfocus(false)}
                          />
                        </InputGroup>
                        <FormGroup check className="text-left">
                          <Label check>
                            <Input type="checkbox" />
                            <span className="form-check-sign" />I agree to the{" "}
                            <a
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              terms and conditions
                            </a>
                            .
                          </Label>
                        </FormGroup>
                      </Form>
                    </CardBody>
                    <CardFooter>
                    <Link to="/doctor">
                      <Button className="btn-round" color="primary" size="lg">
                        Login
                      </Button>
                    </Link>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
              <div className="register-bg" />
              <div
                className="square square-1"
                id="square1"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-2"
                id="square2"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-3"
                id="square3"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-4"
                id="square4"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-5"
                id="square5"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-6"
                id="square6"
                style={{ transform: squares1to6 }}
              />
            </Container>
            <Container>
              <Row>
                <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                  <div
                    className="square square-7"
                    id="square7"
                    style={{ transform: squares7and8 }}
                  />
                  <div
                    className="square square-8"
                    id="square8"
                    style={{ transform: squares7and8 }}
                  />
                </Col>
              </Row>
              <div className="register-bg" />
              <div
                className="square square-1"
                id="square1"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-2"
                id="square2"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-3"
                id="square3"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-4"
                id="square4"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-5"
                id="square5"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-6"
                id="square6"
                style={{ transform: squares1to6 }}
              />
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
