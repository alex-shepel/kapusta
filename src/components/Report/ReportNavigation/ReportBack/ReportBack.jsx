import WestIcon from '@mui/icons-material/West';
import { useState } from 'react';
import s from './ReportBack.module.css';
import { Link } from 'react-router-dom';

const ReportBack = () => {
  const [lWidth, setLWidth] = useState(window.innerWidth);

  window.addEventListener(
    `resize`,
    event => {
      setLWidth(event.target.innerWidth);
    },
    false,
  );

  return (
    <div className={s.reportBack}>
      <Link to={'/day-report'} className={s.goToReport} style={{}}>
        <WestIcon
          className={s.westIcon}
          style={{ heigth: '24px', fill: '#FF751D' }}
        />
        {lWidth > 767 ? (
          <span className={s.backTitle}>Вернуться на главную</span>
        ) : (
          ''
        )}
      </Link>
    </div>
  );
};

export default ReportBack;
