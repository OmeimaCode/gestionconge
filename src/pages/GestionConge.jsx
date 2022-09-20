import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";
import { MdDone, MdClose } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
  const [showNotif, setShow] = useState(true);
  const [demande, setdemande] = useState();
  const [isLoadingLine, setisLoadingLine] = useState(false);
  const navigation = useNavigate();
  useEffect(() => {
    //
    getConges();
  }, []);

  const getConges = async () => {
    //appel au backend

    const url = "http://localhost:8888/demandes";
    const response = await axios.get(url);
    setConges(response.data);
    setisLoading(false);
  };
  const onAccept = async (demande) => {
    setisLoadingLine(true);
    const url = "http://localhost:8888/demandesAccepter/" + demande.idCongee;
    axios
      .put(url, demande)
      .then((res) => {
        setisLoadingLine(false);
        toast.success("Modification reussie");
        navigation(0);
      })
      .catch((err) => console.log(err));
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
                        <div className="font-bold">{c.username}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div>{c.remplacant}</div>
                        <div className="text-sm opacity-50">
                          {c.mailRemplacant}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>Conge {c.type}</td>
                  <td>{c.date_debut}</td>
                  <td>{c.date_fin}</td>
                  <th>
                    {c.statusDemand == "INITIAL" && (
                      <>
                        <button
                          onClick={() => onAccept(c)}
                          className="btn btn-sm bg-primary"
                        >
                          <MdDone className="text-2xl " />
                        </button>
                        <a href="#my-modal-2">
                          <button
                            onClick={() => setdemande(c)}
                            className="btn ml-2 btn-sm btn-error"
                          >
                            <MdClose className="text-2xl" />
                          </button>
                        </a>
                      </>
                    )}
                    {c.statusDemand == "APPROVED" && (
                      <div className="p-3 text-sm border-[1px] border-blue-500 bg-blue-100 text-center">
                        ACCEPTED
                      </div>
                    )}
                    {c.statusDemand == "REJECTED" && (
                      <div className="p-3  text-sm border-[1px] border-red-500 bg-red-100 text-center flex flex-row items-center justify-center gap-2">
                        REJECTED
                        <a
                          href="#notif"
                          onClick={() => setdemande(c)}
                          className="btn btn-sm btn-error"
                        >
                          <IoMdNotificationsOutline />
                        </a>
                      </div>
                    )}
                  </th>
                </tr>
              );
            })}
          </tbody>

          {conges.length != 0 && (
            <tfoot>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </tfoot>
          )}
        </table>
        <div className="w-full py-6 flex justify-center items-start">
          {isLoading && <span className="btn loading btn-ghost"></span>}
        </div>
        <DialogRefus demande={demande} />
        <DialogShowRefus demande={demande} />
      </div>
    </div>
  );
};

const DialogRefus = ({ demande }) => {
  const [refus, setrefus] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const navigation = useNavigate();
  const [r, setr] = useState(0);
  useEffect(() => {
    getRefus();
  }, []);
  const getRefus = async () => {
    const url = "http://localhost:8888/justifs";
    const response = await axios.get(url);
    setrefus(response.data);
    setisLoading(false);
  };

  const onRefus = async () => {
    const url = "http://localhost:8888/demandesRefuser/" + demande.idCongee;
    axios
      .put(url, {
        ...demande,
        justifRefus: refus[r],
      })
      .then((res) => {
        toast.success("Demande refusee");
        navigation(0);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="modal" id="my-modal-2">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Motif de refus!</h3>

        <span className="label-text">Enter la motif de refus: </span>
        {isLoading ? (
          <label className="loading btn btn-ghost"></label>
        ) : (
          <select
            value={r}
            onChange={(e) => setr(parseInt(e.target.value))}
            className="select w-full max-w-xs"
          >
            {refus.map((r, i) => {
              return (
                <option value={i} key={i}>
                  {r.motifs}
                </option>
              );
            })}
          </select>
        )}
        <div className="modal-action"></div>
        <div className="modal-action">
          <a href="#" className="btn btn-ghost">
            annuler
          </a>
          <button onClick={onRefus} className="btn bg-primary">
            valider
          </button>
        </div>
      </div>
    </div>
  );
};

export const DialogShowRefus = ({ demande }) => {
  return (
    <div className="modal" id="notif">
      <div className="modal-box">
        <p>
        {demande && demande.justifRefus.motifs}
        </p>
      
      <div className="modal-action">
        <a href="#" className="btn">
          ok
        </a>
      </div>
      </div>
     
    </div>
  );
};
export default GestionConge;
