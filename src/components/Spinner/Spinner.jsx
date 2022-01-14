import { Oval } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import s from './Spinner.module.css';

const Spinner = ({ size = 18, color = '#000' }) => {
  return (
    <div className={s.spinner}>
      <Oval color={color} height={`${size}`} width={`${size}`} />
    </div>
  );
};

Spinner.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Spinner;
