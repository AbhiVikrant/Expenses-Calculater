import React from "react";

const FormGroup = ({
  className,
  ID,
  Label,
  Type,
  inputClassName,
  Placeholder,
  Value,
  onChange
}) => {
  return (
    <div
      style={{
        borderBlockStyle: "hidden",
        borderRadius: "0px",
        backgroundColor: "#6200ee"
      }}
      className={"form-group" + (className ? " " + className : "")}
    >
      <label htmlFor={ID}>{Label}</label>
      <input
        type={Type}
        className={
          "form-control" + (inputClassName ? " " + inputClassName : "")
        }
        id={ID}
        name={ID}
        placeholder={Placeholder}
        value={Value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormGroup;
