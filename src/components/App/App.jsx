import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  refresh,
  getIsLoggedIn,
  getIsRefreshing,
  setTokens,
  logOut,
} from 'redux/auth';
import Routes from 'routes';
import Container from 'components/Container';
import Header from '../Header/Header';
import Spinner from 'components/Spinner';
import Modal from 'components/Modal/Modal';
import ConfirmModal from 'components/ConfirmModal';
import {
  closeModal,
  getDeleteId,
  getIsDeleteOpenModal,
  getIsLogoutOpenModal,
} from 'redux/modal';
import { removeTransaction } from 'redux/transaction';
import Background from 'components/Background';
import s from './App.module.css';
import { fetchUser } from 'redux/user';

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);
  const currentToken = useSelector(state => state?.auth?.accessToken);
  const deleteId = useSelector(getDeleteId);
  const isLogoutModalOpen = useSelector(getIsLogoutOpenModal);
  const isDeleteModalOpen = useSelector(getIsDeleteOpenModal);
  const isModalOpen = isLogoutModalOpen || isDeleteModalOpen;

  const onDelete = () => {
    dispatch(removeTransaction(deleteId));
  };

  const onLogOut = () => {
    dispatch(logOut());
  };

  const accessToken = new URLSearchParams(location.search).get('accessToken');
  const refreshToken = new URLSearchParams(location.search).get('refreshToken');
  const sid = new URLSearchParams(location.search).get('sid');

  useEffect(() => {
    if (!currentToken) {
      return;
    }
    dispatch(fetchUser(currentToken));
  }, [dispatch, currentToken]);

  useEffect(() => {
    if (isLoggedIn && !accessToken) {
      dispatch(refresh());
    }
  }, [isLoggedIn, dispatch, accessToken]);

  useEffect(() => {
    if (!accessToken) {
      return;
    }
    dispatch(setTokens({ accessToken, refreshToken, sid }));
    dispatch(fetchUser(accessToken));
  }, [accessToken, dispatch, refreshToken, sid]);

  return (
    <>
      <header>
        <Container>
          <Header />
        </Container>
      </header>
      <main className={s.app}>
        <Background />
        <Container>
          {isRefreshing ? <Spinner /> : <Routes isLoggedIn={isLoggedIn} />}
        </Container>
        {isModalOpen && (
          <Modal
            onClose={() => {
              dispatch(closeModal());
            }}
          >
            <ConfirmModal
              onClose={() => {
                dispatch(closeModal());
              }}
              question={
                isLogoutModalOpen
                  ? 'Вы действительно хотите выйти?'
                  : 'Вы уверены?'
              }
              onConfirm={() => (isLogoutModalOpen ? onLogOut() : onDelete())}
            />
          </Modal>
        )}
      </main>
    </>
  );
};

export default App;
