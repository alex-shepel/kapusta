import Modal from '../../components/Modal/Modal';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ConfirmModal from '../../components/ConfirmModal';

const DayReportView = props => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onLogOut = () => {
    console.log('log out');
  };
  return (
    <div>
      DayReportView
      <Modal
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <ConfirmModal
          onClose={() => {
            setIsModalOpen(false);
          }}
          title="Вы уверены?"
          onConfirm={onLogOut}
        />
      </Modal>
    </div>
  );
};

DayReportView.propTypes = {};

export default DayReportView;
