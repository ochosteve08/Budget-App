import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Title from "./Component/Title";
import Budget from "./Component/Budget";
import Remaining from "./Component/Remaining";
import ExpenseTotal from "./Component/ExpenseTotal";
import ExpenseList from "./Component/ExpenseList";
import AddExpense from "./Component/AddExpense";
import { AppProvider } from "./Context/AppContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <AppProvider>
      <div className="container mb-3">
        <div className="mt-3">
          <Title title={"My Budget Planner"} />
        </div>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
        <h1 className="mt-3">Expenses</h1>
        <div className="row  mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h1 className="mt-3">Add Expense</h1>
        <div className="row  mt-3">
          <AddExpense />
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
     
      />
    </AppProvider>
  );
}

export default App;
