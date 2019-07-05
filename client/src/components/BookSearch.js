import React from "react";

export function Input(props) {
  return (
    <div className="form">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form">
      <textarea className="form-control" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} className="form-btn">
      {props.children}
    </button>
  );
}
