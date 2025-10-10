import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

const FormikForm = () => {
  const [errors, setErrors] = useState({});

  const validate = (values) => {
    const newErrors = {};
    if (!values.username.trim()) newErrors.username = "Username is required";
    if (!values.email.trim()) newErrors.email = "Email is required";
    if (!values.password.trim()) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (values, { resetForm }) => {
    const validationErrors = validate(values);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    console.log("Form submitted successfully:", values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange }) => (
        <Form className="flex flex-col gap-4 max-w-md mx-auto mt-6">
          <div>
            <label className="block font-bold mb-1">Username:</label>
            <Field
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
              className="border border-gray-400 p-2 rounded w-full"
              placeholder="Enter your username"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>

          <div>
            <label className="block font-bold mb-1">Email:</label>
            <Field
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="border border-gray-400 p-2 rounded w-full"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block font-bold mb-1">Password:</label>
            <Field
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              className="border border-gray-400 p-2 rounded w-full"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
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

export default FormikForm;
