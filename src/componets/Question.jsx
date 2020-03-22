import React, { useState } from "react";
import ErrorMsg from "./ErrorMsg";
import PropTypes from "prop-types";

const Question = ({ setBudget, setDiference, setQuestion }) => {
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);

  const handleInputAmount = e => {
    setAmount(e.target.value, 10);
  };

  const addBudget = e => {
    e.preventDefault();

    // validar
    if (amount <= 0 || isNaN(amount)) {
      setError(true);
      return;
    }

    //limpiar error
    setError(false);

    setBudget(amount);
    setDiference(amount);
    setQuestion(false);
    //resultado
  };

  return (
    <>
      {error ? <ErrorMsg>Ups! incorrect amount</ErrorMsg> : null}
      <h2>Tell me your budget</h2>
      <form onSubmit={addBudget}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Insert your budget"
          onChange={handleInputAmount}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Set budget"
        />
      </form>
    </>
  );
};

Question.propTypes = {
  setQuestion: PropTypes.func.isRequired,
  setDiference: PropTypes.func.isRequired,
  setBudget: PropTypes.func.isRequired
};

export default Question;
