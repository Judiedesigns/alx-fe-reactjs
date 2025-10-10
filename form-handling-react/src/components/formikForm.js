import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted successfully:", values);
    resetForm();
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Registration Form
      </h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-4">
          {/* Username */}
          <div>
            <label className="block font-semibold mb-1" htmlFor="username">
              Username:
            </label>
            <Field
              type="text"
              name="username"
              id="username"
              className="border border-gray-400 p-2 rounded w-full"
              placeholder="Enter your username"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-1" htmlFor="email">
              Email:
            </label>
            <Field
              type="email"
              name="email"
              id="email"
              className="border border-gray-400 p-2 rounded w-full"
              placeholder="Enter your email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block font-semibold mb-1" htmlFor="password">
              Password:
            </label>
            <Field
              type="password"
              name="password"
              id="password"
              className="border border-gray-400 p-2 rounded w-full"
              placeholder="Enter your password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;
