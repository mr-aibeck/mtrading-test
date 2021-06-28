import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './index.sass'

const Button =({
  className,
  type,
  disabled,
  isWide,
  state,
  children,
  isNote,
}) => {

  const buttonClassnames = classNames({
    'button': true,
    'button_primary': state === 'isPrimary',
    'button_secondary': state === 'isSecondary',
    'button_wide': isWide,
    'button_note': isNote,
    [className]: className
  })

  return (
    <>
      <button
        className={buttonClassnames}
        disabled={disabled}
        type="submit"
      >
        {children}
      </button>
    </>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isWide: PropTypes.bool,
  state: PropTypes.string,
  children: PropTypes.any,
  isNote: PropTypes.bool,
}

export default Button
