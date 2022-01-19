const getIncomes = state => state.transaction.incomes;
const getExpenses = state => state.transaction.expenses;
const getMonthStatsIncomes = state => state.transaction.monthStatsIncomes;
const getMonthStatsExpenses = state => state.transaction.monthStatsExpenses;
const getIncomeCategories = state => state.transaction.categoriesIncome;
const getExpenseCategories = state => state.transaction.categoriesExpense;

const getIsIncomeAdding = state => state.transaction.isIncomeAdding;
const getIsIncomeLoading = state => state.transaction.isIncomeLoading;
const getIsExpenseAdding = state => state.transaction.isExpenseAdding;
const getIsExpenseLoading = state => state.transaction.isExpenseLoading;
const getAreCategoriesLoading = state => state.transaction.areCategoriesLoading;
const getIsRemoving = state => state.transaction.isRemoving;
const getIncomesDataByCategoriesFromState = state =>
  state.transaction.dataByCategories.incomes;
const getExpenseDataByCategoriesFromState = state =>
  state.transaction.dataByCategories.incomes;

export {
  getIncomes,
  getExpenses,
  getMonthStatsIncomes,
  getMonthStatsExpenses,
  getIncomeCategories,
  getExpenseCategories,
  getIsIncomeAdding,
  getIsIncomeLoading,
  getIsExpenseAdding,
  getIsExpenseLoading,
  getAreCategoriesLoading,
  getIsRemoving,
  getIncomesDataByCategoriesFromState,
  getExpenseDataByCategoriesFromState,
};
