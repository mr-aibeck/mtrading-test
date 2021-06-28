import React from 'react';
import PropTypes from 'prop-types'
import './index.sass'

const Input =({
  className,
  type,
  id,
  onChange,
  checked,
  value,
  errorsType,
  placeholder,
}) => {
  return (
    <>
      <input
        className={`${(type === "text" || type === "email") ? "input" : ""} ${errorsType ? "input_is-error": ""} ${className ? className : ""}`}
        type={type}
        id={id}
        onChange={onChange}
        checked={checked}
        placeholder={placeholder}
      />

      {errorsType && (
        <span className="input__error-label">{errorsType}</span>
      )}
    </>
  )
}

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  errorsType: PropTypes.string,
  value: PropTypes.any,
  placeholder: PropTypes.string,
}

export default Input
