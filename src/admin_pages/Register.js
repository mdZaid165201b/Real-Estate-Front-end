import React, { useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const whatsappRef = useRef();

  const registerAdmin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8000/api/admin/register",
        { name, email, password, whatsappNumber }
      );
      setLoading(false);
      resetForm();
      setUser(response);
    } catch (err) {
      alert(err.response.data.message)
      setLoading(false);
    }
  };

  const resetForm = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    whatsappRef.current.value = "";
  };
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-8 sm:justify-center sm:pt-0 bg-[#111211]">
        <div className="items-center flex flex-col justify-center">
          {user && (
            <div
              class="w-full overflow-hidden p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-gray-800 dark:text-green-400"
              role="alert"
            >
              <span class="font-medium">Success</span> Account cretaed
              successfully!!!
            </div>
          )}
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
                htmlFor="name"
                className="block text-sm font-medium text-gray-200 undefined mb-3"
              >
                Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  ref={nameRef}
                  // name="name"
                  className="block w-full mt-1 border-2 p-2 border-red-600 rounded-md  outline-none shadow-sm focus:border-red-600 focus:ring focus:ring-red-600 focus:ring-opacity-60"
                  placeholder="Enter Name..."
                  required
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-200 undefined mb-3"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  ref={emailRef}
                  // name="email"
                  className="block w-full mt-1 border-2 p-2 border-red-600 rounded-md  outline-none shadow-sm focus:border-red-600 focus:ring focus:ring-red-600 focus:ring-opacity-60"
                  placeholder="Enter email..."
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
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
                  type="password"
                  ref={passwordRef}
                  // name="name"
                  className="block w-full mt-1 border-2 p-2 border-red-600 rounded-md  outline-none shadow-sm focus:border-red-600 focus:ring focus:ring-red-600 focus:ring-opacity-60"
                  placeholder="Enter Password..."
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-200 undefined mb-3"
              >
                Whatsapp Number
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="number"
                  ref={whatsappRef}
                  // name="name"
                  className="block w-full mt-1 border-2 p-2 border-red-600 rounded-md  outline-none shadow-sm focus:border-red-600 focus:ring focus:ring-red-600 focus:ring-opacity-60"
                  placeholder="Enter Whatsapp Number..."
                  required
                  onChange={(e) => {
                    setWhatsappNumber(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="flex items-center justify-end mt-4">
              <Link
                to="/admin/login"
                className="text-sm text-gray-200 underline hover:text-red-600"
              >
                Already registered?
              </Link>
              <button
                type="button"
                class="ml-3 inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 text-red-400 transition duration-150 ease-in-out border-2 border-red-400 rounded-md shadow"
                disabled=""
                onClick={(e) => registerAdmin(e)}
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
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : null}
                Register
              </button>
              {/* <button
                type="submit"
                className="inline-flex items-center px-5 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-red-600 hover:bg-red-800 border border-transparent rounded-md active:bg-gray-900 false"
                onClick={(e)=> registerAdmin(e)}
              >
                Register
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
