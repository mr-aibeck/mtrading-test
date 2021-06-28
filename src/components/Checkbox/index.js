import React from 'react';
import PropTypes from 'prop-types'
import './index.sass'

const Checkbox =({
  className,
  type,
  id,
  onChange,
  checked,
  errorsType,
  placeholder,
  withLabel,
  children,
}) => {
  return (
    <div className={`checkbox ${className ? className : ""}`}>
      <div
        className={`checkbox__box ${errorsType ? "checkbox__box_is-error": ""}`}
      >
        <input
          className="checkbox__control"
          type="checkbox"
          id={id}
          onChange={onChange}
          checked={checked}
        />
        <label
          className="checkbox__input"
          htmlFor="checkbox"
        ></label>
        <div className="checkbox__marker"></div>
      </div>

      {withLabel &&
        <label
          className="checkbox__label"
          htmlFor="checkbox"
        >
          {children}
        </label>
      }

      {errorsType && (
        <span className="checkbox__error-label">{errorsType}</span>
      )}
    </div>
  )
}

Checkbox.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.any,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  errorsType: PropTypes.string,
  withLabel: PropTypes.bool,
}

export default Checkbox
