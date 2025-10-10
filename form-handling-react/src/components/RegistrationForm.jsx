import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (values, { resetForm }) => {
    let newErrors = {};

    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Form submitted successfully:", values);
    setFormData(values);
    setErrors({});
    resetForm();
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange }) => (
        <Form className="flex flex-col gap-4 max-w-md mx-auto mt-6">
          <div>
            <label className="block font-bold mb-1">Username:</label>
            <Field
              type="text"
              name="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                handleChange(e);
              }}
              className="border border-gray-400 p-2 rounded w-full"
            />
            {(errors.username || (
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-sm"
              />
            )) && (
              <div className="text-red-500 text-sm">
                {errors.username}
              </div>
            )}
          </div>

          <div>
            <label className="block font-bold mb-1">Email:</label>
            <Field
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                handleChange(e);
              }}
              className="border border-gray-400 p-2 rounded w-full"
            />
            {(errors.email || (
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            )) && (
              <div className="text-red-500 text-sm">
                {errors.email}
              </div>
            )}
          </div>

          <div>
            <label className="block font-bold mb-1">Password:</label>
            <Field
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                handleChange(e);
              }}
              className="border border-gray-400 p-2 rounded w-full"
            />
            {(errors.password || (
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            )) && (
              <div className="text-red-500 text-sm">
                {errors.password}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
