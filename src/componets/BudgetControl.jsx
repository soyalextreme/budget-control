import React from "react";
import { checkBudget } from "../helper";
import PropTypes from "prop-types";

const BudgetControl = ({ budget, diference }) => {
  return (
    <>
      <div className="alert alert-primary">Budget: ${budget}</div>
      <div className={checkBudget(budget, diference)}>Left: $ {diference}</div>
    </>
  );
};

BudgetControl.propTypes = {
  budget: PropTypes.number.isRequired,
  diference: PropTypes.number.isRequired
};

export default BudgetControl;
