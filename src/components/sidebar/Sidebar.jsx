import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = (props) => {
  
const { dispatch } = useContext(DarkModeContext);

if(props.var==="/Employee")
{ 
  return (

    <div className="sidebar">
    <div className="top">
      <Link to="/Employee" style={{ textDecoration: "none" }}>

        <span className="logo">Employee</span>
      </Link>
    </div>
    <hr />

    <div className="center">
      <ul>
        <p className="title">MAIN</p>
        <li>
          <DashboardIcon className="icon" />
          <span>My Space</span>
        </li>
        <p className="title">LISTS</p>

        <Link to="/Jira" style={{ textDecoration: "none" }}>
          <li>
            <StoreIcon className="icon" />
            <span onClick={console.log("Clicked")}>Jira</span>
          </li>
          </Link>



          <li>
            <StoreIcon className="icon" />
            <span>Projects</span>
          </li>

 <p className="title">Stats</p>
        <li>
          <InsertChartIcon className="icon" />
          <span>Anaytics</span>
        </li>
        <li>
          <NotificationsNoneIcon className="icon" />
          <span>To-do List</span>
        </li>
  
        <p className="title">USER</p>
        <li>
          <AccountCircleOutlinedIcon className="icon" />
          <span>Profile</span>
        </li>
        <li>
          <ExitToAppIcon className="icon" />
          <span>Logout</span>
        </li>
      </ul>
    </div>
    <div className="bottom">
      <div
        className="colorOption"
        onClick={() => dispatch({ type: "LIGHT" })}
      ></div>
      <div
        className="colorOption"
        onClick={() => dispatch({ type: "DARK" })}
      ></div>
    </div>
  </div>
   
)




}

else
{
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Dashboard</span>
        </Link>
      </div>
      <hr />

      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>My Space</span>
          </li>
          <p className="title">LISTS</p>

          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Resources</span>
            </li>

          </Link>
          
          {/* <Link to="/projects" style={{ textDecoration: "none" }}> */}
            <li>
              <StoreIcon className="icon" />
              <span>Projects</span>
            </li>
          {/* </Link> */}
          
          <Link to="/Jira" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Jira</span>
            </li>
          </Link>
   <p className="title">Stats</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Anaytics</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>To-do List</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
}
};

export default Sidebar;