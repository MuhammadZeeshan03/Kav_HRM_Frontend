import React, { useState ,useContext} from "react";
import { useNavigate } from "react-router-dom";

import {
  BoldLink,
  BoxContainer,
  FormContainer,
  FormError,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";

import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import {storeToken } from "./LocalStorageServices";



function LoginForm(props) {

  const navigate = useNavigate();


  const { switchToSignup } = useContext(AccountContext);
  const [error, setError] = useState(null);  

const loginUser = async (e)=>{
  e.preventDefault()
  console.log("Form Submitted")

let response = await fetch('http://127.0.0.1:8000/Kavtech/login/',
  {method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      'email':e.target.email.value,
      'password':e.target.password.value})
  })

  let data = await response.json()
console.log("data",data)
console.log("Response",response)

if(response.status===200){
storeToken(data.token);
alert(data.msg)

if(data.userType==='admin')
{
  navigate("/");
}

if(data.userType==='scrum'){
  navigate('/performance')
}

else{
    
  navigate('/home')

}

}
else{
  alert("Something Went wrong!!!")
}

}

return (
    <BoxContainer>
      <FormError>{error ? error : ""}</FormError>
      <FormContainer onSubmit={loginUser}>
           <Input
            name="email"
            placeholder="Email"
            // onChange={getData}
                      />
           <Input
            name="password"
            type="password"
            placeholder="Password"
            // onChange={getData}
        />
         <MutedLink href="#">Forgot Password?</MutedLink>
        <Marginer direction="vertical" margin="1em" />
        <SubmitButton type="submit" >
          Login
        </SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Dont have an Account?
        <BoldLink href="#" onClick={switchToSignup}>
          sign up
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
export default LoginForm