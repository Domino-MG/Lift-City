import React, { Component, useState } from "react";
import CarouselBox from "../Components/CarouselBox";
import {
  Carousel,
  Container,
  Row,
  Col,
  Card,
  Modal,
  Button,
  Image,
} from "react-bootstrap";
import "../App.css";
import lift1 from "../assets/obj 1.png";
import lift2 from "../assets/obj2.png";
import lift3 from "../assets/obj3.png";
import lift4 from "../assets/obj4.png";
import lift5 from "../assets/obj5.png";
import lift6 from "../assets/obj6.png";

const Objects = () => {
  const [WHITE, setWHITE] = useState(false);
  const WHITEClose = () => setWHITE(false);
  const WHITEShow = () => setWHITE(true);

  const [SILENT, setSILENT] = useState(false);
  const SILENTClose = () => setSILENT(false);
  const SILENTShow = () => setSILENT(true);

  const [ORBITA, setORBITA] = useState(false);
  const ORBITAClose = () => setORBITA(false);
  const ORBITAShow = () => setORBITA(true);

  const [NORDGATE, setNORDGATE] = useState(false);
  const NORDGATEClose = () => setNORDGATE(false);
  const NORDGATEShow = () => setNORDGATE(true);

  const [MIRROR, setMIRROR] = useState(false);
  const MIRRORClose = () => setMIRROR(false);
  const MIRRORShow = () => setMIRROR(true);

  const [SILVER, setSILVER] = useState(false);
  const SILVERClose = () => setSILVER(false);
  const SILVERShow = () => setSILVER(true);
  return (
    <Container style={{ paddingTop: "10rem" }}>
      <Modal
        show={WHITE}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={WHITEClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>ЖК Белые росы</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Container>
            <Row>
              <Col>
                <Image style={{ width: "18rem" }} src={lift1}></Image>
              </Col>
              <Col>
              <h2>Выполненные работы</h2>
              <h4> ● Техническое обслуживание по графику</h4>
              <h4> ● Установка поручней</h4>
              <h4> ● Замена таблички правил пользования</h4>
              <h4> ● Замена лифтового каната</h4>
              </Col>
            </Row>
          </Container>{" "}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      
      
      
      <Modal
        show={SILENT}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={SILENTClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>ЖК Тихие зори</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Container>
            <Row>
              <Col>
                <Image style={{ width: "18rem" }} src={lift2}></Image>
              </Col>
              <Col>
                <h2>Выполненные работы</h2>
                <h4> ● Техническое обслуживание по графику</h4>
                <h4> ● Замена напольного покрытия</h4>
                <h4> ● Замена зеркала</h4>
                <h4> ● Замена кнопок управления</h4>
                <h4> ● Установка поручней</h4>
              </Col>
            </Row>
          </Container>{" "}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>


      <Modal
        show={ORBITA}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={ORBITAClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>ЖК Орбита</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Container>
            <Row>
              <Col>
                <Image style={{ width: "18rem" }} src={lift3}></Image>
              </Col>
              <Col>
                <h2>Выполненные работы</h2>
                <h4> ● Техническое обслуживание по графику</h4>
                <h4> ● Замена напольного покрытия</h4>
                <h4> ● Установка зеркала</h4>
                <h4> ● Замена лифтового каната</h4>
                <h4> ● Замена кнопок вызова</h4>
              </Col>
            </Row>
          </Container>{" "}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>


      <Modal
        show={NORDGATE}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={NORDGATEClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>ЖК Северные ворота</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Container>
            <Row>
              <Col>
                <Image style={{ width: "18rem" }} src={lift4}></Image>
              </Col>
              <Col>
                <h2>Выполненные работы</h2>
                <h4> ● Техническое обслуживание по графику</h4>
                <h4> ● Замена кнопоки вызова</h4>
                <h4> ● Установка зеркала</h4>
                <h4> ● Установка поручней</h4>
                <h4> ● Замена напольного покрытия</h4>
              </Col>
            </Row>
          </Container>{" "}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>


      <Modal
        show={MIRROR}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={MIRRORClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>ЖК Отражение</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Container>
            <Row>
              <Col>
                <Image style={{ width: "18rem" }} src={lift5}></Image>
              </Col>
              <Col>
                <h2>Выполненные работы</h2>
                <h4> ● Техническое обслуживание по графику</h4>
                <h4> ● Замена замена кнопок управления</h4>
                <h4> ● Установка зеркал</h4>
                <h4> ● Замена лифтового каната</h4>
              </Col>
            </Row>
          </Container>{" "}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>


      <Modal
        show={SILVER}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={SILVERClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>ЖК Серебряный</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Container>
            <Row>
              <Col>
                <Image style={{ width: "18rem" }} src={lift6}></Image>
              </Col>
              <Col>
                <h2>Выполненные работы</h2>
                <h4> ● Техническое обслуживание по графику</h4>
                <h4> ● Установка зеркала</h4>
                <h4> ● Замена напольного покрытия</h4>
              </Col>
            </Row>
          </Container>{" "}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>



      <Row>
        <h4 className="text">
          Компания ООО "ЛИФТСИТИ" осуществляет техническое обслуживание и ремонт
          лифтов в разных жилищных комплексах города.
        </h4>
      </Row>
      <Row style={{ paddingTop: "2rem" }}>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={lift1} />
            <Card.Body>
              <Button variant="white" onClick={WHITEShow}>
                ЖК Белые росы
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={lift2} />
            <Card.Body>
            <Button variant="white" onClick={SILENTShow}>
                ЖК Тихие зори
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={lift3} />
            <Card.Body>
            <Button variant="white" onClick={ORBITAShow}>
                ЖК Орбита
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ paddingTop: "2rem" }}>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={lift4} />
            <Card.Body>
            <Button variant="white" onClick={NORDGATEShow}>
                ЖК Северные ворота
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={lift5} />
            <Card.Body>
            <Button variant="white" onClick={MIRRORShow}>
                ЖК Отражение
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={lift6} />
            <Card.Body>
            <Button variant="white" onClick={SILVERShow}>
                ЖК Серебряный
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Objects;
