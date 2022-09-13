import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/login";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Historique from "./pages/Historique";
import DemandeConge from "./pages/DemandeConge";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Admin from "./pages/Admin";
function App() {
  return (
   <>
    <Routes>
      <Route index element={<Navigate to ="/dashboard"/>}/>
      <Route path="/dashboard" element={<HomePage  />} >
        <Route index element={<Dashboard/>}/>
        <Route path="historique" element={<Historique/>}/>
        <Route path="demandeconge" element={<DemandeConge/>}/>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin/>}/>
    </Routes>

    <ToastContainer/>
   </>
  );
}

export default App;
