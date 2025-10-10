import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  // ✅ Manual validation function
  const validateForm = () => {
    const newErrors = {};
    if (!username.trim()) newErrors.username = "Username is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!password.trim()) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (values, { resetForm }) => {
    if (!validateForm()) {
      // ❌ Stop submission if validation fails
      return;
    }

    // ✅ All good — proceed
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
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className="flex flex-col gap-4 max-w-md mx-auto mt-6">
          {/* Username */}
          <div>
            <label className="block font-bold mb-1">Username:</label>
            <Field
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-gray-400 p-2 rounded w-full"
              placeholder="Enter your username"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block font-bold mb-1">Email:</label>
            <Field
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-400 p-2 rounded w-full"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block font-bold mb-1">Password:</label>
            <Field
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

export default RegistrationForm;
