import React, { useRef, useState } from "react";
import "../style/Header.scss";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";

// Icons
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import HomeIcon from "@material-ui/icons/Home";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import MessageIcon from "@material-ui/icons/Message";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Functions } from "@material-ui/icons";

interface Props {}

// interface Functions{
//   dropdownHandler: (event: React.MouseEventHandler<HTMLDivElement>) => void
// }

interface Dropdown {
  notification: boolean;
  user: boolean;
}

const Header = (props: Props) => {
  // Dropdown Toggler
  const [dropdown, setDropdown] = useState<Dropdown>({
    notification: false,
    user: false,
  });

  // Dropdown handler
  const dropdownHandler = (
    e: string
  ): React.MouseEventHandler<HTMLDivElement> | void => {
    setDropdown((preState: Dropdown) => {
      return e === "notification"
        ? { notification: !preState.notification, user: false }
        : { notification: false, user: !preState.user };
    });
  };

  return (
    <div className="Container">
      <div className="Navbar">
        <Link to="/">
          <div className="Logo">
            <img src={logo} alt="" />
          </div>
        </Link>
        <div className="Searchbar">
          <input type="text" placeholder="🔍 Search" />
        </div>
        <div className="Icons">
          <Link to="/">
            <div className="Icon">
              <HomeOutlinedIcon />
              {/* <HomeIcon /> */}
            </div>
          </Link>
          <div className="Icon">
            <MessageOutlinedIcon />
            {/* <MessageIcon /> */}
          </div>
          <div className="Icon">
            <ExploreOutlinedIcon />
            {/* <ExploreIcon /> */}
          </div>
          <div className="Icon" onClick={() => dropdownHandler("notification")}>
            {dropdown.notification ? (
              <FavoriteIcon />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
          </div>
          {dropdown.notification ? (
            <div className="Options Notification">
              <div className="Option">
                <div className="Image">
                  <img
                    src="https://www.amazingdotdp.me/To-do-list/logo-final.png"
                    alt=""
                  />
                </div>
                <div className="Message">DEF followed you back</div>
                <div className="Button">
                  <button>Follow</button>
                </div>
              </div>
              <div className="Option">
                <div className="Image">
                  <img
                    src="https://www.amazingdotdp.me/To-do-list/logo-final.png"
                    alt=""
                  />
                </div>
                <div className="Message">DEF followed you back</div>
                <div className="Button">
                  <button>Follow</button>
                </div>
              </div>
              <div className="Option">
                <div className="Image">
                  <img
                    src="https://www.amazingdotdp.me/To-do-list/logo-final.png"
                    alt=""
                  />
                </div>
                <div className="Message">DEF followed you back</div>
                <div className="Button">
                  <button>Follow</button>
                </div>
              </div>
              <div className="Option">
                <div className="Image">
                  <img
                    src="https://www.amazingdotdp.me/To-do-list/logo-final.png"
                    alt=""
                  />
                </div>
                <div className="Message">DEF followed you back</div>
                <div className="Button">
                  <button>Follow</button>
                </div>
              </div>
              <div className="Option">
                <div className="Image">
                  <img
                    src="https://www.amazingdotdp.me/To-do-list/logo-final.png"
                    alt=""
                  />
                </div>
                <div className="Message">DEF followed you back</div>
                <div className="Button">
                  <button>Follow</button>
                </div>
              </div>
            </div>
          ) : null}
          <div className="Icon" onClick={() => dropdownHandler("user")}>
            {dropdown.user ? (
              <AccountCircleIcon />
            ) : (
              <AccountCircleOutlinedIcon />
            )}
          </div>
          {dropdown.user ? (
            <div className="Options User">
              <div className="Option Profile">Profile</div>
              <div className="Option Saved">Saved</div>
              <div className="Option Setting">Settings</div>
              <div className="Option Switch">Switch Account</div>
              <hr />
              <div className="Option logout">Log out</div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
