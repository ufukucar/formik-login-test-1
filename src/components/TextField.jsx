import React from 'react'
import { ErrorMessage, useField } from 'formik'

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className="mb-4">
      <label htmlFor={field.name}>{label}</label>
      <input className="form-control shadow-none" {...field} {...props} />
      <ErrorMessage name={field.name} component="div" className="error" />
    </div>
  )
}

export default TextField
