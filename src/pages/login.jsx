import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";
import LoginMan from "../imgs/login-man.png";
import InformationCircleIcon from "@heroicons/react/24/solid/InformationCircleIcon";
import { SEPARATOR, SITE_TITLE } from "../utils/globalVariabls";
import { useEffect, useState } from "react";
import Checkbox from "../components/Checkbox";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { BsFillUnlockFill } from "react-icons/bs";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
const DB = [
  {
    email: "oumaima hraichi",
    password: "123456",
    isAdmin: false,
  },
  {
    email: "o@gmail.com",
    password: "abcdef",
    isAdmin: true,
  },
];
const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [cookies, setCookie] = useCookies(["user"]);

  useEffect(() => {
    document.title = `Login ${SEPARATOR} ${SITE_TITLE}`;
  }, []);
  const navigation = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    //
    //
    setisLoading(true);
    setTimeout(() => {
      const data = {
        email,
        password,
        isAdmin: false,
      };

      if (
        DB.some(
          (d) =>
            d.email == email && d.password == password && d.isAdmin == false
        )
      ) {
        console.log("data", data);
        setCookie("user", data);
      } else {
        toast.error("Utilisateur introuvable");
      }
      setisLoading(false);
    }, 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen my-6 lg:my-0 mx-6 sm:mx-0">
      <div className="flex justify-center items-center">
        <form onSubmit={onSubmit} className="flex flex-col h-full gap-4">
          <div className="flex-grow"></div>
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
          <div className="form-control">
            <label className="input-group w-full">
              <span>
                <MdEmail className="text-xl" />
              </span>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group w-full">
              <span>
                <BsFillUnlockFill className="text-xl" />
              </span>
              <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="py-4"></div>
          <button
            type="submit"
            className={`btn btn-accent  border-transparent hover:bg-amber-200 bg-cyan-700 hover:text-cyan-700 hover:border-transparent text-white ${
              isLoading && "loading"
            }`}
          >
            Se connecter
          </button>
          <div className="flex-grow"></div>
          <button
            onClick={() => {
              navigation("/admin");
            }}
            className="btn btn-link text-primary"
          >
            Je suis un admin
          </button>
        </form>
      </div>
      <div className="bg-cyan-900 hidden lg:flex items-center">
        <img src={LoginMan} alt="" className="-ml-10 xl:-ml-16" />
      </div>
    </div>
  );
};

export default Login;
