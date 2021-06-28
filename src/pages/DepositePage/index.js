import React, { useEffect, useState } from 'react'
import { withRouter, useHistory } from "react-router-dom"
import Select from '../../components/Select'
import Input from '../../components/Input'
import Checkbox from '../../components/Checkbox'
import Button from '../../components/Button'
import Link from '../../components/Link'
import useFormFields from '../../hooks/useFormFields'
import useDidMountEffect from '../../hooks/useDidMountEffect'
import { validateFields, validateSecondFields } from '../../FormValidationRules';
import './index.sass'
import wireTransfer from '../../images/wire-transfer.svg'
import faspay from '../../images/faspay.svg'
import bonus from '../../images/bonus.svg'

function DepositPage() {
  const [cleared, setCleared] = useState(false)
  const [disabled, setDisabled] = useState(true)

  const {
    formFields,
    createChangeHandler,
    createToggleHandler,
    createCheckedHandler,
    errors,
    setErrors
  } = useFormFields({ id: "1" })

  const clearForm = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );

    setCleared(true)
  }

  useDidMountEffect(() => {
    const clearState = {}
    if (cleared) {
      setErrors({ ...clearState })
    } else !disabled && setErrors(validateFields(formFields));

    const isEmpty = Object.values(formFields).some(x => x === null || x === '' || x === false)
    const fieldsLength = formFields.id === "1" ? 7 : 5
    const isAllFields = Object.keys(formFields).length === fieldsLength

    if (isAllFields && !isEmpty) {
      setDisabled(false)
    }

    if (isEmpty) {
      setDisabled(true)
      setErrors(validateSecondFields(formFields))
    }
  }, [formFields, setErrors, validateFields, validateSecondFields, setDisabled])

  let history = useHistory()

  const submitClick = () => {
    history.push({
      pathname: "/success",
      state: { amount: formFields.amount }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    formFields.id === "1" ? setErrors(validateFields(formFields)) : setErrors(validateSecondFields(formFields))

    let formData = new FormData();
    let keys = Object.getOwnPropertyNames(formFields)

    for (let item of formData.keys()) {
      formData.delete(item)
    }

    keys.forEach((item) => {
      formData.append("wallet", selectData.wallet.join())
      formData.append(`${item}`, formFields[item])
    })

    const formObject = {}

    formData.forEach(function(value, key) {
      formObject[key] = value
    })

    console.log(formObject, 'RESULT OBJECT')

    submitClick()
  };

  const options = [
    { currency: "USD", amount: "130,213.00" },
    { currency: "AUD", amount: "130,213.00" },
    { currency: "EUR", amount: "130,213.00" },
    { currency: "AUD", amount: "130,213.00" },
    { currency: "EUR", amount: "130,213.00" },
    { currency: "AUD", amount: "130,213.00" },
  ]

  let optionTemplate = options.map((item) => (
    [item.currency, item.amount]
  ));

  const [selectData, setSelectData] = useState({ wallet: optionTemplate[0]})
  const selectCallback = (wallet) => {
    setSelectData({ wallet })
  }

  const detailedForm = (
    <>
      <label className="form__label" htmlFor="wallet">WALLET</label>
      <Select
        id="wallet"
        options={optionTemplate}
        onChange={selectCallback}
      />

      <div className="form__field-item">
        <label className="form__label" htmlFor="amount">AMOUNT</label>
        <Input
          id="amount"
          type="text"
          placeholder="0"
          onChange={createChangeHandler("amount")}
          value={Number(formFields.amount) || 0}
          errorsType={errors.amount}
        />
        <ul className="form__field-calc">
          <li>
            Fee
            <span className="form__field-calc__result">
              {(Number(formFields.amount) || 0)  / 10} USD
            </span>
          </li>

          <li>
            Total
            <span className="form__field-calc__result">
              1,200.54 USD
            </span>
          </li>

          <li>
            Remaining balance
            <span className="form__field-calc__result">
              1,200.54 USD
            </span>
          </li>
        </ul>
      </div>

      <label className="form__label" htmlFor="iban">IBAN / BANK ACCOUNT</label>
      <Input
        id="iban"
        type="text"
        placeholder="Your bank IBAN"
        onChange={createChangeHandler("iban")}
        value={formFields.iban || ''}
        errorsType={errors.iban}
      />

      <div className="form__field-item">
        <label className="form__label" htmlFor="bank">BANK NAME</label>
        <Input
          id="bank"
          type="text"
          placeholder="Full bank name"
          onChange={createChangeHandler("bankName")}
          value={formFields.bankName || ''}
          errorsType={errors.bankName}
        />
        <span className="form__field-item__note">?</span>
      </div>

      <label className="form__label" htmlFor="address">BANK ADDRESS</label>
      <Input
        id="address"
        type="text"
        placeholder="City, street"
        onChange={createChangeHandler("bankAddress")}
        value={formFields.bankAddress || ''}
        errorsType={errors.bankAddress}
      />

      <label className="form__label" htmlFor="swift-code">
        BENEFECIARY'S BANK SWIFT CODE
      </label>
      <Input
        id="swift-code"
        type="text"
        placeholder="SABRRUMMAC1"
        onChange={createChangeHandler("swiftCode")}
        value={formFields.swiftCode || ''}
        errorsType={errors.swiftCode}
      />
    </>
  )

  const smallForm = (
    <>
      <label className="form__label" htmlFor="wallet">WALLET</label>
      <Select
        id="wallet"
        options={optionTemplate}
        onChange={selectCallback}
      />

      <div className="form__field-item">
        <label className="form__label" htmlFor="amount">AMOUNT</label>
        <Input
          id="amount"
          type="text"
          placeholder="0"
          value={Number(formFields.amount) || 0}
          onChange={createChangeHandler("amount")}
          errorsType={errors.amount}
        />
        <ul className="form__field-calc">
          <li>
            Fee
            <span className="form__field-calc__result">
              {(Number(formFields.amount) || 0)  / 10} USD
            </span>
          </li>

          <li>
            Total
            <span className="form__field-calc__result">
              1,200.54 USD
            </span>
          </li>

          <li>
            Remaining balance
            <span className="form__field-calc__result">
              1,200.54 USD
            </span>
          </li>
        </ul>
      </div>

      <label className="form__label" htmlFor="email">EMAIL</label>
      <Input
        id="email"
        type="email"
        value={formFields.email || ''}
        placeholder="EMAIL"
        onChange={createChangeHandler("email")}
        errorsType={errors.email}
      />

      <label className="form__label" htmlFor="rounting-number">ROUNTING NUMBER</label>
      <Input
        id="rounting-number"
        type="text"
        value={formFields.rountingNumber || ''}
        placeholder="ROUNTING NUMBER"
        onChange={createChangeHandler("rountingNumber")}
        errorsType={errors.rountingNumber}
      />
    </>
  )

  return (
    <>
      <div className="title">Deposit</div>

      <form className="form" onSubmit={handleSubmit} noValidate>
        <aside className="form__methods">
          <div className="form__label form__label_wide">PAYMENT METHOD</div>

          <label
            className={`form__methods-item ${formFields.id === "1" ? "form__methods-item_is-selected" : ""}`}
            htmlFor="1"
          >
            <img src={wireTransfer} alt="wire-transfer" />
            <Input
              className="form__methods-radio"
              type="radio"
              id="1"
              checked={formFields.id === "1"}
              onChange={createToggleHandler("id", clearForm)}
            />
          </label>

          <label
            className={`form__methods-item ${formFields.id === "2" ? "form__methods-item_is-selected" : ""}`}
            htmlFor="2"
          >
            <img src={faspay} alt="faspay" />
            <Input
              className="form__methods-radio"
              type="radio"
              id="2"
              checked={formFields.id === "2"}
              onChange={createToggleHandler("id", clearForm)}
            />
          </label>
        </aside>

        <section className="form__fields">

          {formFields.id === "1" ? detailedForm : smallForm}

          <Button className="form__bonus-button" state="isSecondary" type="button">
            <img src={bonus} alt="bonus" className="form__bonus-button__icon" />
            RECIEVE BONUS
          </Button>

          <Checkbox
            className="form__policy"
            id="checkbox"
            errorsType={errors.agreement}
            onChange={createCheckedHandler("agreement")}
            checked={formFields.agreement || false}
            withLabel
          >
            I accept
            <Link href="https://mtrading.com/terms/privacy-policy" className="checkbox__link">
              the Mterms and conditions, terms of business
            </Link>
            and
            <Link href="https://mtrading.com/terms/privacy-policy" className="link checkbox__link">
              privacy policy
            </Link>
          </Checkbox>

          <div className="form__button-wrap">
            <Button
              state="isPrimary"
              isWide
              disabled={disabled}
              type="submit"
            >
              WITHDRAW
            </Button>

            <Button className="form__note-button" isNote>?</Button>
          </div>
        </section>
      </form>
    </>
  )
}

export default withRouter(DepositPage)
