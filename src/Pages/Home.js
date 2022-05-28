import React, { Component } from 'react'
import Jumbotron from '../Components/Jumbotron';
import CarouselBox from '../Components/CarouselBox';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import Imglogo from '../assets/logo.png';
import '../Page.css';


export default class Home extends Component {
    render() {
        return (
            <>
            <Container className="col-md-12" style={{paddingTop: '8rem', paddingBottom: '0rem' }}>
            <Jumbotron>
            </Jumbotron>
            <p  className="text">Все работы осуществляются в соответствии с:</p>
            <p  className="text">1. Положение о порядке организации эксплуатации лифтов в Российской Федерации, утверждено Приказом Государственного комитета по строительству и жилищно-коммунальному комплексу от 30 июня 1999 года N 158</p>
            <p  className="text">2. ПОТ Р М-016-2001, РД 153-34.0-03.150-00 Межотраслевые правила по охране труда (правила безопасности) при эксплуатации электроустановок (с Изменениями и дополнениями)</p>
            <p  className="text">3. Правила по охране труда при эксплуатации электроустановок, утверждены приказом Минтруда России от 24.07.2013 N 328н в ред. от 19.02.2016 (введены в действие 04.08.2014) п-328н.</p>
            <p  className="text">4. ТР ТС 011/2011 Технический регламент Таможенного союза "Безопасность лифтов", утвержден Решением Комиссии Таможенного союза от 18 октября 2011 года N 824.</p>
            <p  className="text">5. ГОСТ 33984.1-2016 Межгосударственный стандарт. Лифты. Общие требования безопасности к устройству и установке. Лифты для транспортирования людей или людей и грузов.</p>
            <p  className="text">6. Инструкцией завода изготовителя.</p>
            <p  className="text">Мы соблюдаем все требования и делаем все необходимое для безопасной эксплуатации лифтов.</p>
            </Container>
                
            </>
            
        )
    }
}
