export type BudgetActions = 
{type: 'add-budget', payload: {budget: number}}

export type BudgetState = {
  budget: number
}

export const initialState : BudgetState = {
  budget: 0
}

export const budgerReducer = (
  state: BudgetState = initialState,
  action: BudgetActions
) => {

  if(action.type === 'add-budget') {
    return {
      ...state,
      budget: action.payload.budget
    }
  }
  
  
  return state
}