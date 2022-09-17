import React, { useEffect, useState } from "react";
import { MdOutlineModeEditOutline , MdClose } from "react-icons/md";
import { toast } from "react-toastify";

const data = [
  {
    nom: "Hart Hagerty",
    poste: "Directeur",
    email: "H@gmail.com",
    tele: "+212145687962",
    ville: "Rabat",
  },
  {
    nom: "Hart Hagerty",
    poste: "Directeur",
    email: "H@gmail.com",
    tele: "+212145687962",
    ville: "Rabat",
  },
  {
    nom: "Hart Hagerty",
    poste: "Directeur",
    email: "H@gmail.com",
    tele: "+212145687962",
    ville: "Rabat",
  },
  {
    nom: "Hart Hagerty",
    poste: "Directeur",
    email: "H@gmail.com",
    tele: "+212145687962",
    ville: "Rabat",
    
  },
  {
    nom: "Hart Hagerty",
    poste: "Directeur",
    email: "H@gmail.com",
    tele: "+212145687962",
    ville: "Rabat",
  },
];



const GestionCompte = () => {
  const [comptes, setComptes] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    //
    getCompte();
  }, []);

  const getCompte = async () => {
    //appel au backend

    //     const url="localhost:4000/~/~"
    //    const response=await axios.get(url)
    //    setConges(response.data)
    setTimeout(() => {
      setComptes(data);
      setisLoading(false);
    }, 1000);
  };
  return (
    <div className="p-10 flex flex-row  w-full  flex-col gap-5">
      <h1 className="font-title text-2xl uppercase py-6 pr-8">
        Liste des utilisateurs:
      </h1>
      <div className="flex flex-col gap-4">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Nom Complet</th>
              <th>Poste</th>
              <th>Email</th>
              <th>Tele </th>
              <th>Ville</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {comptes.map((c, i) => {
              return (
                <tr key={i} className="">
                  <td>
                    <div className="flex items-center space-x-3">
                      
                      <div>
                        <div className="font-bold">{c.nom}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      
                      <div>
                      <div >{c.poste}</div>
                      </div>
                    </div>
                  </td>
                  <td> {c.email}</td>
                  <td>{c.tele}</td>
                  <td>{c.ville}</td>
                  <th>
                    
                        <a href="#my-modal-2">
                        <button className="btn btn-sm bg-primary">
                          <MdOutlineModeEditOutline className="text-2xl " />
                        </button>
                        </a>
                          <button  onClick={notify} className="btn ml-2 btn-sm btn-error">
                            <MdClose className="text-2xl" />
                          </button>
                       
                       
                     
                  </th>
                </tr>
              );
            })}

    
          </tbody>

         {comptes.length!=0 && <tfoot>
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
            <h3 className="font-bold text-lg">Editer compte</h3>
            <p className="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
            <span className="label-text">Nom complet : </span>
            <input type="text" placeholder="Type here" className="input w-full max-w-xs" /><div></div>
            <span className="label-text">Poste: </span>
            <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
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
const notify = () => {
    toast.error("Compte bien supprime");
  };
export default GestionCompte;
