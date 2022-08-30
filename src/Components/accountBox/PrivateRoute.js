import { Route,Navigate, Outlet } from 'react-router-dom';
import { decodeToken, getToken } from './LocalStorageServices';
// import { useContext, useState, useEffect, React } from 'react';


const  PrivateRoute = () =>{
console.log("Private")
const access_key = getToken()
if(access_key){

    let decoded_token = decodeToken()
    console.log(decoded_token.user_id)
}
        return(
            access_key? <Outlet/> : <Navigate to='/LoginForm'/>
            )

}
export default PrivateRoute