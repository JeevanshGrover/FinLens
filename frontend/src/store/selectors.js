export const selectTransactions = (state) => state.transactions.transactions

export const selectTotalIncome = (state) =>
  state.transactions.transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)

export const selectTotalExpenses = (state) =>
  state.transactions.transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)

export const selectBalance = (state) => {
  const income = selectTotalIncome(state)
  const expenses = selectTotalExpenses(state)
  return income - expenses
}