import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logo from 'images/logo.svg';
import logoutPic from 'images/logout-mobile.svg';
import { getIsLoggedIn } from 'redux/auth';
import s from './Header.module.css';
import { openLogoutModal } from 'redux/modal';

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();

  const handleResizeWindow = () => setWidth(window.innerWidth);
  const isLoggedIn = useSelector(getIsLoggedIn);
  useEffect(() => {
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  const userEmail = useSelector(state => state?.user?.email);
  const userLogo = userEmail ? userEmail.slice(0, 1) : 'U';

  const breakPointTablet = 768;
  return (
    <div className={s.container}>
      <div className={s.header__wrap}>
        <img className={s.header__logo} src={logo} alt={'logo'} />
        {isLoggedIn && (
          <div className={s.header__nav}>
            <div className={s.userLogo__circle}>
              <div className={s.userLogo}>{userLogo}</div>
            </div>
            {width < breakPointTablet ? (
              <img
                className={s.logout__picture}
                onClick={() => dispatch(openLogoutModal())}
                src={logoutPic}
                alt={'logout'}
              />
            ) : (
              <>
                <div className={s.user__name}>{userEmail}</div>
                <div className={s.line}></div>
                <div
                  className={s.logout}
                  onClick={() => dispatch(openLogoutModal())}
                >
                  Выйти
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
