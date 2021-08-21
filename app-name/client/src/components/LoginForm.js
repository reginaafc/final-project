
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Auth from '../utils/auth';

import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  
  const[loginUser, {error}] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await loginUser({
        variables: { ...userFormData}
      });

      Auth.login(data.login.token)

      // console.log(data);
    } catch (e) {
      console.error(e);
    }

    setUserFormData({
      name:"",
      last_name:"",
      username: "",
      email: "",
      password: "",
      phone:"",
    });
  };

  return (
  
    <section className="flex flex-col m-8">
      <div className="flex items-center justify-center flex-1">
        <div className="w-full px-4 py-12 text-center rounded-lg sm:border-2 lg:px-24 lg:max-w-xl sm:max-w-md">
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <h1 className="w-full mb-8 text-3xl font-bold tracking-wider text-gray-600">
              Login
            </h1>
        
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group>
          <Form.Label htmlFor='email' >Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <button
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          className="py-2 font-bold text-white transition duration-200 bg-red-900 rounded shadow-lg hover:bg-red-800 w-60 hover:shadow-xl"
          >
          Submit
        </button>
      </Form>
      <div className="mt-12 mb-4 text-center">
            <span>Don't have an account?  </span>
            <a
              href="/signUp"
              className="font-light text-md text-red-600 underline font-semibold hover:text-red-800"
            >
              Create One
            </a>
          </div>

      {error && <div>Login failed</div>}
          
        </div>
        </div>
        </section>
   
  );
};

export default LoginForm;
