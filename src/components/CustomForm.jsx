import { Button, Row, Col, Container } from "reactstrap";
import toast, { Toaster } from 'react-hot-toast';
import React, { useState, useEffect } from 'react'
import { SETTINGS } from "./shared/settings"

const CustomForm = (props) => {
    const product_profiles = SETTINGS.product_profiles
    const n_attributes = SETTINGS.n_attributes
    const DATA = props.data

    const [selected, setselected] = useState(new Set())
    const [control, setcontrol] = useState(new Set())
    var [j, trial] = [0, [], []];

    if (DATA.length % product_profiles !== 0) alert("Number of questions wrong!")  

    useEffect(() => {
        selected.forEach(r => {
            let box = document.getElementById(`row-${r}`)
            let btn = document.getElementById(`btn-${r}`)
            box.style.backgroundColor = "lightgreen" 
            btn.style.backgroundColor ='rgba(182, 41, 41,0.9)'
            btn.innerText='Deselect'
            })})

    function saveSelect(id){
        var row_check = Math.floor(id/2.9)
        if (selected.has(id)){
            let box = document.getElementById(`row-${id}`)
            box.style.backgroundColor = "rgb(250, 227, 227)"
            setcontrol(prev => new Set([...prev].filter(x => x !== row_check)))     
            setselected(prev => new Set([...prev].filter(x => x !== id)))}
        else{
            setcontrol(prev => new Set(prev.add(row_check)))     
            setselected(prev => new Set(prev.add(id)))}
    }

    function onFinalSubmit(){
        console.log(selected)
    }
    
    for (let idx = 0; idx < DATA.length; idx+=3){
        j++

        const options = DATA.slice(idx, idx+ product_profiles)
        const renderedOptions = options.map( r => { 

            const HandleChecked = () =>{ 
                console.log(control)
                if (control.has(Math.floor(idx/2.9)) && (selected.has(r.id))){
                    return(
                        <Button color='primary'  
                            id={`btn-${r.id}`}
                            className='question-button-col' 
                            onClick={()=>{saveSelect(r.id);}}>
                            {props.lang==='it'?<span>Seleziona</span>:<span>Select</span>}
                    </Button>)} 
                else if (control.has(Math.floor(idx/2.9))){
                    return(
                        <Button color='primary'  
                            id={`btn-${r.id}`}
                            className='question-button-col' 
                            onClick={()=> {alert("Deseleziona First");}}>
                            {props.lang==='it'?<span>Seleziona</span>:<span>Select</span>}
                    </Button>)} 
                else{
                    return(
                        <Button color='primary'  
                            id={`btn-${r.id}`}
                            className='question-button-col' 
                            onClick={()=> {saveSelect(r.id);}}>
                            {props.lang==='it'?<span>Seleziona</span>:<span>Select</span>}
                    </Button>
                )}}
           
            const AttributesLevels = () => {
                var renderedAttributes = []
                for (let i = 0; i < n_attributes; i++){
                    renderedAttributes.push(<Col xs='12'> {SETTINGS[props.lang].mask[i][r[i]]}</Col>)} 
                return renderedAttributes
            }

            return(
            <Col sm='3' className='record-option text-center' id={`row-${r.id}`}>
                    < AttributesLevels/>
                <Col xs='12'>< HandleChecked /></Col>
            </Col>
        )})


        const Attributes = () =>{
            var attributes = []
            for (let i = 0; i < n_attributes; i++){
                attributes.push(<Col xs='12'>{SETTINGS[props.lang].attributes[[i]]}</Col>);}
            return attributes
        }

        trial.push(
            <Row className='question-row align-items-center text-left' >
                <Col xs='12'>
                    <h4>{props.lang==='it'?<p>Domanda  {j}/{SETTINGS.n_questions}</p>:<p>Question  {j}/{SETTINGS.n_questions}</p>}</h4>
                    <h5>
                        {props.lang==='it'?<p>Scegli l'opzione che ritieni migliore.</p>
                        :<p>Select the options that you prefer</p>}
                        </h5>
                </Col>
                <Col sm='3' className='attribute-names text-center'>
                    <h6>Gli attributi si riferiscono in ordine a:</h6>
                    <Attributes/>
                    {window.innerWidth>800? <Col xs='12' className='question-button-col'>&nbsp;</Col>:null}
                </Col>
                    {renderedOptions}
            </Row>
        )
  
    }


    return (
        <Container className='text-center question-container'>
            <h1 className='questionario-title' id='title'>
                {props.lang==='it'? <span>Questionario</span>: <span>Survey</span> }
            </h1>
            {trial}
            <Col className='col-final-submit'>
                <Button color='success' className='btn-go-form' onClick={()=>onFinalSubmit()}>
                    {props.lang==='it'? <span>Invia Questionario</span>: <span>Submit Form</span> }
                </Button>
            </Col>
        </Container>
    )
}

export default CustomForm
