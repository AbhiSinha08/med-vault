import React from "react";
import classnames from "classnames";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Button,
  FormGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledPopover,
  PopoverBody,
  PopoverHeader,
  Modal,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  UncontrolledCarousel,
} from "reactstrap";

const carouselItems = [
  {
    src: require("assets/img/medical-banner-with-doctor-patient.jpeg"),
    altText: "Slide 1",
    caption: "",
  },
  {
    src: require("assets/img/68747470733a2f2f643131327936393861646975327a2e636c6f756466726f6e742e6e65742f70686f746f732f70726f64756374696f6e2f736f6674776172655f70686f746f732f3030322f3138372f3738352f64617461732f6f726967696e616c2e706e67.png"),
    altText: "Slide 2",
    caption: "",
  },
  {
    src: require("assets/img/Blockchain-and-Healthcare-Applications-and-Career-Opportunities.jpeg"),
    altText: "Slide 3",
    caption: "",
  },
];

export default function JavaScript() {
  const [demoModal, setDemoModal] = React.useState(false);
  const [miniModal, setMiniModal] = React.useState(false);
  const [formModal, setFormModal] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  return (
    <div className="section section-javascript" id="javascriptComponents">
      <img alt="..." className="path" src={require("assets/img/path5.png")} />
      <img
        alt="..."
        className="path path1"
        src={require("assets/img/path5.png")}
      />
      
      <div className="section">
        <Container>
          <div className="title">
            <h3>About</h3>
          </div>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="text-white font-weight-light">
                Med-Vault
              </h1>
              <p className="text-white mt-4">
              "Med-Vault" is an advanced and user-centric medical record management solution that ensures the utmost security and seamlessness in handling medical data. Leveraging the revolutionary potential of blockchain technology, Med-Vault stands as a fortified platform for efficiently managing medical records while enabling effortless data exchange between healthcare entities. With a focus on safeguarding patient privacy and enhancing interoperability, Med-Vault empowers healthcare professionals to provide better care by securely accessing and sharing medical information.
              </p>
            </Col>
            <Col lg="6">
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={false}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
