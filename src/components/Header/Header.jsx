import PropTypes from 'prop-types';
import { useState, useEffect } from 'react'
import {useSelector} from "react-redux"
import logo from "images/logo.svg"
import logout from "images/logout-mobile.svg"
import {getIsLoggedIn} from "redux/auth"
import s from "./Header.module.css"



const Header = () => {
  const [width, setWidth] = useState(window.innerWidth)

const handleResizeWindow = () => setWidth(window.innerWidth);
const isLoggedIn = useSelector(getIsLoggedIn)
  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

const breakPointTablet = 768;
  return (
    <div className={s.container}>
      <div className={s.header__wrap}>
        <img className={s.header__logo} src={logo} alt={"logo"} />
        {isLoggedIn && (
          <div className={s.header__nav}>
            <div className={s.userLogo__circle}>
              <div className={s.userLogo}>U</div>
            </div>
            {width < breakPointTablet ? (<img src={logout} alt= {"logout" }/>) : (<><div>User name</div><div>Выйти</ div></>)}
        </div>)}
      </div>
    </div>)
};

Header.propTypes = {
  
};

export default Header;
