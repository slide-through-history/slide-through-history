import React, { useState } from "react";

import AUTH_SERVICE from "../../services/AuthService.js";

const Login = (props) => {
  // State to hold credentials on form
  const [credentialsState, setCredentialsState] = useState({
    email: "",
    password: "",
  });

  // State to handle lifecycle changes
  const [lifecycleState, setLifecycleState] = useState({
    errors: [],
    isError: false,
    isLoading: false,
  });

  // State to toggle password visibility
  const [showPasswordState, setShowPasswordState] = useState({
    isVisible: false,
  });

  // Function to toggle password visibility
  let handlePasswordVisibility = () => {
    showPasswordState.isVisible
      ? setShowPasswordState({ isVisible: false })
      : setShowPasswordState({ isVisible: true });
  };

  // Function to route users to Signup page
  let handlePushToSignup = () => {
    return props.history.push("/signup");
  };

  // Function to clear errors
  let handleClearError = () => {
    setLifecycleState({ errors: [], isError: false, isLoading: false });
  };

  // Function to handle Login credentials submission
  let handleSubmit = (event) => {
    event.preventDefault();
    setLifecycleState({ errors: [], isError: false, isLoading: true });
    AUTH_SERVICE.login({
      email: credentialsState.email,
      password: credentialsState.password,
    })
      .then((response) => {
        localStorage.setItem("AuthToken", `Bearer ${response.data.token}`);
        setLifecycleState({
          ...lifecycleState,
          isLoading: false,
        });
        return props.history.push("/");
      })
      .catch((error) => {
        setLifecycleState({
          errors: error.response.data,
          isError: true,
          isLoading: false,
        });
      });
  };

  const { isError, isLoading } = lifecycleState;
  const { isVisible } = showPasswordState;
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <span
                className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
                onClick={() => handlePushToSignup()}
              >
                {" "}
                click here to sign up now!
              </span>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <span className="px-6 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 my-4 w-full h-full">
                  Active
                </span>
                <label for="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={(e) =>
                    setCredentialsState({
                      ...credentialsState,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label for="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={(e) =>
                    setCredentialsState({
                      ...credentialsState,
                      password: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  for="remember_me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="/signup"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={(e) => handleSubmit(e)}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
