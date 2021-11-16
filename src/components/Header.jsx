import ReactCountryFlag from "react-country-flag"
import { Row, Col, Button } from 'reactstrap'
import { TEXT } from './shared/text'
import Iframe from 'react-iframe'
import React from 'react'

const Header = (props) => {
    return (
        <React.Fragment>
            <Row>
                <Col xs='12'>
                    <img src= {process.env.PUBLIC_URL+"/home.jpg"} className='home-image' alt='useless image'/>
                </Col>
            </Row>
            <div className='container-div'>
                <Row>
                    <Col xs='12' sm='auto' >
                        <h2 className='home-title' > {TEXT[props.lang].title}<br /><span style={{ fontSize: "1.5rem" }}>Conjoint Choice Based Survey</span></h2>
                    </Col>
                    <Col xs='12' md='auto' className='align-self-center text-center'>
                        <Button onClick={() => props.langF('it')} className='italian-button'>
                            <ReactCountryFlag countryCode="IT" svg className='italian-flag' />
                        </Button>
                        <Button onClick={() => props.langF('en')} className='english-button'>
                            <ReactCountryFlag countryCode="GB" svg className="english-flag" />
                        </Button>
                    </Col>
                    <Col xs='12' className='home-description-text'><hr />{TEXT[props.lang].description}<hr /></Col>
                    <Col xs='12' className='text-center iframe-container'>   
                        <iframe 
                        title="description"
                        frameborder="0" 
                        scrolling="no"
                        marginheight="0"
                        width="443" 
                        style={{borderRadius:"20px"}}
                        height="443" 
                        type="text/html" 
                        allow='fullscreen'
                        src= {TEXT[props.lang].url+"?fs=1&iv_load_policy=3&showinfo=0"}>
                        </iframe>
                    </Col>
                    <Col xs='12' className='text-center button-go-form'>
                        <hr />
                        <Button color='success' className="btn-go-form" onClick={() => { document.getElementById('title').scrollIntoView({ behavior: "smooth" }) }}>
                            {props.lang === 'it' ? <span>Vai al questionario</span> : <span>Go to the Survey</span>}
                        </Button>
                        <hr />
                    </Col>
                </Row>

            </div>
        </React.Fragment>
    )
}

export default Header;