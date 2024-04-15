import { ChangeEvent, useState } from "react";
import { categories } from "../data/categories";
import DatePicker from "react-date-picker";
import 'react-calendar/dist/Calendar.css'
import 'react-date-picker/dist/DatePicker.css'
import { DraftExpense, Value } from "../types";
import ErrorMessage from "./ErrorMessage";
import { useBudget } from "../hooks/useBudget";

export default function ExpenseForm() {

  const [expense, setExpense] = useState<DraftExpense>({
    amount: 0,
    expenseName: '',
    category: '',
    date: new Date()
  })

  const [error, setError] = useState('')
  const { dispatch } = useBudget()

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const {name, value} = e.target
    const isAmountFiel = ['amount'].includes(name)
    setExpense({
      ...expense,
      [name]: isAmountFiel ? +value : value 
    })
    
  }

  const handleChangeDate = (value: Value) => {
    setExpense({...expense, date: value})
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(Object.values(expense).includes('')) {
      setError('Todos lo campos son obligatorios')
      setTimeout(() => {
        setError('')
      }, 3000);
      return
    }
    dispatch({type: 'add-expense', payload: { expense }})
  }
  
  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <legend className="uppercase text-center text-2xl font-black border-b-4 border-green-600 py-2">Nuevo Gasto</legend>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div className="flex flex-col gap-2">
        <label 
          htmlFor="expenseName" 
          className="text-xl"
        >
          Nombre Gasto:
        </label>
        <input 
          type="text" 
          id="expenseName" 
          placeholder="Agrega el nombre del gasto" 
          className="bg-slate-100 p-2 outline-green-600"
          name="expenseName"
          value={expense.expenseName}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label 
          htmlFor="amount" 
          className="text-xl"
        >
          Cantidad:
        </label>
        <input 
          type="number" 
          id="amount" 
          placeholder="Agrega la cantidad del gasto: ej. 300" 
          className="bg-slate-100 p-2 outline-green-600"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label 
          htmlFor="category" 
          className="text-xl"
        >
          Categoria:
        </label>
        <select 
          id="category"  
          className="bg-slate-100 p-2 outline-green-600"
          name="category"
          value={expense.category}
          onChange={handleChange}
        > 
          <option value="">-- Seleccione --</option>
          {categories.map(category => (
            <option 
              key={category.id}
              value={category.id}
            >{category.name}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label 
          htmlFor="date" 
          className="text-xl"
        >
          Fecha Gasto:
        </label>
        <DatePicker 
          className="bg-slate-100 p-2 border-0"
          value={expense.date}
          onChange={handleChangeDate}
        />
      </div>

      <input 
        type="submit" 
        className="bg-green-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg" 
        value="Registrar Gasto"
      />
      
    </form>
  )
}
