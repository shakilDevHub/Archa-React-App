import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: ''
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(2, 'Must be 15 characters or more')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          . required('Required'),
        message: Yup.string()
          .min(10, 'Must be 10 character or more')
          .required('Required')
      })}
      onSubmit={(values)=>{
        console.log(values);
      }}>
      <Form>
        <div className="inputWrapper">
          <Field name='name' type='text' placeholder='Name'></Field>
          <span className='errorMsg'>
            <ErrorMessage name='name' />
          </span>
        </div>
        <div className="inputWrapper">
          <Field name='email' type='email' placeholder='Email'></Field>
          <span className="errorMsg">
            <ErrorMessage name='email' />
          </span>
        </div>
        <div className="inputWrapper">
          <Field name='message' as='textarea' className='form-textarea' placeholder='Message'></Field>
          <span className="errorMsg">
            <ErrorMessage name='message' />
          </span>
        </div>
        <div className="inputWrapper">
          <button type='submit' >Submit</button>
        </div>
      </Form>
    </Formik>
  );
}

export default ContactForm;
