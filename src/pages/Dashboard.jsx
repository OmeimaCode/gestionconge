import React from "react";

import {
  AiOutlineClose,
  AiOutlineCheck,
  AiOutlineCalendar,
} from "react-icons/ai";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [historiques, setHistoriques] = useState([]);
  const [cookies] = useCookies(["user"]);

  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    //
    getHistoriques();
  }, []);

  const getHistoriques = async () => {
    //appel au backend
    const url = "http://localhost:8888/demandes";
    const response = await axios.get(url);
    console.log(response.data);
    let data;
    if (cookies.user.isAdmin) {
      data = response.data
    } else {
      data = response.data.filter((r) => r.username == cookies.user.email);
    }
    setHistoriques(data);
    setisLoading(false);
  };
  return (
    <div className="p-10 flex flex-row  w-full  flex-col gap-5">
      <h1 className="font-title text-2xl uppercase py-6 pr-8">
        Bienvenue au Tableau de bord :
      </h1>
      <div className="flex flex-row gap-4">
        <div className="card card-side bg-base-100 shadow-xl">
          <img className="w-40 h-40 p-4 mx-auto " src="../public/emp.png" />
          <div className="card-body">
            <h2 className="card-title font-title">{cookies.user.email}</h2>
            <p className="font-title">{cookies.user.fonction}</p>
            <span className="badge badge-ghost badge-sm">
              {cookies.user.tel}
            </span>
          </div>
          <div className="card-actions justify-end pt-20 p-6">
            <button className="btn text-white border-transparent hover:border-transparent btn-success bg-cyan-700 hover:bg-cyan-900">
              consulter profile
            </button>
          </div>
        </div>
      </div>
      <h4 className="font-title text-2xl uppercase py-6 pr-8">Statistiques:</h4>
      <div className="stats shadow">
       {isLoading ? <button className="btn btn-ghost loading"></button> : <>
       
       <div className="stat">
          <div className="stat-figure text-primary text-3xl">
            <AiOutlineCheck />
          </div>
          <div className="stat-title">Demande Accepter</div>
          <div className="stat-value">{historiques.filter(d=>d.statusDemand=="APPROVED").length}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-primary text-3xl">
            <AiOutlineClose />
          </div>
          <div className="stat-title">Demande refuser</div>
          <div className="stat-value">{historiques.filter(d=>d.statusDemand=="REJECTED").length}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-primary text-3xl">
            <AiOutlineCalendar />
          </div>
          <div className="stat-title">Total Demande</div>
          <div className="stat-value">{historiques.length}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>
       </>}
      </div>
    </div>
  );
};
export default Dashboard;
