import React from 'react'
import './jobOpenings.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Radio, RadioGroup } from '@material-ui/core';
import { FormControl,FormControlLabel,FormLabel  } from '@mui/material';
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { decodeToken, getToken } from "./LocalStorageServices";
import DateTimePicker from "./DateTimePicker";
import EmailIcon from '@mui/icons-material/Email';

   import {
    ListItem, 
    FormContainer_2,
    Label,
    SubmitButton
  }
   from "./common";


const data =[
    {

        id:1,
        title:'Web Developer',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },

    {
        id:2,
        title:'D-Jango',
        
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
        id:3,
        title:'Frontend',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },

    {        id:4,
        title:'backend',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },

]



function Jobopenings() {

    const navigate = useNavigate();



    const onSubmit = (values)=>{

        const {...data} = values;
        if(data.sched_test==='now'){
        navigate('/Testpage');
    }
        console.log(data)

    }



    const getresult = (value)=>{
        

        console.log(value)
        formik.values.sched_test=value
        console.log(formik.values.sched_test)
        console.log(value)
        {<h6> Test Scheduled Successfully! you will be notified</h6>}

      }
    
    
    // const onSubmit = async (values) => {
    //     const {...data} = values;
    //     console.log(values)
      
    //     const headers ={
      
    //     'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("Access_token")),
    //     'Content-Type': 'application/json',
    //     'accept': 'application/json',
    //   }
    //   console.log(headers.Authorization)
      
    //   const response = await axios
    //       .post("http://127.0.0.1:8000/Kavtech/profile/", data,{
    //   headers: headers
    //       }).catch((err) => {
    //         console.log(err)
    //   });
      
    //   console.log(response)
    //     if (response && response.data) {
    //       formik.resetForm();
    //     }
      

    const formik = useFormik({
        initialValues: {
          sched_test:"",
      },
      validateOnBlur: true,
        onSubmit,
    
      });
    

    
    const map_Fun = data.map((val, index)=>  
    
<FormContainer_2 onSubmit={formik.handleSubmit}>   

    <ListItem key={val.id}>

<div  className='card1'>
<h1 > {val.title} </h1>
<div className='container1' >
<h5> {val.description} </h5>
<Label>Test Schedule:
  <br/>


  <RadioGroup aria-labelledby="demo-radio-buttons-group-label" 
    defaultValue="now" 
    name="radio-buttons-group">
    <FormControlLabel onChange={formik.handleChange} value="now" name="sched_test" control={<Radio />} label="now" />
    <FormControlLabel onChange={formik.handleChange}  value="later" name="sched_test" control={<Radio />} label="later" />


{formik.values.sched_test==='later'? <DateTimePicker result={getresult} />:  ''}

  <br/>

  </RadioGroup>
</Label>


<SubmitButton type="submit"> submit</SubmitButton>


</div>
 </div>
 </ListItem>
     
    </FormContainer_2>
    ); 

  return (
    <div>

{map_Fun}
    </div>
  )
}

export default Jobopenings
