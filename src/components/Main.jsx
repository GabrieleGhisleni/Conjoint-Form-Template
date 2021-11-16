import React, {  Component } from 'react'
import { Container }from 'reactstrap'

import * as data from './shared/data.json';
import * as axios from 'axios'
import CustomForm from './CustomForm'
import shuffle_data from './shuffle';
import Header from "./Header";
import Footer from './Footer'; 
import { SETTINGS } from './shared/settings';

class  Main extends Component {
    constructor(props) {
        super(props);
        this.state = { lang:'it', previous:null }
        this.changeLang = this.changeLang.bind(this)}

    changeLang(val){this.setState({lang:val})}
    componentDidMount(){
        // axios.get(SETTINGS.jsonbin+"latest")
        // .then(res => "")
        // .catch(e => {alert("JSON BIN WRONG")})
    }
    
    render() { 
        const DATA = data.default
        const SHUFFLE_DATA = shuffle_data(DATA)
        return ( 
        <React.Fragment>
            <Container className='main-container'>
                <Header lang={this.state.lang} langF={this.changeLang}/>
                <CustomForm lang={this.state.lang} data={SHUFFLE_DATA}/>
            </Container>
            <Footer />
        </React.Fragment>  );
    }
}
 

export default Main;