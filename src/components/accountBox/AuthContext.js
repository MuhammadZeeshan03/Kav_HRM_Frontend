import  { createContext, useState,useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { AuthProvider } from './accountContext';


const authContext  = createContext()

export default authContext


export const AuthProvider = ({children}) =>{
    return(
        <authContext.Provider value={{'name':'Zeeshan'}}>
            {children}
        </authContext.Provider>
    )

}