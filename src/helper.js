// verifi=yin color for the amount
export const checkBudget = (budget, diference) => {
  let clase;
  if (budget / 4 > diference) {
    clase = "alert alert-danger";
  } else if (budget / 2 > diference) {
    clase = "alert alert-warning";
  } else {
    clase = "alert alert-success";
  }

  return clase;
};
