const getIncomes = state => state.incomes;
const getExpenses = state => state.expenses;
const getMonthStatsIncomes = state => state.monthStatsIncomes;
const getMonthStatsExpenses = state => state.monthStatsExpenses;
const getIncomeCategories = state => state.categoriesIncome;
const getExpenseCategories = state => state.categoriesExpense;

const getIsIncomeAdding = state => state.isIncomeAdding;
const getIsIncomeLoading = state => state.isIncomeLoading;
const getIsExpenseAdding = state => state.isExpenseAdding;
const getIsExpenseLoading = state => state.isExpenseLoading;
const getAreCategoriesLoading = state => state.areCategoriesLoading;
const getIsRemoving = state => state.isRemoving;

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
};
