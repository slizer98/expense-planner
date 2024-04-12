import { categories } from "../data/categories";

export default function ExpenseForm() {
  return (
    <form className="space-y-5">
      <legend className="uppercase text-center text-2xl font-black border-b-4 border-green-600 py-2">Nuevo Gasto</legend>
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
        />
      </div>

      <div className="flex flex-col gap-2">
        <label 
          htmlFor="expenseAmount" 
          className="text-xl"
        >
          Cantidad:
        </label>
        <input 
          type="number" 
          id="expenseAmount" 
          placeholder="Agrega la cantidad del gasto: ej. 300" 
          className="bg-slate-100 p-2 outline-green-600"
          name="expenseAmount"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label 
          htmlFor="expenseAmount" 
          className="text-xl"
        >
          Categoria:
        </label>
        <select 
          id="category"  
          className="bg-slate-100 p-2 outline-green-600"
          name="category"
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

      <input 
        type="submit" 
        className="bg-green-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg" 
        value="Registrar Gasto"
      />
      
    </form>
  )
}
