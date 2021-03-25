import React from "react";

const Input = ({ placeholder, type, className, onChange, name, errorMsg }) => {
  console.log(errorMsg);
  return (
    <div>
      <input
        id="bb"
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
        className={`${className} ${
          errorMsg && errorMsg[name] ? "ring-2 ring-red-600" : ""
        }`}
      />
      <span className="text-xs text-red-600">
        {errorMsg && errorMsg[name] ? errorMsg[name] : null}
      </span>
    </div>
  );
};

export default Input;
