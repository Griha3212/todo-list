/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
import React from "react";
import { useFormik } from "formik";
import { Header } from "../../components/Header/Header";
import { ToDoList } from "../../components/ToDoList/ToDoList";
import "./styles.css";

const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <p>
        {" "}
        <label className="labelForInput" htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </p>

      <p>
        {" "}
        <label className="labelForInput" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </p>

      <button type="submit">Send</button>
    </form>
  );
};

export const LoginPage = () => (
  <div className="App">
    <p>Login page</p>
    <p>Welcome to To Do App</p>
    <p>Please login or register</p>
    <SignupForm />
    <a href="#">I don't have an account</a>
  </div>
);
