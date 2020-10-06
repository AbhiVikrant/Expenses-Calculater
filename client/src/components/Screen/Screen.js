import React from "react";
import FormGroup from "../Form/FormGroup";
const Screen = ({ onChange, onSubmit }) => {
  return (
    <div className="screen">
      <form onChange={onChange} onSubmit={onSubmit}>
        <FormGroup Type="text" Placeholder="   Title " />
        <FormGroup Type="number" Placeholder="   Amount " />
        <FormGroup Type="note" Placeholder="   Note " />
        <FormGroup Type="date" Placeholder="   Date " />
      </form>
      <button type="button" className="btn btn-primary">
        + ADD EXPENSES
      </button>
    </div>
  );
};

export default Screen;
