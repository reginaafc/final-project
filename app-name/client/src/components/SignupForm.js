import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Form, Alert } from "react-bootstrap";

import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

const SignupForm = () => {
  const [userFormData, setUserFormData] = useState({
    name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });

  const [validated] = useState(false);

  const [showAlert, setShowAlert] = useState(false);

  const [addUser] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }

    setUserFormData({
      name: "",
      last_name: "",
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <section className="flex flex-col m-8">
        <div className="flex items-center justify-center flex-1">
          <div className="w-full px-4 py-12 text-center rounded-lg sm:border-2 lg:px-24 lg:max-w-xl sm:max-w-md">
            {/* This is needed for the validation functionality above */}
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
              {/* show alert if server response is bad */}
              <h1 className="w-full mb-8 text-3xl font-bold tracking-wider text-gray-600">
                Sign Up
              </h1>
              <Alert
                dismissible
                onClose={() => setShowAlert(false)}
                show={showAlert}
                variant="danger"
              >
                Something went wrong with your signup!
              </Alert>

              <Form.Group>
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  onChange={handleInputChange}
                  value={userFormData.name}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Name is required!
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="last_name">Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your Last name"
                  name="last_name"
                  onChange={handleInputChange}
                  value={userFormData.last_name}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Last Name is required!
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="username">Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your username"
                  name="username"
                  onChange={handleInputChange}
                  value={userFormData.username}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  User Name is required!
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Your email address"
                  name="email"
                  onChange={handleInputChange}
                  value={userFormData.email}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Email is required!
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Your password"
                  name="password"
                  onChange={handleInputChange}
                  value={userFormData.password}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Password is required!
                </Form.Control.Feedback>
              </Form.Group>

              <button
                className="py-2 font-bold text-white transition duration-200 bg-red-900 rounded shadow-lg hover:bg-red-800 w-60 hover:shadow-xl"
                disabled={
                  !(
                    userFormData.username &&
                    userFormData.email &&
                    userFormData.password
                  )
                }
                type="submit"
                variant="success"
              >
                Submit
              </button>
              {/* {error && <div>Sign up failed</div>} */}
            </Form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignupForm;
