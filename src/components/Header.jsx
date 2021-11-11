import { Row, Col, Button } from 'reactstrap'
import { HDESCRIPTION } from './shared/header-description'
import React from 'react'
import Iframe from 'react-iframe'

const Header = (props) => {
    return (
        <React.Fragment>
            <Row>
                <Col xs='12'>
                    <img src='/images/home3.jfif' className='home-image' />
                </Col>
            </Row>
            <div className='container-div'>
                <Row>
                    <Col xs='8' >
                        <h2 className='home-title' > Economies | Web App <br />Conjoint Choice Based Survey</h2>
                    </Col>
                    <Col xs='auto' className='align-self-center'>
                        <Button onClick={() => props.langF('it')} className='italian-button'>IT </Button>
                        <Button onClick={() => props.langF('en')} className='english-button'>EN</Button>
                    </Col>
                </Row>
                <Row className='home-description'>
                    <Col xs='12'>
                        {HDESCRIPTION[props.lang].description}
                    </Col>
                    <Col xs='12' className='text-center'>
                        <h4>Economies | WebApp {props.lang == 'it' ? <p>Dimostrazione</p> : <p>Showing off</p>}</h4>
                        <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                            width="60%"
                            height="100%"
                            display="initial"
                            position="relative"
                            allowFullScreen
                            allow="fullscreen"/>
                    </Col>
                </Row>
            </div>
            </React.Fragment>
    )
}

export default Header