import React from 'react';

const InputText = (props) => {
  return (
    <React.Fragment>
      <div className="container">
          <label htmlFor={props.name}>{props.label}</label>
          <input className="form-control" 
            type="text"
            name={props.name}
            value={props.value}
            onChange={evt => props.onChange(evt, props.name)}
            placeholder={props.label}
          />
        </div>
    </React.Fragment>
)
}
 
export default InputText;