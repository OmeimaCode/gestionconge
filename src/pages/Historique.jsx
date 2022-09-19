import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";

const data = [
  {
    remplacant: "Hart Hagerty",
    email: "United States",
    typeConge: "maladie",
    dateDebut: "12/10/2022",
    dateFin: "12/11/2022",
    status: "accepter",
  },
  {
    remplacant: "Hart Hagerty",
    email: "United States",
    typeConge: "maladie",
    dateDebut: "12/10/2022",
    dateFin: "12/11/2022",
    status: "refuser",
  },
  {
    remplacant: "Hart Hagerty",
    email: "United States",
    typeConge: "maladie",
    dateDebut: "12/10/2022",
    dateFin: "12/11/2022",
    status: "accepter",
  },
  {
    remplacant: "Hart Hagerty",
    email: "United States",
    typeConge: "maladie",
    dateDebut: "12/10/2022",
    dateFin: "12/11/2022",
    status: "refuser",
  },
  {
    remplacant: "Hart Hagerty",
    email: "United States",
    typeConge: "maladie",
    dateDebut: "12/10/2022",
    dateFin: "12/11/2022",
    status: "accepter",
  },
];

const Historique = () => {
  const [historiques, setHistoriques] = useState([]);
  const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
    //
    getHistoriques();
  }, []);


  const getHistoriques = async () => {
    //appel au backend
        const url="http://localhost:8888/demandes"
        const response=await axios.get(url)
        console.log(response.data)
        setHistoriques(response.data)
        setisLoading(false);

        //setHistoriques(response.data)
    //setTimeout(() => {
      //setHistoriques(data);
      //setisLoading(false);
//}, 2000);
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
                    {h.statusDemand !==  'INITIAL' && h.statusDemand === 'APPROVED' ? (
                      <span className="badge bg-primary text-white badge-lg">
                        {h.statusDemand}
                      </span>
                    ) : (
                      <>
                        <span className="badge badge-error text-white badge-lg">
                          Refuser
                        </span>
                        <a href="#my-modal-2">
                          <button className="btn btn-circle btn-outline btn-xs">
                            <IoMdNotificationsOutline className="text-2xl" />
                          </button>
                        </a>
                      </>
                    )}
                  </th>
                </tr>
              );
            })}

    
          </tbody>

         {historiques.length!=0 && <tfoot>
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
        <div className="modal" id="my-modal-2">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Motif de refus!</h3>
            <p className="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
            <div className="modal-action">
              <a href="#" className="btn btn-xl bg-primary">
                OK
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Historique;
