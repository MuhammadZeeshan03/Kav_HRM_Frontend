import React , { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes
} from 'react-router-dom';
import { AuthProvider} from './Components/accountBox/accountContext'
import { getToken } from './Components/accountBox/LocalStorageServices';
// import PrivateRoute from './pages/Home/PrivateRoute';
import PrivateRoute from './Components/accountBox/PrivateRoute'
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import TestPage from './Components/accountBox/TestPage';
import Services from './pages/Service/Services';
import Navbar from './Components/Navbar/Navbar';
import styled from "styled-components";
import { FooterContainer } from './Components/Footer/containers/footer'
import { AccountBox } from "./Components/accountBox";
import RegistrationForm from './Components/accountBox/RegistrationForm';
import LoginForm from './Components/accountBox/loginForm';
import Jobopenings from './Components/accountBox/Jobopenings';
import AddPerformace from './Components/accountBox/AddPerformance';

const AppContainer = styled.div`
  
  width: 100%;
  padding-right: 48px !important;
  height: 100%;import LoginForm from './Components/accountBox/loginForm';

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const App = () => {
 
  return (
    <Router>
    <Navbar/>
    <main>
      <Routes>
        <Route path="/Home" element={<Home/>}  />
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Services/>} />
        <Route path="/contact"  element={<Contact/>} />
       
        <Route path="/TestPage" element={<TestPage/>} />

        <Route path="/jobOpening" element={<Jobopenings/>} />
        <Route path="/perf" element={<AddPerformace/>} />
        

        
        <Route path="/LoginForm" element={ 
              <AppContainer> 
                <AccountBox /> 
              </AppContainer>} />


  <Route element={<PrivateRoute/>}>

    <Route path='/RegistrationForm' element={<RegistrationForm/>}  /> 
  </Route>

    </Routes>
    </main> 
    <FooterContainer />
   </Router>
  );
}
export default App;
