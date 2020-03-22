import React, { useState } from "react";
import ErrorMsg from "./ErrorMsg";
import shortid from "shortid";
import PropTypes from "prop-types";

const Form = ({ setExpense, setSavingMode }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);

  // handle add expense
  const handleExpenses = e => {
    e.preventDefault();

    /// validar\
    if (amount <= 0 || isNaN(amount) || name.trim() === "") {
      setError(true);
      return;
    }

    setError(false);

    // construir gasto

    const expense = {
      name,
      amount,
      id: shortid.generate()
    };

    // pasar al componente principal
    setSavingMode(true);
    setExpense(expense);

    //resetear el form
    setName("");
    setAmount(0);
  };

  return (
    <>
      <form onSubmit={handleExpenses}>
        <h2>Add your expenses</h2>
        {error ? <ErrorMsg>Ups! Expense invalid</ErrorMsg> : null}
        <div className="campo">
          <label>Name of the expense</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="example: FOOD"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <label>Amount</label>
          <input
            type="number"
            className="u-full-width"
            placeholder="example: $300"
            value={amount}
            onChange={e => setAmount(parseInt(e.target.value, 10))}
          />
          <input
            type="submit"
            className="button-primary u-full-width"
            value="agregar gasto"
          />
        </div>
      </form>
    </>
  );
};

Form.propTypes = {
  setExpense: PropTypes.func.isRequired,
  setSavingMode: PropTypes.func.isRequired
};

export default Form;
