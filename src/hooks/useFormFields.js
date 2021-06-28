import { useState } from 'react'

const useFormFields = (initialValues) => {
  const [formFields, setFormFields] = useState(initialValues)
  const [errors, setErrors] = useState({});

  const createChangeHandler = (key) => (e) => {
    const value = e.target.value

    setFormFields((prevFields) => ({ ...prevFields, [key]: value }))
  }

  const createToggleHandler = (key, callback) => (e) => {
    const value = e.target.id

    callback()
    setFormFields(() => ({ ...initialValues, [key]: value }))
  }

  const createCheckedHandler = (key) => (e) => {
    const value = e.target.checked

    setFormFields((prevFields) => ({ ...prevFields, [key]: value }))
  }

  return { formFields, createChangeHandler, createToggleHandler, createCheckedHandler, errors, setErrors }
}

export default useFormFields
