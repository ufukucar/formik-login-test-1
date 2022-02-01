import React from 'react'
import { Formik, Form } from 'formik'
import TextField from './TextField'
import * as Yup from 'yup'

const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Adınız en fazla 15 karakter olabilir')
      .required('Bu alan gereklidir'),
    lastName: Yup.string()
      .max(15, 'Soyadınız en fazla 15 karakter olabilir')
      .required('Bu alan gereklidir'),
    email: Yup.string()
      .email('Lütfen geçerli bir email adresi giriniz')
      .required('Email adresi zorunludur'),
    password: Yup.string()
      .min(3, 'Şifreniz en az 3 karakterden oluşmalıdır')
      .required('Lütfen bir şifre giriniz'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Şifreler eşleşmiyor')
      .required('Şifre doğrulama gereklidir'),
  })

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold display-4">Giriş Yap</h1>
          {/* {console.log(formik.values)} */}
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="Last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="text" />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="text"
            />

            <button className="btn btn-dark mt-3" type="submit">
              Register
            </button>

            <button className="btn btn-danger mt-3 ml-3" type="reset">
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default Signup
