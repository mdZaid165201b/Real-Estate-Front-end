import axios from "axios";
import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const loginFunc = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8000/api/admin/login",
        { email, password }
      );
      window.localStorage.setItem("token", response.data.accessToken);
      resetForm();
      setLoading(false);
      navigate("/admin/dashboard/properties", { replace: true });
    } catch (err) {
      console.log(err);
      setLoading(false);
      alert(err.response.data.message);
    }
  };

  const resetForm = () => {
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-8 sm:justify-center sm:pt-0 bg-[#111211]">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold tracking-wide text-red-600">
              Admin
            </h3>
          </a>
        </div>
        <div className="w-full px-8 py-8 mt-10 overflow-hidden bg-[#242424] shadow-md sm:max-w-lg sm:rounded-lg">
          <form>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-200 undefined mb-3"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                ref={emailRef}
                  type="email"
                  className="block w-full mt-1 border-2 p-2 border-red-600 rounded-md  outline-none shadow-sm focus:border-red-600 focus:ring focus:ring-red-600 focus:ring-opacity-60"
                  placeholder="Enter email..."
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-200 undefined mb-3"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                ref={passwordRef}
                  type="password"
                  className="block w-full mt-1 border-2 p-2 border-red-600 rounded-md  outline-none shadow-sm focus:border-red-600 focus:ring focus:ring-red-600 focus:ring-opacity-60"
                  placeholder="Enter Password..."
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-end mt-4">
              <Link
                to="/admin/register"
                className="text-sm text-gray-200 underline hover:text-red-600"
                href="#"
              >
                Register?
              </Link>

              <button
                type="button"
                class="ml-3 inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 text-red-400 transition duration-150 ease-in-out border-2 border-red-400 rounded-md shadow"
                disabled=""
                onClick={(e) => loginFunc(e)}
              >
                {loading ? (
                  <svg
                    class="w-5 h-5 mr-3 -ml-1 text-red-500 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      // stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : null}
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
