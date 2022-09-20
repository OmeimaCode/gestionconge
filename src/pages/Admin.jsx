import React from "react";
import { MdEmail } from "react-icons/md";
import { BsFillUnlockFill } from "react-icons/bs";
import { useCookies } from "react-cookie";
import { SEPARATOR, SITE_TITLE } from "../utils/globalVariabls";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { DB } from "./login";




const Admin = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [cookies, setCookie] = useCookies(["user"]);

  useEffect(() => {
    document.title = `Login ${SEPARATOR} ${SITE_TITLE}`;
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    //
    //
    setisLoading(true);
    setTimeout(() => {
     const data =  DB.filter(
        (d) =>
          d.email == email && d.password == password && d.isAdmin == true
      )[0]

      if (data
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
    <div className="bg-primary h-screen w-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-[400px] flex flex-col gap-5">
        <form onSubmit={onSubmit} className="flex flex-col h-full gap-4">
          <h2 className="font-title text-white text-4xl text-center pb-6">
            Authentification
          </h2>
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
          <div className="py-3"></div>
          <button
            type="submit"
            className={`btn btn-accent bg-amber-100 hover:bg-amber-200 hover:border-transparent"
            ${
                isLoading && "loading"
              }`}
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
