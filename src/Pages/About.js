import React, { Component } from 'react'
import { Container,Tab, Nav, Row, Col } from 'react-bootstrap'
import Imglogo from '../assets/lift.png';
import '../Page.css';

export default class About extends Component {
    render() {
        return (
            <Container style={{paddingTop: '10rem', paddingBottom: '2rem' }}>
            <Row>
                <Col md={5}>
                    <img src={Imglogo} height={400} alt ="logo"/>
                </Col>
                <Col md={7}>
                    <p className="textAb">ООО «ЛИФТСИТИ» оказывает услуги по техническому, аварийно-техническому обслуживанию лифтов и систем диспетчеризации.</p>
                    <p className="textAb"> В нашей компании высококвалифицированный аттестованный персонал. Создана служба инженерно-технического обеспечения, аварийно-диспетчерская служба, служба эксплуатации инженерного оборудования и автоматизированных систем управления.  </p>
                    <p className="textAb">Наличие собственной спецтехники и постоянно пополняемая материально-техническая база позволяют качественно и в минимальные сроки решать вопросы по содержанию лифтового хозяйства. </p>
                    <p className="textAb">Мы предлагаем Вам высокий стандарт качества обслуживания Вашего лифтового оборудования. </p>
                    <p className="textAb">Лифтовая организация имеет на обслуживании более 200 единиц лифтов различной модификации. </p>
                    <p className="textAb1">Управляющий ООО « ЛИФТСИТИ»	 Мосин Сергей Юрьевич</p>
                </Col>
            </Row>
        </Container>
        );
    }
}
