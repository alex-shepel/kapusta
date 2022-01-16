// import PropTypes from 'prop-types';
import s from './ConfirmModal.module.css';
import Button from 'components/Button/Button';
import { ReactComponent as CloseIcon } from 'images/close.svg';

function ConfirmModal({ question = 'Вы уверенны?' }) {
  return (
    <div className={s.container}>
      <CloseIcon className={s.icon} />
      <p className={s.title}>{question}</p>
      <div className={s.buttonWrapper}>
        <Button title="Да" type="active" />
        <Button title="Нет" type="default" />
      </div>
    </div>
  );
}

// ConfirmModal.propTypes = {};

export default ConfirmModal;
