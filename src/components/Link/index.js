import React from 'react';
import PropTypes from 'prop-types'
import './index.sass'

const Link =({
  className,
  href,
  children
}) => {
  return (
    <a
      className={`link ${className ? className : ''}`}
      href={href}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.any.isRequired,
}

export default Link
