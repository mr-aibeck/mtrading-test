export function validateFields(values) {
  let errors = {}

  if (!values.amount && values.amount > 0) {
    errors.amount = "Incorrect amount"
  }

  if (!values.iban) {
    errors.iban = "IBAN is required"
  }

  if (!values.bankName) {
    errors.bankName = "Incorrect bank name"
  }

  if (!values.bankAddress) {
    errors.bankAddress = "Incorrect Bank address"
  }

  if (!values.swiftCode) {
    errors.swiftCode = "Incorrect Swift code"
  }

  if (!values.agreement) {
    errors.agreement = "Please accept our terms"
  }

  return errors
}

export function validateSecondFields(values) {
  let errors = {}

  if (!values.amount && values.amount > 0) {
    errors.amount = "Incorrect amount"
  }

  if (!values.email) {
    errors.email = "Email address is required"
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Incorrect email"
  }

  if (!values.rountingNumber) {
    errors.rountingNumber = "Incorrect rounting number"
  }

  if (!values.agreement) {
    errors.agreement = "Please accept our terms"
  }

  return errors
}
