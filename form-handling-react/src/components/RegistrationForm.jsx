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

const FormikForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formData, setFormData] = useState({
        username: username,
        email: email,
        password: password,
    });

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Form submitted successfully:", values);
        setFormData(values); // update useState with formik values
        resetForm();
      }}
    >
      {({ values, handleChange }) => (
        <Form className="flex flex-col gap-4 max-w-md mx-auto mt-6">
          <div>
            <label className="block font-bold mb-1">Username:</label>
            <Field
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            //   onChange={(e) => {
            //     handleChange(e);
            //     setFormData({ ...formData, username: e.target.value });
            //   }}
              className="border border-gray-400 p-2 rounded w-full"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label className="block font-bold mb-1">Email:</label>
            <Field
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            //   onChange={(e) => {
            //     handleChange(e);
            //     setFormData({ ...formData, email: e.target.value });
            //   }}
              className="border border-gray-400 p-2 rounded w-full"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label className="block font-bold mb-1">Password:</label>
            <Field
              type="password"
              name="password"
              value={password}
            //   onChange={(e) => {
            //     handleChange(e);
            //     setFormData({ ...formData, password: e.target.value });
            //   }}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-400 p-2 rounded w-full"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
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
