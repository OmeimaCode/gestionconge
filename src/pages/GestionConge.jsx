import React, { useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";
import { MdDone , MdClose } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";

const data = [
  {
    employe: "Hart Hagerty",
    remplacant: "Hart Hagerty",
    email: "H@gmail.com",
    typeConge: "maladie",
    dateDebut: "12/10/2022",
    dateFin: "12/11/2022",
  },
  {
    employe: "Hart Hagerty",
    remplacant: "Hart Hagerty",
    email: "H@gmail.com",
    typeConge: "maladie",
    dateDebut: "12/10/2022",
    dateFin: "12/11/2022",
  },
  {
    employe: "Hart Hagerty",
    remplacant: "Hart Hagerty",
    email: "H@gmail.com",
    typeConge: "maladie",
    dateDebut: "12/10/2022",
    dateFin: "12/11/2022",
  },
  {
    employe: "Hart Hagerty",
    remplacant: "Hart Hagerty",
    email: "H@gmail.com",
    typeConge: "maladie",
    dateDebut: "12/10/2022",
    dateFin: "12/11/2022",
  },
  {
    employe: "Hart Hagerty",
    remplacant: "Hart Hagerty",
    email: "H@gmail.com",
    typeConge: "maladie",
    dateDebut: "12/10/2022",
    dateFin: "12/11/2022",
  },
];


const GestionConge = () => {
  const [conges, setConges] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    //
    getConges();
  }, []);

  const getConges = async () => {
    //appel au backend

    //     const url="localhost:4000/~/~"
    //    const response=await axios.get(url)
    //    setConges(response.data)
    setTimeout(() => {
      setConges(data);
      setisLoading(false);
    }, 1000);
  };
  return (
    <div className="p-10 flex flex-row  w-full  flex-col gap-5">
      <h1 className="font-title text-2xl uppercase py-6 pr-8">
        Liste des demandes de conges:
      </h1>
      <div className="flex flex-col gap-4">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Nom employe</th>
              <th>Remplacant</th>
              <th>Type Conge</th>
              <th>Date Debut</th>
              <th>Date Fin</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {conges.map((c, i) => {
              return (
                <tr key={i} className="">
                  <td>
                    <div className="flex items-center space-x-3">
                      
                      <div>
                        <div className="font-bold">{c.employe}</div>
                        <div className="text-sm opacity-50">{c.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      
                      <div>
                        <div >{c.remplacant}</div>
                        <div className="text-sm opacity-50">{c.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>Conge {c.typeConge}</td>
                  <td>{c.dateDebut}</td>
                  <td>{c.dateFin}</td>
                  <th>
                    
                        
                        <button className="btn btn-sm bg-primary">
                          <MdDone className="text-2xl " />
                        </button>
                        <a href="#my-modal-2">
                          <button className="btn ml-2 btn-sm btn-error">
                            <MdClose className="text-2xl" />
                          </button>
                        </a>
                       
                     
                  </th>
                </tr>
              );
            })}

    
          </tbody>

         {conges.length!=0 && <tfoot>
            <tr>
              <th></th>
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
            
            <span className="label-text">Enter la motif de refus: </span>
            <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
            <div className="modal-action"></div>
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
export default GestionConge;
