import React from 'react'
import { styled } from 'styled-components';
import { RadioGroup, Radio, Button } from '@material-ui/core';
import Timer from './Timer';
import { useEffect, useState } from 'react';
import Records from './records.json'
import axios from 'axios';
import JsonData from './JsonData';
import { useNavigate } from "react-router-dom";
import { decodeToken, getToken } from "./LocalStorageServices";


import {
 
    TimerBox,
    BoxContainer,
    FieldContainer_RF,
    SubmitButton,

} from "./common";

export default function TestPage() { 
    const navigate = useNavigate();

    var [data,setData] =useState([])

    var  [score , setScore] =useState(0)


    if(getToken){ 
        let decoded_token = decodeToken()
        var user_fk=decoded_token.user_id
      }

    
    const handleSubmit = async(e)=>{
        e.preventDefault()
    console.log("Submit Function",  score)
// console.log(user_fk)
        var test_data={
            score,
            user_fk
        }
        console.log(test_data)

        const headers ={

            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("Access_token")),
            'Content-Type': 'application/json',
            'accept': 'application/json',
          }
          console.log(headers.Authorization)
          
    
    const response = await axios
    .post("http://127.0.0.1:8000/Kavtech/quiz/test/",test_data,{
        headers:headers
    })
    .catch((err) => {
      console.log(err)
});

    console.log(response)
}

const  getResult=(score)=> {
    setScore(score)
}

    return (
        <>
<br/>
<FieldContainer_RF> 

    <BoxContainer> You have total 10 numbers of Questions.</BoxContainer>

<BoxContainer >
    <br/>
    <TimerBox> 
    <Timer/> 
    </TimerBox>

</BoxContainer>

<br/>
<h1 style={{color:"red" , padding:"34px 0px 0px"}}> Rendering 100 questions from a server!! </h1>
<div style={{color:"blue" , padding:"34px"}}>



<JsonData result={getResult}/> {/*   */} 




<SubmitButton type='submit' onClick={handleSubmit}>Submit</SubmitButton>


</div>
</FieldContainer_RF>
<br/>

</>
)
  
  }