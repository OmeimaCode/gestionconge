import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/login";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/login"} />} />
      <Route path="login" element={<Login />} />
      <Route path="Home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
