import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global/';

/* auth */
const register = async credentials => (await axios.post('auth/register')).data;
const login = async credentials => (await axios.post('auth/login')).data;
const logout = async credentials => (await axios.post('auth/logout')).data;
const refresh = async credentials => (await axios.post('auth/refresh')).data;
const googleAuth = async credentials => (await axios.get('auth/google')).data;

/* transaction */
const addIncome = async credentials =>
  (await axios.post('transaction/income')).data;
const getIncome = async credentials =>
  (await axios.post('transaction/income')).data;
const addExpense = async credentials =>
  (await axios.post('transaction/expense')).data;
const getExpense = async credentials =>
  (await axios.post('transaction/expense')).data;
const removeTransaction = async credentials =>
  (await axios.post('transaction/{transactionId}')).data;
const getIncomeCategories = async credentials =>
  (await axios.post('transaction/income-categories')).data;
const getExpenseCategories = async credentials =>
  (await axios.post('transaction/expense-categories')).data;
const getPeriodTransactions = async credentials =>
  (await axios.post('transaction/period-data')).data;

/* user */
const updateBalance = async credentials =>
  (await axios.post('user/balance')).data;
const getUserInfo = async credentials => (await axios.post('user')).data;

export {
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
