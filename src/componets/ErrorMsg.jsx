import React from "react";

const ErrorMsg = props => (
  <>
    <p className="alert alert-danger error">{props.children}</p>
  </>
);

export default ErrorMsg;
