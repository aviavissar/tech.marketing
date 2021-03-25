import React, { useState } from "react";
import Input from "./Input.jsx";
import Link from "./Link.jsx";

const Login = ({ title }) => {
  const [formState, setFormState] = useState({});
  const [errMsg, setErrMsg] = useState(null);

  const handleChange = (e) => {
    const {
      target: { value, name },
    } = e;
    setFormState((state) => ({ ...state, [name]: value }));
    setErrMsg(null);
    console.log(formState);
  };

  const validateEmail = (form) => {
    const { username, password } = form;
    if (!username) {
      setErrMsg({ username: "Email or mobile number are Required!" });
      return false;
    } else if (!password) {
      setErrMsg({ password: "Password is Required!" });
      return false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(username) &&
      !/^([+]39)?((3[\d]{2})([ ,\-,\/]){0,1}([\d, ]{6,9}))|(((0[\d]{1,4}))([ ,\-,\/]){0,1}([\d, ]{5,10}))$/i.test(
        username
      )
    ) {
      console.log(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(username));
      setErrMsg({ username: "Email or mobile number are not valid!!" });
      return false;
    }
    return true;
  };

  const hendleSubmit = () => {
    if (validateEmail(formState)) {
      setErrMsg(null);
      alert("ready to send");
      console.log("ready to send");
    }
  };

  return (
    <div
      className="w-396px mb-8 py-4 px-4 pt-10px pb-6 bg-white
     rounded-lg shadow-xl sm:shadow-none sm:w-full"
    >
      <Input
        className="login-input placeholder-sh"
        name="username"
        placeholder="Email or Phone Number"
        type="text"
        errorMsg={errMsg}
        onChange={handleChange}
      />
      <Input
        className="login-input"
        placeholder="Password"
        type="password"
        name="password"
        onChange={handleChange}
        errorMsg={errMsg}
      />
      <button
        onClick={hendleSubmit}
        className="bg-fcbrand w-full text-xl px-4 py-3 hover:bg-fcbrandhov
       mt-2 rounded-md text-white font-semibold sm:py-10px sm:text-base"
      >
        Log In
      </button>
      <div className="flex justify-center mt-4">
        <Link
          className="text-fcbrand mx-auto w-full text-sm sm:hidden hover:underline"
          text="Forgot Password"
        ></Link>
      </div>
      <div
        className="my-5 mx-4 border-b 2xl:w-full sm:inline-flex 
       border-gray-300 sm:w-40%"
      ></div>
      <div className="sm:inline sm:w-1/4 sm:relative sm:-top-4 sm:text-xs 2xl:hidden">
        or
      </div>
      <div
        className="sm:inline-flex sm:my-5 sm:mx-4 sm:border-b
       sm:border-gray-300 sm:w-40% 2xl:hidden"
      ></div>
      <div className="flex justify-center">
        <button
          className="bg-greenBtn text-17px px-4 py-3 mt-6px rounded-md hover:bg-greenBtnhov
         text-white font-semibold sm:py-6px sm:text-base"
        >
          Create New Account
        </button>
      </div>
      <div className="justify-center 2xl:hidden sm:mt-3 sm:flex">
        <Link
          className="text-fcbrand mx-auto w-full text-sm"
          text="Forgot Password"
        ></Link>
      </div>
    </div>
  );
};

export default Login;
