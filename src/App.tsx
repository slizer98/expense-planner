
import BudgetForm from "./components/BudgetForm"

function App() {

  
  return (
    <>
      <header className="bg-green-600 py-8 max-h-72">
        <h1 className="uppercase text-center font-bold text-white text-4xl">
          Planificador de gastos
        </h1>
      </header>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        <BudgetForm />
      </div>
    </>
  )
}

export default App
