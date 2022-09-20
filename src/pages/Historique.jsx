import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { BsPerson } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { DialogShowRefus } from "./Gestionconge";


const Historique = () => {
  const [historiques, setHistoriques] = useState([]);
  const [cookies]=useCookies(['user'])
  const [demande, setdemande] = useState()
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    //
    getHistoriques();
  }, []);


  const getHistoriques = async () => {
    //appel au backend
    const url = "http://localhost:8888/demandes"
    const response = await axios.get(url)
    console.log(response.data)
    setHistoriques(response.data.filter((r)=>r.username==cookies.user.email&&r.statusDemand!="INITIAL"))
    setisLoading(false);

  };
  return (
    <div className="p-10 flex   w-full  flex-col gap-5">
      <h1 className="font-title text-2xl uppercase py-6 pr-8">
        Historiques des demandes de congé :
      </h1>

      <div className="flex flex-col gap-4">
        <table className="table w-full">
          <thead>
            <tr>

              <th>Remplacant</th>
              <th>Type Conge</th>
              <th>Date Debut</th>
              <th>Date Fin</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            {historiques.map((h, i) => {
              return (
                <tr key={i} className="">

                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle pt-4 pl-2 w-12 h-12">
                          <BsPerson className="text-2xl" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{h.remplacant}</div>
                        <div className="text-sm opacity-50">{h.mailRemplacant}</div>
                      </div>
                    </div>
                  </td>
                  <td>Conge {h.type}</td>
                  <td>{h.date_debut}</td>
                  <td>{h.date_fin}</td>
                  <th>
                    {h.statusDemand == "APPROVED" &&
                      <span className="badge bg-primary text-white badge-lg">
                        {h.statusDemand}
                      </span>
                    }

                    {h.statusDemand == "REJECTED" &&
                      <>
                        <span className="badge badge-error text-white badge-lg">
                          Refuser
                        </span>
                        <a href="#notif" onClick={()=>setdemande(h)}>
                          <button className="btn btn-circle btn-outline btn-xs">
                            <IoMdNotificationsOutline className="text-2xl" />
                          </button>
                        </a>
                      </>
                    }
                  </th>
                </tr>
              );
            })}


          </tbody>

          {historiques.length != 0 && <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>

            </tr>
          </tfoot>}
        </table>
        <div className="w-full py-6 flex justify-center items-start">
          {isLoading && <span className="btn loading btn-ghost"></span>}
        </div>
        
        <DialogShowRefus demande={demande}/>
      </div>
    </div>
  );
};
export default Historique;
