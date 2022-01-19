import s from './Background.module.css';
import BackgroundImageAuthPageTopPosition from 'components/BackgroundImageAuthPage/BackgroundImageAuthPageTopPosition';
import BackgroundImageAuthPageBotPosition from 'components/BackgroundImageAuthPage/BackgroundImageAuthPageBotPosition';
import BackgroundImageDayReportBotPosition from 'components/BackgroundImageDayReport/BackgroundImageDayReportBotPosition';
import { useLocation } from 'react-router-dom';

const Background = () => {
  const loc = useLocation();
  console.log(loc.pathname);
  return (
    <>
      <div className={s.background}>
        {loc.pathname === '/' && <BackgroundImageAuthPageTopPosition />}
      </div>
      {loc.pathname === '/' && <BackgroundImageAuthPageBotPosition />}
      {loc.pathname === '/day-report' && (
        <BackgroundImageDayReportBotPosition />
      )}
    </>
  );
};

export default Background;
