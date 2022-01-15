import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global/';

const setToken = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

/* auth */
const googleAuth = async credentials => await axios.get('auth/google');
const register = async credentials =>
  await axios.post('auth/register', credentials);

const login = async credentials => await axios.post('auth/login', credentials);
const refresh = async credentials =>
  await axios.post('auth/refresh', credentials);

const logout = async credentials => await axios.post('auth/logout');

/* transaction */
const addIncome = async credentials => await axios.post('transaction/income');
const getIncome = async credentials => await axios.post('transaction/income');
const addExpense = async credentials => await axios.post('transaction/expense');
const getExpense = async credentials => await axios.post('transaction/expense');
const removeTransaction = async credentials =>
  await axios.post('transaction/{transactionId}');
const getIncomeCategories = async credentials =>
  await axios.post('transaction/income-categories');
const getExpenseCategories = async credentials =>
  await axios.post('transaction/expense-categories');
const getPeriodTransactions = async credentials =>
  await axios.post('transaction/period-data');

/* user */
const updateBalance = async credentials => await axios.post('user/balance');
const getUserInfo = async credentials => await axios.post('user');

export {
  setToken,
  /* auth */
  register,
  login,
  logout,
  refresh,
  googleAuth,
  /* transaction */
  addIncome,
  getIncome,
  addExpense,
  getExpense,
  removeTransaction,
  getIncomeCategories,
  getExpenseCategories,
  getPeriodTransactions,
  /* user */
  updateBalance,
  getUserInfo,
};
