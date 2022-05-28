import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import lift1 from '../assets/lift1.png';
import lift2 from '../assets/lift2.jpg';
import lift3 from '../assets/lift3.png';
import '../Page.css';



export default class CarouselBox extends Component {
    render() {
        return (
        <Carousel>
            <Carousel.Item style={{'height': '600px'}}>
                <img 
                    className="d-block w-100"
                    src={lift1}
                    alt="Lift1"
                />
                <Carousel.Caption >
                    <strong className="ie">
                    <h3>Белые росы</h3>
                    </strong>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '600px'}}>
                <img 
                    className="d-block w-100"
                    src={lift2}
                    alt="Lift2"
                />
                <Carousel.Caption>
                    <strong className="ie">
                    <h3>Тихие зори</h3>
                    </strong>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '600px'}}>
                <img 
                    className="d-block w-100"
                    src={lift3}
                    alt="Lift3"
                />
                <Carousel.Caption>
                    <strong className="ie">
                    <h3>Орбита</h3>
                    </strong>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        )
    }
}
