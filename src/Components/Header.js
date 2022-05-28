import React, { Component } from 'react'
import { Nav, Navbar, FormControl,Container, Form,  Button } from 'react-bootstrap'
import { Route } from 'react-router'
import logo from '../assets/logo.png';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Services from '../Pages/Services';
import Objects from '../Pages/Objects';
import '../Page.css';


export default class Header extends Component {
    render() {
        return (
            <>
            
            <Navbar fixed="top"  collapseOnSelect expand="md" bg="dark" variant="dark">
            
                <Container>
                
                    <Navbar.Brand href="/">
                        <img 
                        src={logo}
                        height="90"
                        widght="90"
                        className="d-inline-block align-top"
                        alt="Logo"

                        /> 
                        
                    </Navbar.Brand>
                    <Navbar.Text href="/"><h4>ООО «ЛИФТСИТИ»</h4></Navbar.Text>
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                      
                        <Nav className="ml-auto">
                            
                            <Nav.Link href="/"> <h5>Главная</h5></Nav.Link>
                            <Nav.Link href="/about"><h5>О компании</h5></Nav.Link>
                            <Nav.Link href="/services"><h5>Услуги</h5></Nav.Link>
                            <Nav.Link href="/objects"><h5>Объекты</h5></Nav.Link>
                            <Nav.Link href="/contacts"><h5>Контакты</h5></Nav.Link>
                           
                           
                        </Nav>
                        <Navbar.Text className="ml-auto" >
                            <h5 className="head">Телефон диспетчерской:</h5>
                            <h5 className="head">8-999-448-1855</h5>
                            <h5 className="head">8-391-267-9797</h5>
                        </Navbar.Text>    
                     
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/services" component={Services} />
                    <Route exact path="/objects" component={Objects} />

                   
                </Switch>
            </Router>
            <Navbar className="fixed"  collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
                    <Navbar.Text className="mr-auto" >
                    <h4 className="head">ООО «ЛИФТСИТИ»</h4>
                        <h5 className="head"></h5>
                        <h5 className="head"></h5>
                    </Navbar.Text>    
                    <Navbar.Text className="mr-auto" >
                        <h4 className="head">Адрес: </h4>
                        <h5 className="head">660074 г.Красноярск, ул. Академика Киренского, д.24а, пом.VI.</h5>
                        <h5 className="head"></h5>
                    </Navbar.Text>  
                    <Navbar.Text className="mr-auto" >
                        <h4 className="head">Контактные телефоны: </h4>
                        <h5 className="head">8-999-448-1855</h5>
                        <h5 className="head">8-391-267-9797</h5>
                    </Navbar.Text>
                    <Navbar.Text className="mr-auto" >
                        <h4 className="head">E-MAIL: </h4>
                        <h5 className="head">liftcity124@mail.ru</h5>
                    </Navbar.Text>

            </Container>
        </Navbar>
        </>
        );
    }
}
