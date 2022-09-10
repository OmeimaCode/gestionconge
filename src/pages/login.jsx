import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";

import LoginMan from "../imgs/login-man.png";

import InformationCircleIcon from "@heroicons/react/24/solid/InformationCircleIcon";

import { SEPARATOR, SITE_TITLE } from "../utils/globalVariabls";

import { useEffect } from "react";
import Checkbox from "../components/Checkbox";
import Header from "../components/Header";

const Login = () => {
  useEffect(() => {
    document.title = `Login ${SEPARATOR} ${SITE_TITLE}`;
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen my-6 lg:my-0 mx-6 sm:mx-0">
      <div className="flex justify-center items-center">
        <section>
          <Header />

          <img
            src={LoginMan}
            alt=""
            className="block lg:hidden w-52 mx-auto mb-3"
          />

          <div className="text-center mb-10 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl mb-2">Welcome back!</h2>
            <h3 className="text-lg sm:text-xl font-light">
              Sign in by entering the information below
            </h3>
          </div>

          <InputField
            label={"Email Address"}
            name={"email"}
            type={"email"}
            placeHolder={"email@example.com"}
          />

          <InputField
            label={"Password"}
            name={"password"}
            type={"password"}
            placeHolder={"********"}
          />

          <div className="block sm:flex justify-between mb-10 lg:mb-20">
            <Checkbox label={"Remember Me"} name="remember" />

            <div className="flex items-center text-sm font-light cursor-pointer mt-2 sm:mt-0 justify-end">
              <InformationCircleIcon className="h-5 w-5 text-gray-400 mr-2" />
              Forgotten Password
            </div>
          </div>

          <SubmitButton buttonText={"Continue"} />
        </section>
      </div>
      <div className="bg-cyan-900 hidden lg:flex items-center">
        <img src={LoginMan} alt="" className="-ml-10 xl:-ml-16" />
      </div>
    </div>
  );
};

export default Login;
