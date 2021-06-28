import React, { useState } from "react"
import PropTypes from 'prop-types'
import './index.sass'

const Select = (props) => {
  const {
    options,
    onChange,
  } = props

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const toggling = () => setIsOpen(!isOpen);

  const handleChange = (selectedValue) => () => {
    onChange(selectedValue)
    setSelectedOption(selectedValue)
    setIsOpen(false)
  };

  return (
    <div className="select">
      <div
        className={`select__title ${isOpen ? 'select__title_is-open' : ''}`}
        onClick={toggling}
      >
        WALLET {selectedOption}
      </div>

      {isOpen && (
        <ul className="select__list">
          {options.map(option => (
            <li className="select__list-item" onClick={handleChange(option)} key={Math.random()}>
              <span className="select__list-currency">{option[0]}</span>
              <span className="select__list-amount">{option[1]}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
}

export default Select
