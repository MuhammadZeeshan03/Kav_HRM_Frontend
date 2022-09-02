import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { Link } from './../Footer/styles/footer';

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbarr">
      <div className="wrapperr">
        <div className="searchh">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="itemss">
          <div className="items">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="items">
            <DarkModeOutlinedIcon
              className="icons"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="items">
            <FullscreenExitOutlinedIcon className="icons" />
          </div>
          <div className="items">
            <NotificationsNoneOutlinedIcon className="icons" />
            <div className="counterr">1</div>
          </div>
          <div className="items">
            <ChatBubbleOutlineOutlinedIcon className="icons" />
            <div className="counterr">2</div>
          </div>
          <div className="items">
            <ListOutlinedIcon className="icons" />
          </div>
          <div className="items  dropdown">
            <a>
            <img

              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
              
            />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
