import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogoutOpenModal: false,
  isDeleteOpenModal: false,
};

const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    closeModal: state => {
      state.isLogoutOpenModal = false;
      state.isDeleteOpenModal = false;
    },
    openLogoutModal: state => {
      state.isLogoutOpenModal = true;
    },
    openDeleteModal: state => {
      state.isDeleteOpenModal = true;
    },
  },
});

export const { openLogoutModal, openDeleteModal, closeModal } = slice.actions;
export const { reducer: modalReducer } = slice;
