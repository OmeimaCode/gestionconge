import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/login";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Historique from "./pages/Historique";
import DemandeConge from "./pages/DemandeConge";
import GestionConge from "./pages/GestionConge";
import GestionCompte from "./pages/GestionCompte";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Admin from "./pages/Admin";
import { useEffect } from "react";
import { useCookies } from 'react-cookie';

function App() {
  const [cookies, setCookie] = useCookies(['user']);
  console.log(cookies);

  return (
   <>
    <Routes>
      <Route index element={<Navigate to ="/dashboard"/>}/>
      <Route path="/dashboard" element={!cookies.user?<Navigate to={"/login"}/>:<HomePage  />} >
        <Route index element={<Dashboard/>}/>
        <Route path="historique" element={<Historique/>}/>
        <Route path="demandeconge" element={<DemandeConge/>}/>
        <Route path="gestionconge" element={<GestionConge/>}/>
        <Route path="gestioncompte" element={<GestionCompte/>}/>
      </Route>
      <Route path="/login" element={cookies.user?<Navigate to={"/dashboard"}/>: <Login />} />
      <Route path="/admin" element={cookies.user?<Navigate to={"/dashboard"}/>: <Admin/>}/>
    </Routes>

    <ToastContainer/>
   </>
  );
}

export default App;
