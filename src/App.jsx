import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/login";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Historique from "./pages/Historique";
import DemandeConge from "./pages/DemandeConge";
import Compte from "./pages/Compte";

function App() {
  return (
    <Routes>
      <Route index element={<Navigate to ="/dashboard"/>}/>
      <Route path="/dashboard" element={<HomePage  />} >
        <Route index element={<Dashboard/>}/>
        <Route path="historique" element={<Historique/>}/>
        <Route path="demandeconge" element={<DemandeConge/>}/>
        <Route path="compte" element={<Compte/>}/>
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
