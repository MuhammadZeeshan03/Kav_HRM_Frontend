import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext , useState } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { FooterContainer } from './components/Footer/containers/footer'
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import KavHome from './pages/KavHome/Home';
import TestPage from './components/accountBox/TestPage';
import Services from './pages/Service/Services';
import KavNavbar from './components/KavNavbar/KavNavbar';
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import RegistrationForm from './components/accountBox/RegistrationForm';
import LoginForm from './components/accountBox/loginForm';
import Jobopenings from './components/accountBox/Jobopenings';
import AddPerformace from './components/accountBox/AddPerformance';
import Alert from "./components/accountBox/Alert";
import PrivateRoute from './components/accountBox/PrivateRoute'
const AppContainer = styled.div`  
  width: 100%;
  padding-right: 48px !important;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


function App() {
  const { darkMode } = useContext(DarkModeContext);
  const [alert, setalert] = useState(null);


  const showAlert = (message,type)=>{
  setalert({
  msg:message,
  type:type
})

setTimeout(() => {
  setalert(null)

}, 1500);

  }
  return (  
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
      <KavNavbar/>
      <Alert alert={alert}/>
      <main>
      <Routes>
        <Route path="/Home" element={<KavHome/>}  />
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Services/>} />
        <Route path="/contact"  element={<Contact/>} />       
        <Route path="/TestPage" element={<TestPage/>} />
        <Route path="/jobOpening" element={<Jobopenings/>} />
        <Route path="/performance" element={<AddPerformace/>} />
        
      <Route path="/LoginForm" element={ 
              <AppContainer> 
                <AccountBox  alert={showAlert}/> 
              </AppContainer>} />


  <Route element={<PrivateRoute/>}>

    <Route path='/RegistrationForm' element={<RegistrationForm/>}  /> 
  </Route>

          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>


            
          <Route path="/Employee">

            <Route index element={<Home var={window.location.pathname}/>} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>








        </Routes>
        </main>
      <FooterContainer />
      </BrowserRouter>
    </div>

  );
}

export default App;
