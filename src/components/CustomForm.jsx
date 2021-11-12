import { SETTINGS } from "./shared/settings"
import { DATA } from "./shared/data";
import { TabContent, TabPane, Button, Row, Col, Container, List } from "reactstrap";
import React, { useState, useEffect } from 'react'

const CustomForm = (props) => {
    if (DATA.length % SETTINGS.n_attributes !== 0) alert("Number of questions wrong!")  
    var [j, trial] = [0, [], []];
    const [control, setcontrol] = useState(new Set())
    const [selected, setselected] = useState(new Set())

    useEffect(() => {
        selected.forEach(r => {
            let box = document.getElementById(`row-${r}`)
            let btn = document.getElementById(`btn-${r}`)
            box.style.backgroundColor = "lightgreen" 
            btn.style.backgroundColor ='rgba(182, 41, 41,0.9)'
            btn.innerText='Deselect'
            })})

    function saveSelect(id){
        if (selected.has(id)){
            var row_check = Math.floor(id/2.9)
            let box = document.getElementById(`row-${id}`)
            box.style.backgroundColor = "rgb(250, 227, 227)"
            setcontrol(prev => new Set([...prev].filter(x => x !== row_check)))     
            setselected(prev => new Set([...prev].filter(x => x !== id)))}
        else{
            var row_check = Math.floor(id/2.9)
            setcontrol(prev => new Set(prev.add(row_check)))     
            setselected(prev => new Set(prev.add(id)))}
    }

    function onFinalSubmit(){
        console.log(selected)
    }
    
    for (let idx = 0; idx < DATA.length; idx+=3){
        j++
        const options = DATA.slice(idx, idx+ SETTINGS.n_attributes)
        const renderedOptions = options.map( r =>{   
            const HandleChecked = () =>{ 
                if (control.has(Math.floor(idx/2.9)) && (selected.has(r.id))){
                    return(
                        <Button color='primary'  
                            id={`btn-${r.id}`}
                            className='question-button-col' 
                            onClick={()=>{saveSelect(r.id);}}>
                            Select
                    </Button>)
                } 
                else if (control.has(Math.floor(idx/2.9))){
                    return(
                        <Button color='primary'  
                            id={`btn-${r.id}`}
                            className='question-button-col' 
                            onClick={()=> {alert("Deseleziona First");}}>
                            Select
                    </Button>)
                } 
                else{
                    return(
                        <Button color='primary'  
                            id={`btn-${r.id}`}
                            className='question-button-col' 
                            onClick={()=> {saveSelect(r.id);}}>
                            Select
                    </Button>
                );}
            }
           

            return(
                <Col sm='3' className='record-option text-center' id={`row-${r.id}`}>
                    <Col xs='12'> {SETTINGS[props.lang].mask[0][r[0]]}</Col>
                    <Col xs='12'>{SETTINGS[props.lang].mask[1][r[1]]}</Col>
                    <Col xs='12'>{SETTINGS[props.lang].mask[2][r[2]]}</Col>
                    <Col xs='12'>{SETTINGS[props.lang].mask[3][r[3]]}</Col>
                    <Col xs='12'>{SETTINGS[props.lang].mask[4][r[4]]}</Col>
                <Col xs='12'>
                < HandleChecked />
                </Col>
            </Col>
        )})
        
        trial.push(
            <Row className='question-row align-items-center text-left' >
                <Col xs='12'>
                    <h4>{props.lang=='it'?<p>Domanda  {j}/15</p>:<p>Question  {j}/15</p>}</h4>
                    <h5>
                        {props.lang=='it'?<p>Scegli l'opzione a te preferibile.</p>
                        :<p>Select the options that you prefer</p>}
                        </h5>
                </Col>
                <Col sm='3' className='attribute-names text-center'>
                    <h6>Gli attributi si riferiscono in ordine a:</h6>
                    <Col xs='12'>{SETTINGS[props.lang].attributes[[0]]}</Col>
                    <Col xs='12'> {SETTINGS[props.lang].attributes[[1]]}</Col>
                    <Col xs='12'> {SETTINGS[props.lang].attributes[[2]]}</Col>
                    <Col xs='12'> {SETTINGS[props.lang].attributes[[3]]}</Col>
                    <Col xs='12'> {SETTINGS[props.lang].attributes[[4]]}</Col>
                    {window.innerWidth>800? <Col xs='12' className='question-button-col'>&nbsp;</Col>:null}
                </Col>
                    {renderedOptions}
            </Row>
        )
  
    }


    return (
        <Container className='text-center question-container'>
            <h1 className='questionario-title' id='title'>
                {props.lang=='it'? <span>Questionario</span>: <span>Form</span> }
            </h1>
            {trial}
            <Col className='col-final-submit'>
                <Button color='success' onClick={()=>onFinalSubmit()}>SUBMIT THE FORM</Button>
            </Col>
        </Container>
    )
}

export default CustomForm
