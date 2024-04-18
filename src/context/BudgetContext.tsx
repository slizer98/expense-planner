import { useReducer, createContext, Dispatch, ReactNode, useMemo } from "react"
import { BudgetActions, BudgetState, budgerReducer, initialState } from "../reducers/budget-reducer"
import { Expense } from "../types"

type BudgetContextProps = {
  state: BudgetState
  dispatch: Dispatch<BudgetActions>
  totalExpenses: number
  remainingBudget: number
}

type BudgetPrividerProps = {
  children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvider = ({children} : BudgetPrividerProps) => {

  const [state, dispatch] = useReducer(budgerReducer, initialState)

  const totalExpenses = useMemo(() => state.expenses.reduce((total: number, expense: Expense) => expense.amount + total, 0), [state.expenses]);
  const remainingBudget = state.budget - totalExpenses;

  return (
    <BudgetContext.Provider
      value={ { 
        state, 
        dispatch,
        totalExpenses,
        remainingBudget

      } }
    > 
      {children}
    </BudgetContext.Provider>
  )
}
