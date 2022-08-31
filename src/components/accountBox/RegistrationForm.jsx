import React, { useContext,useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Radio, RadioGroup } from '@material-ui/core';
import { FormControl,FormControlLabel,FormLabel  } from '@mui/material';
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { decodeToken, getToken } from "./LocalStorageServices";
import DateTimePicker from "./DateTimePicker";
// import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person'
import {
 
  FieldContainer_RF2,
  BoxContainer,
  FieldContainer_RF,
  FormContainer,
  Input_RF,
  Input_RF2,
  Input_RF3,
  Label,
  SubmitButton
}
 from "./common";
import Email from "@mui/icons-material/Email";

function RegistrationForm(props) {


  const navigate = useNavigate();
  const [experience, setExp]= useState(0)




  const getresult = (value)=>{
   
    console.log("Accepting  result form the child com")
    console.log(value)
    formik.values.sched_test=value
    console.log("Printing values using formik")
    console.log(formik.values.sched_test)
    console.log(value)

  }

  if(getToken){ 
  let decoded_token = decodeToken()
  var user_fk=decoded_token.user_id
}

const onSubmit = async (values) => {
  const {...data} = values;
  console.log(values)

  const headers ={

  'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("Access_token")),
  'Content-Type': 'application/json',
  'accept': 'application/json',
}
console.log(headers.Authorization)

const response = await axios
    .post("http://127.0.0.1:8000/Kavtech/profile/", data,{
headers: headers
    }).catch((err) => {
      console.log(err)
});

console.log(response)
  if (response && response.data) {
    formik.resetForm();
  }


  if(data.sched_test==='now')
{  navigate("/Testpage");}
else{
  alert("Test Scheduled Successfully you will be notified!")
}
};

const formik = useFormik({
    initialValues: {
      
      first_name: "",
      last_name:"",
      birth_date:"",
      sched_test:"",
      experience:"",
      b_degree:"",
      b_institute:"",
      m_degree:"",
      m_institute:"",
      phd_degree:"",
      phd_institute:"",
      user_fk:user_fk,

  },
  
  validateOnBlur: true,
    onSubmit,

  });


  useEffect(()=>{

    const changeExperience = ()=>{

      if(formik.values.experience==='Fresher')  {
        console.log("From use Effect",experience)
        return setExp("0")
    }
    
      else if(formik.values.experience==='1-2 years'){
        console.log("From use Effect", experience)
        return setExp("1")
    }

    else if(formik.values.experience==='2-5 years'){
      console.log("From use Effect", experience)
      return setExp("2")
    }
    
    else if(formik.values.experience==='Above 5 years '){
      console.log("From use Effect", experience)
      return setExp("3")
    }
    
    
    } 

    console.log(experience);

  
  },[])

  


    return (
 
<>

<br/>
<br/>


<FieldContainer_RF>
<FieldContainer_RF2>
<br/>
<br/>
<BoxContainer>
<FormContainer onSubmit={formik.handleSubmit}>   


<Label>First Name:<br/>

{/* <PersonIcon color="primary" fontSize="large"/> */}

<Input_RF3
type='text'
name="first_name"
placeholder="Enter Your Last Name"
value={formik.values.first_name}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
required/></Label><br/> 
<Label>Last Name:   
<br/>
<Input_RF3 
type='text'
name="last_name"
placeholder="Enter Your Last Name"
value={formik.values.last_name}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
required />
</Label>
<br/>
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




<Label>Date of Birth:   
<br/>

{/* {<Email sx={{fontSize:56}}/>} */}

 <Input_RF3 
 type='date'
 name="DoB"
placeholder="Enter Your Date of Birth"

value={formik.values.DoB}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
required />
</Label>

<br/>
<h3>Education:</h3>
<Label>Bachlors:  
  <br/> 

 <Input_RF2
 type='text'
 name="b_degree"
onChange={formik.handleChange}
value={formik.values.b_degree}
placeholder="Degree"
 />
 <Input_RF3
 type='text' 
 name="b_institute"
 onChange={formik.handleChange}
 value={formik.values.b_institute}
placeholder="Institute" />
</Label>
<br/>






<Label>Masters:  
  <br/> 
 <Input_RF2
 type='text'
 name="m_degree"
placeholder="Degree"
onChange={formik.handleChange}
value={formik.values.m_degree}
/>
 <Input_RF3
 type={'text'} 
 name="m_institute"
placeholder="Institute"
onChange={formik.handleChange}
value={formik.values.m_institute}

/>
</Label>
<br/>
<Label>PHD:  
  <br/> 
 <Input_RF2
 type='text' 
 name="phd_degree"
placeholder="Degree"
onChange={formik.handleChange}
value={formik.values.phd_degree}

/>
 <Input_RF3
 type={'text'} 
 name="phd_institute"
placeholder="Institute"
onChange={formik.handleChange}
value={formik.values.phd_institute}
/>
</Label>
<br/>

<Label>Experience: 
  <br/>
  <select name="experience" onChange={formik.handleChange}  value={formik.values.experience}>
  <option  value="Fresher" >Fresher</option>
  <option  value="1-2 years">1-2 years</option>
  <option   value="2-5 Years">2-5 years</option>
  <option  value="Above 5 years">Above 5 years</option>
</select>
<br/>  
</Label>
<br/>


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
*/}

<Label>CV/Resume:  
  <br/> 
 <Input_RF3
 type='file'
 name='file'
placeholder="Enter Your First Name"

required /> 
</Label>
<br/>

{/* <Label>Test Schedule:
  <br/>
  <FormControl required>

  <RadioGroup aria-labelledby="demo-radio-buttons-group-label" 
    defaultValue="now" 
    name="radio-buttons-group">
    <FormControlLabel onChange={formik.handleChange} value="now" name="sched_test" control={<Radio />} label="now" />
    <FormControlLabel onChange={formik.handleChange}  value="later" name="sched_test" control={<Radio />} label="later" />

{console.log("Here we are")}
{console.log(formik.values.sched_test)}

{formik.values.sched_test==='later'? <DateTimePicker result={getresult} />:''}
  <br/> */}
 <SubmitButton type="submit"> submit</SubmitButton>
{/* </RadioGroup> */}
{/* </FormControl> */}
{/* </Label> */}

</FormContainer>
</BoxContainer>
</FieldContainer_RF2>
</FieldContainer_RF>

<br/>
<br/>
<br/>
</>
  );
 }

export default RegistrationForm