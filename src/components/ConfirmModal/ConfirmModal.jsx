// import PropTypes from 'prop-types';
import s from './ConfirmModal.module.css';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';
import ButtonSecondary from '../../components/Buttons/ButtonSecondary';
import { ReactComponent as CloseIcon } from '../../images/close.svg';

function ConfirmModal(props) {
  console.log(CloseIcon, 'CloseIcon');
  return (
    <div className={s.container}>
      <CloseIcon />
      {/* <svg
        className="icon-plus"
        width={this.props.width}
        height={this.props.height}
        fill={this.props.fill}
        stroke={this.props.stroke}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 6.93 6.93"
      >
        <path
          stroke-linecap="round"
          stroke-miterlimit="10"
          strokeWidth="1.1"
          d="M3.47.55v5.83M6.38 3.47H.55"
        />
      </svg> */}
      <p className={s.title}>Вы уверены?</p>
      <div className={s.buttonWrapper}>
        <ButtonPrimary title="Да" />
        <ButtonSecondary title="Нет" />
      </div>
    </div>
  );
}

// ConfirmModal.propTypes = {};

export default ConfirmModal;
