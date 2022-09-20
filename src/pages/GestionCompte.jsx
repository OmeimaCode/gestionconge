import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdOutlineModeEditOutline , MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const data = [
  
];



const GestionCompte = () => {
  const [comptes, setComptes] = useState([]);
  const [isLoading, setisLoading] = useState(true);
const navigation=useNavigate()
  useEffect(() => {
    //
    getCompte();
  }, []);

  const getCompte = async () => {
    //appel au backend

        const url="http://localhost:8888/employees"
        const response=await axios.get(url)
        setComptes(response.data)
        setisLoading(false);
  };
  const onDelete=async(id)=>{
    const url = "http://localhost:8888/employees/"+id;
    setisLoading(true);
    await axios
      .delete(url)
      .then((res) => {
        toast.success("Opération réussie");
      })
      .catch((err) => {
        toast.error("Erreur rencontrée");
      });
    setisLoading(false);
    navigation(0);
  }
  return (
    <div className="p-10 flex flex-row  w-full  flex-col gap-5">
      <div className="flex flex-row justify-between items-center">
      <h1 className="font-title text-2xl uppercase py-6 pr-8">
        Liste des utilisateurs:
      </h1>
      <button className="btn btn-sm bg-primary">Ajouter Utilisateur</button>
      </div>
      
      <div className="flex flex-col gap-4">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Nom Complet</th>
              <th>Fonction</th>
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
                        <div className="font-bold">{c.prenom}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      
                      <div>
                      <div >{c.fonction}</div>
                      </div>
                    </div>
                  </td>
                  <td> {c.mail}</td>
                  <td>{c.tele}</td>
                  <td>{c.adresse}</td>
                  <th>
                    
                      
                          <button  onClick={()=>onDelete(c.id)} className="btn ml-2 btn-sm btn-error">
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
        
      </div>
    </div>
  );
  
};

export default GestionCompte;
