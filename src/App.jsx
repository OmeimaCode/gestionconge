import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/login";
import Workspace from "./pages/workspace";

function App() {
  return (
    <Routes>
      <Route index element={<Workspace/>} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
