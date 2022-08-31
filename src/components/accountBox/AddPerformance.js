import React, { useContext,useState, useEffect } from "react";
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

  FieldContainer_RF2,
  BoxContainer,
  FieldContainer_RF,
  FormContainer,
  Input_RF,
  Input_RF2,
  Input_RF3,
  numberd_input,
  Label,
  SubmitButton
}
 from "./common";


 import Email from "@mui/icons-material/Email";
import { blue } from "@material-ui/core/colors";


function AddPerformace(props) {

  const navigate = useNavigate();


  if(getToken){ 
  let decoded_token = decodeToken()
  var user_fk=decoded_token.user_id
}


// const headers ={

//   'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("Access_token")),
//   'Content-Type': 'application/json',
//   'accept': 'application/json',
// }
// console.log(headers.Authorization)

// const response =  axios
//     .post("http://127.0.0.1:8000/Kavtech/profile/", data,{
// headers: headers
//     }).catch((err) => {
//       console.log(err)
// });

// console.log(response)
//   if (response && response.data) {
//     formik.resetForm();
//   }


//   navigate("/TestForm");

// };

const formik = useFormik({
    initialValues: {
      
      date: "",
      task_assigned:"",
      task_completed:'',
      task_pending:"",
      task_failed:"",
      SP_completed:"",
      SP_number:"",
      user_fk:user_fk,

  },
  validateOnBlur: true,
    // onSubmit,

  });


    return (
 
    <>
    <br/>
<br/>

<FieldContainer_RF>,


<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select Resource
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Resource name A</a>
    <a class="dropdown-item" href="#">Resource name B</a>
    <a class="dropdown-item" href="#">Resource name C</a>
  </div>
</div>
<FieldContainer_RF2>
<BoxContainer>
<FormContainer onSubmit={formik.handleSubmit}>


{/*////// Date Field ////////////////// */}




<Label>Date  <br/>
<Input_RF3
type='date'
name="date"
placeholder="Select Date"
value={formik.values.date}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
required/></Label><br/> 


<Label>Task Assigned:   
<br/>
<Input_RF3 
type='number'
name="task_assigned"
placeholder="Enter Task Assigned"
value={formik.values.task_assigned}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
required />
</Label>

<Label>Task Completed:   
<br/>
<Input_RF3 
type='number'
name="task_completed"
placeholder="Enter Task Completed"
value={formik.values.task_completed}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
required />
</Label>

<Label>Task Pending:   
<br/>
<Input_RF3 
type='number'
name="task_pending"
placeholder="Enter Task Pending"
value={formik.values.task_pending}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
required />
</Label>

<Label>QA Failed Task:   
<br/>
<Input_RF3 
type='number'
name="task_failed"
placeholder="Enter Task Pending"
value={formik.values.task_failed}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
required />
</Label>

<Label>Story Points Completed:   
<br/>
<Input_RF3 
type='number'
name="SP_completed"
placeholder="Enter QA Failed Tasks"
value={formik.values.SP_completed}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
required />
</Label>

<br/>
<Label>Sprint Number:   
<br/>
<Input_RF3 
type='number'
name="SP_number"
placeholder="Enter Sprint Number"
value={formik.values.SP_number}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
required />
</Label>
<br/>
<SubmitButton type="submit"> submit</SubmitButton>

{console.log(formik.values.date)}
<br/>

{console.log("Task Completed",  formik.values.SP_completed)}
<br/>


{console.log("Task Failed",  formik.values.task_failed)}
<br/>
</FormContainer>    
</BoxContainer>
</FieldContainer_RF2>
/</FieldContainer_RF>

{/* 
  



{/*   

<br/> */}
{/* <Label>Email:   

<br/>
 <Input_RF3 
 type={'email'}
 name="email"
placeholder="Enter Your Email"
value={formik.values.email}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
required />
</Label>
<br/> */}

{/* 

{/* <Label>Job Openings(Apply For):  */}
  {/* <br/>
   <Checkbox type="checkbox" onChange={formik.handleChange} value="IT" required name="job_openings" /> IT/Infrastructure
  <br/> 
  <Checkbox type="checkbox" onChange={formik.handleChange} value="data_science" name="job_openings" /> Data Science
  <br/>  
  <Checkbox type="checkbox" onChange={formik.handleChange} value="management" name="job_openings" /> management
<br/>    */}

{/* <Input type="input" onChange={formik.handleChange} value={formik.values.job_openings} name="job_openings"/> Data Engineering
 <br/>
</Label>
<br/>
<Label>CV/Resume:  
  <br/> 
 <Input_RF3
 type='file'
 name='file'
placeholder="Enter Your First Name"

required /> */}
{/* </Label> */}
<br/>


 {/* <SubmitButton type="submit"> submit</SubmitButton>
</FormContainer>
</BoxContainer>
</FieldContainer_RF2>
</FieldContainer_RF>

        <br/>
        <br/> */}
        {/* <br/> */}

         </>
   );


}

export default AddPerformace