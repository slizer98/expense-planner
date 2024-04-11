import { useReducer, createContext, Dispatch, ReactNode } from "react"
import { BudgetActions, BudgetState, budgerReducer, initialState } from "../reducers/budget-reducer"

type BudgetContextProps = {
  state: BudgetState
  dispatch: Dispatch<BudgetActions>
}

type BudgetPrividerProps = {
  children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvider = ({children} : BudgetPrividerProps) => {

  const [state, dispatch] = useReducer(budgerReducer, initialState)

  return (
    <BudgetContext.Provider
      value={ { state, dispatch } }
    > 
      {children}
    </BudgetContext.Provider>
  )
}
