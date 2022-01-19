import s from './Background.module.css';
import BackgroundImageAuthPageTopPosition from 'components/BackgroundImageAuthPage/BackgroundImageAuthPageTopPosition';
import BackgroundImageAuthPageBotPosition from 'components/BackgroundImageAuthPage/BackgroundImageAuthPageBotPosition';
import { useRouteMatch, useLocation } from 'react-router-dom';

const Background = () => {
  // const match = useRouteMatch();
  const loc = useLocation();
  // console.log(match.url);
  console.log(loc.pathname);
  return (
    <>
      <div className={s.background}>
        {loc.pathname === '/' && <BackgroundImageAuthPageTopPosition />}
      </div>
      {loc.pathname === '/' && <BackgroundImageAuthPageBotPosition />}
    </>
  );
};

export default Background;
