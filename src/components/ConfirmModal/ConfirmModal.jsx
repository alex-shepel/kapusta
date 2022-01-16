// import PropTypes from 'prop-types';
import s from './ConfirmModal.module.css';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';
import ButtonSecondary from '../../components/Buttons/ButtonSecondary';
import { ReactComponent as CloseIcon } from '../../images/close.svg';

function ConfirmModal({ question = 'Вы уверенны?' }) {
  console.log(CloseIcon, 'CloseIcon');
  return (
    <div className={s.container}>
      <CloseIcon className={s.icon} />
      <p className={s.title}>{question}</p>
      <div className={s.buttonWrapper}>
        <ButtonPrimary title="Да" />
        <ButtonSecondary title="Нет" />
      </div>
    </div>
  );
}

// ConfirmModal.propTypes = {};

export default ConfirmModal;
