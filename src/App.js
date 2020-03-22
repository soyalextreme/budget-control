import React, { useState, useEffect } from "react";
import Question from "./componets/Question";
import Form from "./componets/Form";
import List from "./componets/List";
import BudgetControl from "./componets/BudgetControl";

function App() {
  //? state
  const [budget, setBudget] = useState(0);
  const [diference, setDiference] = useState(0);
  const [question, setQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [savingmode, setSavingMode] = useState(false);

  useEffect(() => {
    const diferenceBudget = diference - expense.amount;

    if (savingmode && diferenceBudget > 0) {
      setExpenses([...expenses, expense]);
      setSavingMode(false);

      //diference and updating
      setDiference(diferenceBudget);
    } else if (savingmode && diferenceBudget < 0) {
      alert("Presupuesto excedido");
    }
  }, [expense, savingmode, diference, expenses]);

  return (
    <div className="container">
      <header>
        <h1>Budget Calculator</h1>
        <div className="contenido-principal contenido">
          {question ? (
            <Question
              setDiference={setDiference}
              setBudget={setBudget}
              setQuestion={setQuestion}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form setExpense={setExpense} setSavingMode={setSavingMode} />
              </div>
              <div className="one-half column">
                <List expenses={expenses} />
                <BudgetControl
                  budget={parseInt(budget)}
                  diference={parseInt(diference)}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
