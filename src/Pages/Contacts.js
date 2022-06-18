import React, { Component } from 'react'
import { Form, Button, Container, Col, Row } from 'react-bootstrap'
import '../Page.css';
import KARTA from '../KARTA.docx'

export default class Contacts extends Component {
    render() {
        return (
            <>
            <Container className="col-md-12" style={{paddingTop: '10rem', paddingBottom: '0rem' }}>
                <section className="contact">
            <div class="container">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A556d5c60faccd6f191afd22a29f9191b6e6aeb0d390768d04a8de87f60a64aa9&amp;source=constructor" width="100%" height="240" frameborder="0"></iframe>
            </div>
            </section>
            </Container>
            <Container style={{paddingTop: '1rem', paddingBottom: '2rem' }}>
                
            <Row>    
            <Col>
            <p className="text">Аварийная служба</p>
            <p className="text">Круглосуточно</p>
            <p className="text">тел. +7-391-267-97-97</p>
            <p className="text">тел. +7-999-448-18-55</p>
            <Button variant="link" href={KARTA}> <p className="text">Информационная карта предприятия</p> </Button>
            </Col>
            <Col>
            <p className="textr">Офис</p>
            <p className="textr">Пн-Пт с 9-00 до 17-00</p>
            <p className="textr">Почтовый индекс: 660074 г.Красноярск</p>
            <p className="textr">ул. Академика Киренского, д.24а, пом.VI</p>
            <p className="textr">Email: liftcity124@mail.ru</p>
            </Col>
            </Row>
            </Container>
            </>
        );
    }
}
