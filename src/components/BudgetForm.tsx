import { FormEvent, useMemo, useState } from "react"
import { useBudget } from "../hooks/useBudget"


export default function BudgetForm() {

  const [budget, setBudget] = useState(0)
  const { dispatch } = useBudget()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.valueAsNumber)
  }

  const isValid = useMemo(() => {
    return isNaN(budget) || budget <= 0
  }, [budget])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({type: 'add-budget', payload: {budget}})
  }
  
  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-5">
        <label htmlFor="budget" className="text-4xl text-green-600 font-bold text-center">
          Definir Presupuesto
        </label>
        <input 
          id="budget"
          type="number" 
          className="w-full bg-white border border-gray-200 p-2" 
          placeholder="Define tu presupuesto"
          name="budget"
          value={budget}
          onChange={handleChange}
        />
      </div>
      <input 
        type="submit" 
        value='Definir Presupuesto'
        className="bg-green-600 hover:bg-green-700 cursor-pointer w-full text-white uppercase font-bold rounded-md p-2 disabled:opacity-30 disabled:cursor-not-allowed"
        disabled={isValid}
      />
    </form>
  )
}
