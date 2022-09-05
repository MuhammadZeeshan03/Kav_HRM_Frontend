
import React, { useContext,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle,faCheckCircle, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import zxcvbn from 'zxcvbn';
import { Button,Link } from '@material-ui/core';
import { useFormik } from "formik";
import {GoogleLogin} from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory, Navigate } from 'react-router-dom';
import Icon  from './icon';
import useStyles from './styles';
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { AUTH } from '../../components/constants/actionTypes';
import {
  BoldLink,
  BoxContainer,
  FieldContainer,
  FieldError,
  FormContainer,
  FormSuccess,
  Input,
  MutedLink,
  SubmitButton,
  FormError,
  Validity
} from "./common";
import { Marginer } from "./../marginer/index";
import { AccountContext } from "./accountContext";
import './validity.css';
import { nodeName } from "jquery";
import validator from 'validator'
import { Alert } from "bootstrap";


const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, "Please enter you real name")
    .required("Full name is required!"),
  email: yup.string().email("Please enter a valid email address").required(),
  password: yup
    .string()
    .matches(PASSWORD_REGEX, "Please enter a strong password")
    .required()
});







export function SignupForm(props) {

  const [show, setShow] = useState(false);
const { switchToSignin } = useContext(AccountContext);
const navigate = useNavigate();


//pasword strength meter

    const handleShowHide =() =>{
      setShow(!show);
      //  PasswordStrength meter
    };

  const [ password, setPassword] = useState('');
  const testResult = zxcvbn(password);
  
const num = testResult.score * 100/4;
  
  const changePasswordColor =   () => ( {
    width : `${num}%`,
    background :  funcProgressColor(),
    height : ' 6px'
  })
  const funcProgressColor = () => {
    switch(testResult.score) {
      case 0:
        return '#828282';
      case 1:
        return '#EA1111';
      case 2:
        return '#FFAD00';
      case 3:
        return '#9bc158';
      case 4:
        return '#00b500';
        default:
          return nodeName;
      
    }
  }

const App = () => {
  
  const [errorMessage, setErrorMessage] = useState('')
  

  const validate = (value) => {
  

    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage('Is Strong Password')
    } else {
      setErrorMessage('Is Not Strong Password')
    }
  }
  
  return (
    <div style={{
      marginLeft: '200px',
    }}>
      <pre>
        <h2>Checking Password Strength in ReactJS</h2>
        <span>Enter Password: </span><input type="text"
          onChange={(e) => validate(e.target.value)}></input> <br />
          <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{errorMessage}</span>
      </pre>
    </div>
  );
}
const [success, setSuccess] = useState(null);
const [error, setError] = useState(null);

const onSubmit = async (values) => {
  const { confirmPassword, ...data } = values;

  const response = await axios
    .post("http://127.0.0.1:8000/Kavtech/register/", data)
    
    .catch((err) => {
      if (err && err.response) setError(err.response.data.message);
      setSuccess(null);
     
    });

  if (response && response.data) {
    setError(null);
    setSuccess(response.data.message);

    props.alert(response.data.msg +'you will be redirected. . . ' ,'success')
    formik.resetForm();

    setTimeout(() => {
      switchToSignin() 
    
    }, 1000);

  }
};
const formik = useFormik({
  initialValues: {
    name: "",
    email: "",
    password: "",
    
  },
  validateOnBlur: true,
  onSubmit,
  validationSchema: validationSchema,
});



  return (
 

    <BoxContainer>
       {!error && <FormSuccess>{success ? success : ""}</FormSuccess>}
      {!success && <FormError>{error ? error : ""}</FormError>}
  
      <FormContainer onSubmit={formik.handleSubmit}>
      <FieldContainer>
          <Input
            name="name"
            placeholder="Username"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.name && formik.errors.name
              ? formik.errors.name
              : ""}
          </FieldError>
        </FieldContainer>
        <FieldContainer>
          
          <Input
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""}
          </FieldError>
        </FieldContainer>
        <FieldContainer>
        <Input
        name="password"
         type={show ? "text" : "password"} 
        placeholder="Password" 
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
        <FieldError>
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ""}
          </FieldError>
        </FieldContainer>
        {show ? (
       <FontAwesomeIcon 
       className="faEye" icon={faEye} 
         
          id="show_hide" 
          
          onClick={handleShowHide}
          />

          ) : (
            <FontAwesomeIcon 
            className="faEyeslash" icon={faEyeSlash} 
              
               id="show_hide" 
               
               onClick={handleShowHide}
               />

          )}
        <FormContainer>
      </FormContainer>
        
       
           <div id="password-strength" 
            
           style={changePasswordColor()}
            >

           </div>
      
      <Marginer direction="vertical" margin="1em" />
        <SubmitButton type="submit" disabled={!formik.isValid}>
          Signup
        </SubmitButton>
        
        </FormContainer>
    <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          sign in
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}


