import React, {  Component } from 'react'
import { Container }from 'reactstrap'
import Header from "./Header";
import CustomForm from './CustomForm'

class  Main extends Component {
    constructor(props) {
        super(props);
        this.state = { lang:'it' }
        this.changeLang = this.changeLang.bind(this)}
    changeLang(val){this.setState({lang:val})}

    render() { 
        return ( 
        <React.Fragment>
            <Container className='main-container'>
            < Header lang={this.state.lang} langF={this.changeLang}/>
            < CustomForm lang={this.state.lang} />
            </Container>
        </React.Fragment>  );
    }
}
 

export default Main;